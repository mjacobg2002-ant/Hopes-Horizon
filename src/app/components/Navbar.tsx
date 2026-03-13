import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronRight, Shield, Clock } from 'lucide-react';

// Logo rendered as text — swap this for an <img> tag if you host the real logo file
const LogoMark = ({ className = '' }: { className?: string }) => (
  <span
    className={className}
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '-0.02em' }}
  >
    Hope's <span style={{ color: '#2B7A3E' }}>Horizon</span>
  </span>
);

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Residential', href: '#residential' },
  { label: 'Facility', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    // Use a short delay so the drawer close animation doesn't fight the scroll
    setTimeout(() => {
      // "Request a Free Callback" should land on the form itself
      const target = href === '#contact' ? '#contact-form' : href;
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <>
      {/* ── Main navbar ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-white/97 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 focus:outline-none"
              aria-label="Hope's Horizon – Back to top"
            >
              <LogoMark className="h-9 sm:h-11 lg:h-14 w-auto object-contain" />
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm text-gray-700 hover:text-[#2B7A3E] font-medium transition-colors rounded-lg hover:bg-green-50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:4437254062"
                className="flex items-center gap-2 bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                Call 443-725-4062
              </a>
            </div>

            {/* Mobile right-side controls */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Direct-dial phone button — biggest mobile CRO win */}
              <a
                href="tel:4437254062"
                className="flex items-center gap-1.5 bg-[#2B7A3E] text-white px-3.5 py-2 rounded-full text-sm font-bold shadow-md active:scale-95 transition-transform"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="Call 443-725-4062"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xs:inline">Call Now</span>
              </a>

              {/* Hamburger */}
              <button
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-xs bg-white shadow-2xl flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <LogoMark className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-gray-800 hover:text-[#2B7A3E] hover:bg-green-50 transition-colors text-left"
                >
                  <span className="font-medium text-base">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </motion.button>
              ))}
            </nav>

            {/* Drawer footer — CTAs */}
            <div className="p-5 border-t border-gray-100 space-y-3 bg-gray-50">
              {/* Trust micro-signals */}
              <div className="flex items-center gap-4 mb-1">
                <span className="flex items-center gap-1.5 text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Shield className="w-3.5 h-3.5 text-[#2B7A3E]" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Clock className="w-3.5 h-3.5 text-[#2B7A3E]" />
                  Open until 9 PM
                </span>
              </div>

              <a
                href="tel:4437254062"
                className="flex items-center justify-center gap-2 w-full bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white py-4 rounded-2xl font-bold text-base shadow-lg transition-all active:scale-95"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-5 h-5" />
                Call 443-725-4062
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center justify-center gap-2 w-full border-2 border-gray-200 text-gray-700 py-3.5 rounded-2xl font-semibold text-sm hover:border-[#2B7A3E] hover:text-[#2B7A3E] transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Request a Free Callback
              </button>
              <p className="text-center text-gray-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                Option #2 for scheduling · No judgment, ever.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}