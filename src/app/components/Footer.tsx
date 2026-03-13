import React from 'react';
import { Phone, MapPin, Clock, Heart, Shield, Mail, Facebook } from 'lucide-react';
import logoImg from 'figma:asset/17b92998cd26987259ae63d8a387f4be3ecf6686.png';

const navSections = [
  {
    title: 'Treatment Programs',
    links: [
      { label: 'Clinical Assessment', href: '#services' },
      { label: 'Medical Detox', href: '#services' },
      { label: 'Medication-Assisted Treatment', href: '#services' },
      { label: 'Intensive Outpatient (IOP)', href: '#services' },
      { label: 'Traditional Outpatient', href: '#services' },
      { label: 'DUI Education Program', href: '#services' },
    ],
  },
  {
    title: 'Residential Programs',
    links: [
      { label: 'Sober Living Overview', href: '#residential' },
      { label: '3.1 Residential Program', href: '#residential' },
      { label: '3.5 Residential (Coming Soon)', href: '#residential' },
      { label: 'What to Bring', href: '#residential' },
      { label: 'Check Bed Availability', href: 'tel:4437254062' },
    ],
  },
  {
    title: 'About & Resources',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Client Reviews', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Request a Callback', href: '#contact' },
    ],
  },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1f10] text-white" role="contentinfo" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column - 2/5 */}
          <div className="lg:col-span-2">
            <img
              src={logoImg}
              alt="Hope's Horizon Drug and Alcohol Treatment Center Logo"
              className="h-16 w-auto object-contain mb-5"
            />
            <p
              className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Hope's Horizon is a family-focused alcohol and drug treatment center discretely located in Nottingham, Maryland. Committed to providing quality, affordable, compassionate treatment — with no labels and no judgment.
            </p>

            {/* CARF Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#F0A500]/10 border border-[#F0A500]/30 rounded-xl px-4 py-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#F0A500] flex items-center justify-center flex-shrink-0">
                <span className="text-[#1a1a1a] font-black text-xs">CA</span>
              </div>
              <div>
                <p className="text-[#F0A500] text-xs font-bold uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>CARF Accredited</p>
                <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Commission on Accreditation of Rehabilitation Facilities</p>
              </div>
            </div>

            {/* Contact block */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:4437254062"
                className="flex items-center gap-3 text-sm hover:text-[#F0A500] transition-colors group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="w-8 h-8 bg-[#2B7A3E]/30 group-hover:bg-[#2B7A3E] rounded-lg flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-[#2B7A3E] group-hover:text-white transition-colors" />
                </div>
                <span>443-725-4062 (Option #2 for scheduling)</span>
              </a>
              <a
                href="mailto:Info@hopeshorizon.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F0A500] transition-colors group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="w-8 h-8 bg-white/5 group-hover:bg-[#2B7A3E]/30 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-[#2B7A3E] transition-colors" />
                </div>
                <span>Info@hopeshorizon.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white/40" />
                </div>
                <span>4111 E Joppa Road, Suite 101<br />Baltimore, Maryland 21236</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-white/40" />
                </div>
                <div>
                  <span className="block">Office: Mon–Fri, 8:30 AM – 5:00 PM</span>
                  <span className="block text-[#F0A500]/70">Scheduling line: Daily until 9:00 PM</span>
                </div>
              </div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F0A500] transition-colors group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="w-8 h-8 bg-white/5 group-hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                </div>
                <span>Follow us on Facebook</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['State-Certified', 'MVA-Approved DUI', 'HIPAA Compliant', 'CARF Accredited', 'Maryland Medicaid'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 bg-white/8 border border-white/10 rounded-full text-white/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-[#F0A500] text-sm transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-white/50 hover:text-white/80 text-sm transition-colors text-left"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance bar */}
      <div className="border-t border-white/10 bg-[#071510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="text-white/40 whitespace-nowrap flex-shrink-0">Insurance accepted:</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1 items-center">
              {['Maryland Medicaid', 'Magellan', 'United Health Care', 'Kaiser', 'Cigna', 'Private Pay'].map((ins) => (
                <span key={ins} className="text-white/60 text-xs">{ins}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crisis resources bar */}
      <div className="border-t border-white/10 bg-[#061008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="flex items-center gap-2 text-white/40">
              <Shield className="w-4 h-4 text-[#2B7A3E]" />
              <span>
                <strong className="text-white/60">Crisis Line (SAMHSA):</strong>{' '}
                <a href="tel:18006624357" className="text-[#F0A500] hover:underline">1-800-662-HELP (4357)</a>
                {' '}· 24/7 · Free · Confidential
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <span>Crisis Text Line: Text HOME to</span>
              <span className="text-white/50 font-semibold">741741</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-[#040d06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/25" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>
              © {new Date().getFullYear()} Hope's Horizon. All rights reserved. 4111 E Joppa Rd Suite 101, Baltimore, MD 21236.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500/60" fill="currentColor" /> for the Maryland community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}