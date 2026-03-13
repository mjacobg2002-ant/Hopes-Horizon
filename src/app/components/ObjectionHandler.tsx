import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { DollarSign, EyeOff, Briefcase, Users, HelpCircle, ChevronDown, Phone, CheckCircle2 } from 'lucide-react';

const objections = [
  {
    icon: DollarSign,
    color: '#2B7A3E',
    fear: '"I can\'t afford treatment."',
    answer: 'Hope\'s Horizon is built around affordability. We work with most insurance plans, offer sliding-scale fees, and can often help you find state or county funding options you didn\'t know existed. Cost has never stopped anyone who called us. Start with a free assessment — there\'s no commitment.',
    cta: 'Ask About Financing',
    reassurance: 'Free assessment · No upfront cost · Insurance-friendly',
  },
  {
    icon: EyeOff,
    color: '#1a6b9e',
    fear: '"I\'m ashamed. What will people think?"',
    answer: 'Every single person who works at Hope\'s Horizon chose this field because they\'ve seen the courage it takes to ask for help. There is zero judgment here — none. We\'ve worked with teachers, nurses, veterans, executives, and parents. Addiction doesn\'t pick favorites, and neither does our compassion.',
    cta: 'This Call Is Confidential',
    reassurance: 'HIPAA-protected · No labels · No judgment · Ever',
  },
  {
    icon: EyeOff,
    color: '#7B4A9E',
    fear: '"I don\'t want my family to find out."',
    answer: 'Federal law (42 CFR Part 2) and HIPAA prohibit us from disclosing any information about your treatment to anyone — including family members — without your written consent. We will never contact your family, employer, or anyone else without your explicit permission. Your privacy is a legal right, not just a promise.',
    cta: 'Learn About Our Privacy Protections',
    reassurance: 'HIPAA compliant · 42 CFR Part 2 protected · Zero disclosure',
  },
  {
    icon: Briefcase,
    color: '#B85C38',
    fear: '"I\'ll lose my job."',
    answer: 'Our outpatient programs are specifically designed to work around employment. Morning and evening sessions, flexible scheduling, and the fact that FMLA (Family & Medical Leave Act) protects your job while seeking treatment for a qualifying condition. Many of our clients continue working throughout treatment — and perform better for it.',
    cta: 'Talk to Us About Scheduling',
    reassurance: 'Flexible hours · Morning & evening sessions · FMLA-eligible',
  },
  {
    icon: HelpCircle,
    color: '#C0392B',
    fear: '"Maybe it\'s not that bad yet."',
    answer: 'This is the most dangerous thought in addiction. The science is clear: early intervention produces dramatically better outcomes. You don\'t need to hit a "rock bottom" to deserve help. If you\'re asking whether it\'s bad enough — it is. One conversation costs you nothing. Waiting could cost you everything.',
    cta: 'Talk to Someone Today',
    reassurance: 'Early intervention · Better outcomes · Free, no-commitment call',
  },
];

function ObjectionCard({ obj, index, inView }: { obj: typeof objections[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={open}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${obj.color}15` }}
        >
          <obj.icon className="w-5 h-5" style={{ color: obj.color }} />
        </div>

        {/* Fear statement */}
        <p
          className="flex-1 text-[#1a2e1e] text-left"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            fontStyle: 'italic',
          }}
        >
          {obj.fear}
        </p>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6" style={{ borderTop: `2px solid ${obj.color}20` }}>
              <p
                className="text-gray-600 mt-4 mb-4"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, fontSize: '0.95rem' }}
              >
                {obj.answer}
              </p>

              {/* Reassurance chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {obj.reassurance.split(' · ').map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${obj.color}10`,
                      color: obj.color,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {r}
                  </span>
                ))}
              </div>

              <a
                href="tel:4437254062"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                style={{ backgroundColor: obj.color, fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-3.5 h-3.5" />
                {obj.cta} — 443-725-4062
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ObjectionHandler() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="concerns"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f0f7f1 100%)' }}
      aria-label="Common concerns about seeking addiction treatment"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-[#2B7A3E] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 bg-green-100 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We Hear You
          </span>
          <h2
            className="text-[#1a2e1e] mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            We Know What's Holding
            <br />
            <span className="text-[#2B7A3E]">You Back From Calling.</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Every concern you have is valid. Every one of them has been heard before. Click on any fear below — we'll answer it honestly.
          </p>
        </motion.div>

        {/* Objection accordion */}
        <div className="space-y-3">
          {objections.map((obj, i) => (
            <ObjectionCard key={obj.fear} obj={obj} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p
            className="text-gray-400 text-sm mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Still not sure? You don't have to commit to anything. Just talk.
          </p>
          <a
            href="tel:4437254062"
            className="inline-flex items-center gap-3 bg-[#1a2e1e] hover:bg-[#0d2010] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Phone className="w-4 h-4" />
            One conversation. Zero obligation. 443-725-4062
          </a>
        </motion.div>

      </div>
    </section>
  );
}
