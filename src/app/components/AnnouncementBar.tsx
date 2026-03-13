import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, Shield } from 'lucide-react';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 overflow-hidden"
          style={{ backgroundColor: '#0d2818' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3">

            {/* Mobile: tap-to-call the whole left area */}
            <a
              href="tel:4437254062"
              className="flex items-center gap-2 flex-1 min-w-0 group"
              aria-label="Call Hope's Horizon at 443-725-4062"
            >
              {/* Pulse dot */}
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2B7A3E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2B7A3E]" />
              </span>

              {/* Mobile text — short */}
              <p
                className="sm:hidden text-white/90 text-xs flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-3 h-3 text-[#F0A500] flex-shrink-0" />
                <span><strong className="text-white">443-725-4062</strong> · Free &amp; Confidential</span>
              </p>

              {/* Desktop text — full */}
              <p
                className="hidden sm:flex items-center gap-2 text-white/90 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Shield className="w-3.5 h-3.5 text-[#2B7A3E] flex-shrink-0" />
                <span>
                  Scheduling lines open <strong className="text-white">daily until 9 PM</strong>
                  {' '}— 100% Confidential · No Judgment · Free Assessment Available
                </span>
              </p>
            </a>

            {/* Desktop CTA button */}
            <a
              href="tel:4437254062"
              className="hidden sm:flex items-center gap-1.5 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 flex-shrink-0 whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Phone className="w-3 h-3" />
              443-725-4062
            </a>

            {/* Dismiss */}
            <button
              onClick={() => setVisible(false)}
              className="text-white/40 hover:text-white/80 transition-colors flex-shrink-0 p-1"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
