import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageSquare, Clock } from 'lucide-react';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 400 && !dismissed) setVisible(true);
      else if (window.scrollY <= 400) setVisible(false);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [dismissed]);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    setVisible(false);
    setExpanded(false);
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setExpanded(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded panel */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-[calc(100vw-2rem)] max-w-[17rem] text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="text-[#1a2e1e] font-bold text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Ready to take the first step?
                    </p>
                    <p
                      className="text-gray-500 text-xs mt-0.5"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      100% confidential · No judgment
                    </p>
                  </div>
                  <button
                    onClick={() => setExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Clock className="w-3.5 h-3.5 text-[#2B7A3E]" />
                  Scheduling lines open daily until 9 PM
                </div>

                <a
                  href="tel:4437254062"
                  className="flex items-center justify-center gap-2 bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white px-4 py-3 rounded-xl font-bold text-sm w-full mb-2 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  Call 443-725-4062
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2.5 rounded-xl font-medium text-sm w-full transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Request a Callback
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <div className="flex items-center gap-2">
            {/* Dismiss button */}
            <button
              onClick={dismiss}
              className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors border border-gray-100"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Main button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2.5 bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-[#2B7A3E]/40 hover:shadow-[#2B7A3E]/60 transition-all duration-200 hover:scale-105 active:scale-100 relative"
              aria-label="Get help - contact Hope's Horizon"
              aria-expanded={expanded}
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full animate-ping bg-[#2B7A3E]/30 pointer-events-none" />
              <Phone className="w-4 h-4 flex-shrink-0 relative z-10" />
              <span
                className="text-sm font-bold relative z-10 hidden sm:block"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Help Now
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}