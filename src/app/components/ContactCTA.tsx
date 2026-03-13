import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2,
  Shield, Lock, Heart, ArrowRight, MessageSquare, CreditCard
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  callTime: string;
  concern: string;
  forSelf: string;
}

const concerns = [
  'Alcohol Dependence',
  'Opiate/Heroin Addiction',
  'Prescription Drug Abuse',
  'Detox Services',
  'Intensive Outpatient (IOP)',
  'Traditional Outpatient',
  'Residential Housing',
  'DUI Education Program',
  'MAT / Suboxone / Vivitrol',
  'Family Member Needs Help',
  'General Information',
];

const callTimes = [
  'As Soon as Possible',
  'Morning (8AM–12PM)',
  'Afternoon (12PM–5PM)',
  'Evening (5PM–9PM)',
];

export function ContactCTA() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', callTime: '', concern: '', forSelf: 'myself',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-[#f8faf8] overflow-hidden"
      aria-label="Contact Hope's Horizon — schedule an appointment"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-[#2B7A3E] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 bg-green-100 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Take the First Step
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
            Reach Out Today.
            <br />
            <span className="text-[#2B7A3E]">We'll Take It From There.</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Asking for help is the bravest thing you'll ever do. We make it simple, private, and judgment-free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Contact Info - 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Primary CTA block */}
            <div className="bg-gradient-to-br from-[#0d2818] to-[#1a4028] rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-[#F0A500]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-[#F0A500]" />
              </div>
              <p
                className="text-[#F0A500] text-xs font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Fastest Way to Get Help
              </p>
              <h3
                className="text-white mb-1"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600 }}
              >
                Call Us Right Now
              </h3>
              <p className="text-white/60 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Open daily until 9 PM
              </p>
              <a
                href="tel:4437254062"
                className="flex items-center justify-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-xl mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-5 h-5" />
                443-725-4062
              </a>
              <p className="text-white/40 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                Select Option #2 for scheduling
              </p>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-4">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  lines: ['4111 E Joppa Road, Suite 101', 'Baltimore, Maryland 21236'],
                  color: '#2B7A3E',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  lines: ['Office: Mon–Fri, 8:30 AM – 5:00 PM', 'Scheduling line: Daily until 9:00 PM'],
                  color: '#F0A500',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  lines: ['Info@hopeshorizon.com'],
                  color: '#1a6b9e',
                  href: 'mailto:Info@hopeshorizon.com',
                },
                {
                  icon: Shield,
                  title: 'Confidentiality',
                  lines: ['HIPAA & 42 CFR Part 2 Protected', '100% Private. Always.'],
                  color: '#7B4A9E',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[#1a2e1e] font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.title}
                    </p>
                    {item.lines.map((l, li) => (
                      item.href && li === 0 ? (
                        <a key={li} href={item.href} className="text-[#1a6b9e] hover:underline text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{l}</a>
                      ) : (
                        <p key={li} className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{l}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance accepted */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-[#2B7A3E]" />
                <p className="text-[#1a2e1e] font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Insurance We Accept
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Maryland Medicaid', 'Magellan', 'United Health Care', 'Kaiser', 'Cigna', 'Private Pay'].map((ins) => (
                  <span
                    key={ins}
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-green-50 text-[#2B7A3E] border border-green-100"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {ins}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Not sure about coverage? Call us — we'll verify your benefits for free.
              </p>
            </div>

            {/* Trust signals */}
            <div className="bg-green-50 rounded-2xl p-5">
              <p
                className="text-[#2B7A3E] font-semibold text-sm mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Why families trust Hope's Horizon:
              </p>
              {[
                'No judgment. No labels. Ever.',
                'State-certified clinical team',
                'Individualized treatment plans',
                'Family support included',
                'Affordable care options',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2B7A3E] flex-shrink-0" />
                  <span className="text-gray-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form - 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
          >
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#2B7A3E]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#1a2e1e]"
                      style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600 }}
                    >
                      Request a Free Callback
                    </h3>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      We'll call you back — discreetly and promptly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3 mb-6">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <p className="text-blue-700 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>Your information is 100% confidential.</strong> We will never share your details without your written consent.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate id="contact-form">
                  {/* For self or someone else */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      I am reaching out for:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['myself', 'a loved one'].map((val) => (
                        <label
                          key={val}
                          className={`flex items-center gap-2 border-2 rounded-xl p-3 cursor-pointer transition-all ${
                            form.forSelf === val
                              ? 'border-[#2B7A3E] bg-green-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="forSelf"
                            value={val}
                            checked={form.forSelf === val}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${form.forSelf === val ? 'border-[#2B7A3E] bg-[#2B7A3E]' : 'border-gray-300'}`} />
                          <span className="text-sm font-medium capitalize text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {val}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="First name is fine"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7A3E]/30 focus:border-[#2B7A3E] transition-colors bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Best Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(443) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7A3E]/30 focus:border-[#2B7A3E] transition-colors bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Email Address <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7A3E]/30 focus:border-[#2B7A3E] transition-colors bg-gray-50 focus:bg-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  {/* Concern & Call time row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="concern" className="block text-gray-700 text-sm font-semibold mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                        I'm interested in:
                      </label>
                      <select
                        id="concern"
                        name="concern"
                        value={form.concern}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7A3E]/30 focus:border-[#2B7A3E] transition-colors bg-gray-50 focus:bg-white appearance-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <option value="">Select a program...</option>
                        {concerns.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="callTime" className="block text-gray-700 text-sm font-semibold mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Best time to call:
                      </label>
                      <select
                        id="callTime"
                        name="callTime"
                        value={form.callTime}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7A3E]/30 focus:border-[#2B7A3E] transition-colors bg-gray-50 focus:bg-white appearance-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <option value="">Select a time...</option>
                        {callTimes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.phone}
                    className="w-full flex items-center justify-center gap-2 bg-[#2B7A3E] hover:bg-[#1f5e2d] disabled:bg-gray-300 text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.01] active:scale-100 shadow-md hover:shadow-lg"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request My Free Callback
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                    By submitting, you agree to be contacted by our team. We respect your privacy completely.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-10 h-10 text-[#2B7A3E]" />
                </div>
                <h3
                  className="text-[#1a2e1e] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600 }}
                >
                  You Did Something Brave Today.
                </h3>
                <p
                  className="text-gray-500 mb-4 max-w-sm mx-auto"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, fontSize: '0.95rem' }}
                >
                  We received your request, {form.name}. A member of our compassionate team will call you back at the time you requested — discreetly and without judgment.
                </p>
                <div className="bg-green-50 rounded-2xl p-5 mb-5">
                  <p className="text-[#2B7A3E] font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    While you wait — you can also call us directly:
                  </p>
                  <a
                    href="tel:4437254062"
                    className="inline-flex items-center gap-2 text-[#2B7A3E] font-bold hover:underline"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Phone className="w-4 h-4" />
                    443-725-4062, Option #2
                  </a>
                </div>
                <p
                  className="flex items-center justify-center gap-1.5 text-gray-400 text-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Heart className="w-3.5 h-3.5 text-red-400" />
                  The journey starts here. We are proud of you.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Crisis Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <strong className="text-gray-500">In a medical emergency, call 911 immediately.</strong>{' '}
            For the national Substance Abuse Helpline, call{' '}
            <a href="tel:18006624357" className="text-[#2B7A3E] hover:underline font-medium">1-800-662-4357</a> (SAMHSA, free, confidential, 24/7).
          </p>
        </motion.div>

      </div>
    </section>
  );
}