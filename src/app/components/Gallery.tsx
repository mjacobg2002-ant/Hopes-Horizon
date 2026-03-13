import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Home, Phone } from 'lucide-react';

// Facility photos — replace these URLs with your actual hosted facility images
const houseImg = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1080&q=80&auto=format&fit=crop';
const livingRoomImg = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1080&q=80&auto=format&fit=crop';
const kitchenImg = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080&q=80&auto=format&fit=crop';
const foyerImg = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&q=80&auto=format&fit=crop';

const photos = [
  {
    src: houseImg,
    alt: "Hope's Horizon treatment center exterior — accessible ramp, welcoming front porch in Nottingham, MD",
    label: 'Our Home',
    desc: 'Discreetly located in Nottingham, Maryland — a safe, welcoming environment.',
  },
  {
    src: livingRoomImg,
    alt: "Hope's Horizon comfortable living room — warm community space for residents in recovery",
    label: 'Community Space',
    desc: 'A warm community living area where connections and friendships are made.',
  },
  {
    src: kitchenImg,
    alt: "Hope's Horizon fully equipped kitchen with stainless steel appliances and granite countertops",
    label: 'Full Kitchen',
    desc: 'A fully equipped kitchen with all the comforts of home — meals provided.',
  },
  {
    src: foyerImg,
    alt: "Hope's Horizon welcoming entryway and foyer — calm, private entrance for clients",
    label: 'Welcoming Entry',
    desc: 'A calm, safe, private entrance — the first step to your new beginning.',
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-label="Hope's Horizon Facility Gallery — Nottingham, Maryland"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-[#2B7A3E] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 bg-green-50 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Facility
          </span>
          <h2
            className="text-[#1a2e1e] mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            A Place That Actually
            <span className="text-[#2B7A3E]"> Feels Like Home</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Environment matters in recovery. Our Nottingham, Maryland facility is designed to feel warm, safe, and calming — because healing requires comfort, not clinical coldness.
          </p>
        </motion.div>

        {/* Photo grid — Magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Top row: 2 photos */}
          <div className="grid grid-cols-1 gap-4">
            {/* House exterior — large featured */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photos[0].label} — ${photos[0].desc}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(0)}
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow">
                <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Home className="w-3 h-3 text-[#F0A500]" />
                  <span className="text-[#F0A500] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {photos[0].label}
                  </span>
                </div>
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{photos[0].desc}</p>
              </div>
            </motion.div>

            {/* Living room */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setLightbox(1)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photos[1].label} — ${photos[1].desc}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(1)}
            >
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/85 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow">
                <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Home className="w-3 h-3 text-[#F0A500]" />
                  <span className="text-[#F0A500] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {photos[1].label}
                  </span>
                </div>
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{photos[1].desc}</p>
              </div>
            </motion.div>
          </div>

          {/* Right column: kitchen + foyer */}
          <div className="grid grid-cols-1 gap-4">
            {/* Kitchen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setLightbox(2)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photos[2].label} — ${photos[2].desc}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(2)}
            >
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/85 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow">
                <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Home className="w-3 h-3 text-[#F0A500]" />
                  <span className="text-[#F0A500] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {photos[2].label}
                  </span>
                </div>
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{photos[2].desc}</p>
              </div>
            </motion.div>

            {/* Foyer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setLightbox(3)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photos[3].label} — ${photos[3].desc}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(3)}
            >
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/85 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow">
                <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Home className="w-3 h-3 text-[#F0A500]" />
                  <span className="text-[#F0A500] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {photos[3].label}
                  </span>
                </div>
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{photos[3].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hope's Horizon is discreetly located in Nottingham, Maryland. Call to schedule a tour or ask about current availability.
          </p>
          <a
            href="tel:4437254062"
            className="inline-flex items-center gap-2 text-[#2B7A3E] border-2 border-[#2B7A3E] hover:bg-[#2B7A3E] hover:text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Phone className="w-4 h-4" />
            Call 443-725-4062 to Schedule a Tour
          </a>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo: ${photos[lightbox].label}`}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white/70 text-center mt-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-semibold text-white">{photos[lightbox].label}</span> — {photos[lightbox].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}