import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'How do I get started? What is the first step?',
    a: 'The first step is simply making a phone call. Call 443-725-4062, option #2, to schedule an appointment. Our scheduling line is open daily until 9 PM. During your first visit, you will meet with one of our state-certified counselors for a comprehensive clinical assessment — a conversation designed to understand your unique situation and recommend the right level of care.',
    category: 'Getting Started',
  },
  {
    q: 'Is my information kept confidential?',
    a: 'Absolutely. Your privacy is sacred to us. All information shared with Hope\'s Horizon is protected under federal and Maryland confidentiality laws (42 CFR Part 2 and HIPAA). We will never share your personal information without your written consent, except in the rare cases required by law. You can trust that your journey here is your business — and no one else\'s.',
    category: 'Privacy',
  },
  {
    q: 'Do you accept insurance? What are the costs?',
    a: 'Hope\'s Horizon is committed to making treatment affordable. We work with many insurance plans and are dedicated to helping you understand your coverage. We believe financial barriers should never stand between a person and their recovery. Call us at 443-725-4062 to discuss your specific insurance plan and financing options. Our team will help you navigate the process.',
    category: 'Cost & Insurance',
  },
  {
    q: 'Do I have to be a Maryland resident to receive treatment?',
    a: 'No. While we are based in Nottingham, Maryland, word of Hope\'s Horizon has spread throughout Maryland and surrounding states. We welcome clients from all areas. Our residential program also provides housing, making it feasible to travel to us for treatment. Call us to discuss your specific situation.',
    category: 'Eligibility',
  },
  {
    q: 'What is the difference between Suboxone and Vivitrol maintenance?',
    a: 'Both are evidence-based Medication-Assisted Treatment (MAT) options for opiate dependence. Suboxone (buprenorphine/naloxone) is a daily sublingual medication that reduces cravings and prevents withdrawal. Vivitrol (naltrexone) is a once-monthly injection that blocks the euphoric effects of opiates and alcohol. Our physician will help determine which option is best suited to your individual needs, goals, and history.',
    category: 'Medical',
  },
  {
    q: 'Can my family be involved in my treatment?',
    a: 'Yes — and we strongly encourage it. Hope\'s Horizon is fundamentally family-focused. Addiction affects the entire family, and healing is more sustainable when loved ones are part of the journey. We provide support resources for family members and loved ones, and our counselors can discuss family involvement options during your assessment.',
    category: 'Family',
  },
  {
    q: 'What if I have relapsed before? Will you still help me?',
    a: 'Relapse is a part of many people\'s recovery journey — not a sign of failure, and certainly not a reason to give up. We do not judge. We do not label. We believe in you regardless of how many times you\'ve tried. In fact, for those with a history of relapse, we have specific evidence-based programs like Medication-Assisted Treatment (MAT) and our Intensive Outpatient Program (IOP) designed to address the underlying causes and reduce relapse risk.',
    category: 'Recovery',
  },
  {
    q: 'How long is the program?',
    a: 'Hope\'s Horizon offers a comprehensive six-month program with several treatment options to accommodate each person\'s individual needs. The specific duration and structure of your treatment will be determined during your clinical assessment. Some clients complete treatment within this timeframe; others continue with ongoing support. We are your forever home — we\'re here as long as you need us.',
    category: 'Program Details',
  },
  {
    q: 'What is the DUI Education program and who needs it?',
    a: 'Our DUI Education program is a 6-week, 12-hour course that is state-certified and approved by the Maryland MVA. It is required for many individuals convicted of driving under the influence in Maryland. The program focuses on critical recovery skills, behavioral triggers, coping strategies, and social skills. Call us at 443-725-4062, option #2 for scheduling and cost information.',
    category: 'DUI Program',
  },
  {
    q: 'Is recovery housing required?',
    a: 'Recovery housing is entirely optional. It is available for those who need a stable, sober environment while engaging in treatment — but it is not mandatory. Many clients continue living at home or with family while participating in our outpatient programs. If you are unsure whether recovery housing is right for you, our counselors will discuss your living situation and help you determine the best path forward.',
    category: 'Housing',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = filter === 'All' ? faqs : faqs.filter(f => f.category === filter);

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="Frequently Asked Questions about Hope's Horizon">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Common Questions
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
            We Know You Have Questions.
            <br />
            <span className="text-[#2B7A3E]">Here Are Honest Answers.</span>
          </h2>
          <p
            className="text-gray-500"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            If you don't see your question here, please don't hesitate to call. We are always here to talk — no pressure, no judgment.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setOpen(null); }}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#2B7A3E] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 mb-12"
        >
          {filtered.map((faq, i) => {
            const globalIndex = faqs.indexOf(faq);
            const isOpen = open === globalIndex;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#2B7A3E]/40 shadow-md' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  className={`w-full flex items-start gap-3 p-5 text-left transition-colors ${
                    isOpen ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setOpen(isOpen ? null : globalIndex)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${globalIndex}`}
                >
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-[#2B7A3E]' : 'text-gray-400'}`} />
                  <span
                    className="flex-1 font-semibold text-[#1a2e1e] text-sm leading-snug"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {faq.q}
                  </span>
                  <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                    <span
                      className="hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.category}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${globalIndex}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 pl-[52px] bg-white">
                        <p
                          className="text-gray-600 text-sm leading-relaxed"
                          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#0d2818] to-[#1a4028] rounded-3xl p-8 text-center"
        >
          <p
            className="text-[#F0A500] text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Still Have Questions?
          </p>
          <h3
            className="text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600 }}
          >
            Talk to a Real Person — Today
          </h3>
          <p
            className="text-white/60 text-sm mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our compassionate team is available daily until 9 PM. There is no question too small, no situation too complicated. We are here.
          </p>
          <a
            href="tel:4437254062"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Phone className="w-4 h-4" />
            Call 443-725-4062
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-white/30 text-xs mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Select Option #2 for Scheduling
          </p>
        </motion.div>

      </div>
    </section>
  );
}
