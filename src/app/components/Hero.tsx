import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, Shield, Heart, Star, ChevronDown, CheckCircle2, Lock } from 'lucide-react';
import logoImg from 'figma:asset/98a737857f12993f3b44f0bf4087769b0bf599aa.png';

const SUNRISE_IMG = 'https://images.unsplash.com/photo-1639865724284-21e01786ac75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwaG9wZSUyMHJlY292ZXJ5JTIwbmF0dXJlJTIwbGlnaHR8ZW58MXx8fHwxNzczMzQ5NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      aria-label="Hope's Horizon - Recovery starts here"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SUNRISE_IMG}
          alt="Sunrise symbolizing hope and new beginnings in recovery"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2818]/90 via-[#1a4028]/80 to-[#0d2818]/85" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0d2818] to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-64 h-64 bg-[#F0A500]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-8 w-48 h-48 bg-[#2B7A3E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">

        {/* Confidential badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 mb-5"
        >
          <Lock className="w-3 h-3 text-[#F0A500]" />
          <span className="text-white/90 text-xs sm:text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            100% Confidential · No Judgment · Affordable Care
          </span>
        </motion.div>

        {/* Main headline - SEO H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-5"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(1.9rem, 5.5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.01em'
          }}
        >
          You Don't Have to Fight
          <br />
          <span className="text-[#F0A500]">Addiction Alone.</span>
        </motion.h1>

        {/* BIG PHONE NUMBER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mb-7"
        >
          <a
            href="tel:4437254062"
            className="group inline-flex flex-col items-center gap-1"
            aria-label="Call Hope's Horizon now at 443-725-4062"
          >
            <span
              className="text-white/60 uppercase tracking-[0.15em] text-xs mb-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Call us now — open daily until 9 PM
            </span>
            <span
              className="text-white/50 text-xs mt-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Option #2 for scheduling
            </span>
          </a>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/80 max-w-2xl mx-auto mb-7"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.875rem, 2vw, 1.05rem)',
            lineHeight: 1.7
          }}
        >
          Hope's Horizon is a <strong className="text-white">family-focused alcohol & drug treatment center</strong> in Nottingham, Maryland — where compassion meets clinical excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
        >
          <a
            href="tel:4437254062"
            className="group flex items-center gap-2.5 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-7 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-200 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 active:scale-100 w-full sm:w-auto justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
            aria-label="Call Hope's Horizon at 443-725-4062"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now: 443-725-4062
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border-2 border-white/40 hover:border-white/70 text-white px-7 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 backdrop-blur-sm w-full sm:w-auto justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Request a Free Callback
          </button>
        </motion.div>

        {/* Trust signals row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2"
        >
          {[
            { icon: Shield, text: 'State-Certified' },
            { icon: Heart, text: 'Family-Focused' },
            { icon: CheckCircle2, text: 'No Labels, No Judgment' },
            { icon: Star, text: 'Open Since 2016' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-1.5 text-white/75 text-xs sm:text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2B7A3E]" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down to learn more"
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}