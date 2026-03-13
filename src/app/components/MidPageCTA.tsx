import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export function MidPageCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-12 overflow-hidden"
      style={{ backgroundColor: '#1a2e1e' }}
      aria-label="Call Hope's Horizon"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2B7A3E 0%, transparent 60%), radial-gradient(circle at 80% 50%, #F0A500 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left: message */}
          <div className="text-center sm:text-left">
            <p
              className="text-white/60 text-xs uppercase tracking-widest mb-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Scheduling lines open daily until 9 PM
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Ready to take the next step?{' '}
              <span className="text-[#F0A500]">We're here.</span>
            </p>
          </div>

          {/* Right: phone + callback */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="tel:4437254062"
              className="group flex items-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-6 py-3.5 rounded-full font-bold transition-all duration-200 shadow-lg hover:scale-105 active:scale-100 whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              443-725-4062
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-6 py-3.5 rounded-full font-semibold transition-all duration-200 whitespace-nowrap backdrop-blur-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}
            >
              Request a Callback
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
