import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to resolve figma:asset/ virtual imports
// In Figma Make these are served by the bundler; outside it we return a transparent fallback.
function figmaAssetPlugin(): Plugin {
  const SCHEME = 'figma:asset/'
  // 1x1 transparent PNG as a fallback data URI
  const FALLBACK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

  return {
    name: 'vite-plugin-figma-asset',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith(SCHEME)) {
        return '\0figma-asset:' + id.slice(SCHEME.length)
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        return `export default "${FALLBACK}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
