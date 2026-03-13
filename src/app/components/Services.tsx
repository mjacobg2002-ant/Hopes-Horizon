import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ClipboardList, Stethoscope, Activity, GraduationCap,
  Home, UserCheck, Phone, ChevronRight, CheckCircle2, AlertCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'assessment',
    icon: ClipboardList,
    label: 'Clinical Assessment',
    shortDesc: 'The first step. Compassionate & thorough.',
    color: '#2B7A3E',
    badge: 'Start Here',
    headline: 'Your Journey Begins With Understanding You',
    description: 'Treatment at Hope\'s Horizon begins with a full clinical assessment by a state-certified alcohol & drug counselor. This is a conversation — not an interrogation. We listen.',
    highlights: [
      'Conducted by a state-certified alcohol & drug counselor',
      'Covers biomedical, sociological, and psychological history',
      'Completely confidential and non-judgmental',
      'Leads to a personalized, individualized treatment recommendation',
      'Determines the most appropriate level of care for your needs',
    ],
    note: 'This assessment is your first act of courage. It sets the entire journey in motion.',
    cta: 'Schedule Your Free Assessment',
    img: 'https://images.unsplash.com/photo-1606327054581-0a1d4bf42831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBpbnRha2UlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBkZXNrJTIwbm90ZXBhZHxlbnwxfHx8fDE3NzMzNTkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Professional intake interview with notepad during clinical assessment session',
  },
  {
    id: 'detox',
    icon: Stethoscope,
    label: 'Medical Detox',
    shortDesc: 'Safe, supervised withdrawal management.',
    color: '#1a6b9e',
    badge: 'Medically Supervised',
    headline: 'You Don\'t Have to Detox Alone or Unsafely',
    description: 'Withdrawal from alcohol, benzodiazepines, and opiates can be medically dangerous. Our experienced medical team ensures your safety, comfort, and dignity throughout the process.',
    highlights: [
      'Ambulatory Withdrawal Management for alcohol & benzodiazepines (7–21 days)',
      'Ambulatory Opiate Detox with individualized titration schedules',
      'On-site nursing staff to monitor and adjust medication regimens',
      'Comfort medications utilized to ease withdrawal symptoms',
      'Coordination to higher care level when medically necessary',
    ],
    note: 'Patient welfare is held in the highest regard. You will never be left to struggle alone.',
    cta: 'Talk to Our Medical Team',
    img: 'https://images.unsplash.com/photo-1746842419499-c6ef28c3766a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV0b3glMjBudXJzZSUyMHBhdGllbnQlMjBob3NwaXRhbCUyMGJlZCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzczMzUxNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Medical nurse monitoring patient during supervised detox treatment',
  },
  {
    id: 'maintenance',
    icon: Activity,
    label: 'MAT & Maintenance',
    shortDesc: 'Suboxone & Vivitrol to support long-term recovery.',
    color: '#7B4A9E',
    badge: 'Evidence-Based',
    headline: 'Medication-Assisted Treatment That Actually Works',
    description: 'For those who have had unsuccessful treatment attempts, Medication-Assisted Treatment (MAT) combined with therapy is a proven, evidence-based path forward.',
    highlights: [
      'Suboxone maintenance to reduce cravings and prevent relapse',
      'Vivitrol injections — once-a-month option, no daily medication needed',
      'Combined with individual and group therapy for whole-person healing',
      'Allows patients to return to work, family, and responsibilities',
      'Physician-supervised and clinically monitored',
    ],
    note: 'Choosing MAT is not weakness — it is a clinically smart, proven strategy. Most successful recoveries use every tool available.',
    cta: 'Learn About MAT Options',
    img: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwcHJlc2NyaXB0aW9uJTIwcGhhcm1hY3klMjBkb2N0b3IlMjBwaWxscyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzMzNTE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Doctor reviewing medication-assisted treatment prescription for addiction recovery',
  },
  {
    id: 'php',
    icon: UserCheck,
    label: 'Partial Hospitalization',
    shortDesc: 'Intensive daily care — 6 hrs/day, 7 days/week.',
    color: '#C0392B',
    badge: 'Stabilization Phase',
    headline: 'Intensive Support for the Most Critical Stage of Recovery',
    description: 'Our Partial Hospitalization Program (PHP) — referred to as our Stabilization Phase — is for patients with a higher potential for relapse who need intensive, medically-monitored treatment and robust case management.',
    highlights: [
      '6 hours of daily group therapy, 7 days per week',
      'Weekly individual sessions with your Primary Counselor',
      'Intensive case management and medically-monitored care',
      'Highly focused on critical skills for early recovery',
      'Identifying behavioral triggers, thought patterns, and coping skills',
      'Social skills, positive-reinforcement, and long-term recovery strategies',
      'Typically 1–3 weeks before transitioning to IOP level',
      'Recovery housing is optional',
    ],
    note: 'PHP is our most intensive outpatient level of care. It is designed for individuals who need significant daily structure and clinical oversight during the vulnerable early stages of recovery.',
    cta: 'Ask About PHP Availability',
    img: 'https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbnNpdmUlMjBncm91cCUyMHRoZXJhcHklMjBjaXJjbGUlMjBjaGFpcnMlMjBtZW50YWwlMjBoZWFsdGglMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzczMzUxNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Intensive group therapy circle session for partial hospitalization treatment',
  },
  {
    id: 'iop',
    icon: Home,
    label: 'Intensive Outpatient',
    shortDesc: 'Structure, support & community — 3–5 days/week.',
    color: '#2B7A3E',
    badge: 'Most Popular',
    headline: 'Rebuild Your Life While Living It',
    description: 'Our Intensive Outpatient Program (IOP) is for those who need serious structure and support without residential care. It\'s the bridge between crisis and independence.',
    highlights: [
      '3-hour group sessions, 3–5 days per week',
      'Biweekly meetings with your Primary Counselor',
      'Evidence-based Matrix Model treatment philosophy',
      'Groups in: Relapse Prevention, Trauma, Mindfulness, Life Skills',
      'Co-Occurring Disorders, Grief & Loss, Anger Management, 12-Step',
      'Vocational skills, interpersonal relationships, and family dynamics',
      'Optional recovery housing available',
    ],
    note: 'IOP is designed to help you cultivate a new-found sense of self — free from addiction, rich with purpose.',
    cta: 'Explore the IOP Program',
    img: 'https://images.unsplash.com/photo-1763477950484-12fd6f42c67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzaXR0aW5nJTIwdG9nZXRoZXIlMjBjb21tdW5pdHklMjB3ZWxsbmVzcyUyMGdyb3VwJTIwaW5kb29yfGVufDF8fHx8MTc3MzM2NTMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Recovery support group people sitting together in intensive outpatient therapy',
  },
  {
    id: 'outpatient',
    icon: ChevronRight,
    label: 'Traditional Outpatient',
    shortDesc: 'Flexible schedule — morning & evening sessions.',
    color: '#B85C38',
    badge: 'Flexible',
    headline: 'Recovery That Fits Around Your Life',
    description: 'For individuals assessed at a lower risk for relapse and withdrawal, our Traditional Outpatient program offers maximum flexibility while maintaining professional clinical support.',
    highlights: [
      'Morning and evening sessions available',
      'Blend of group and individual counseling',
      'For patients who are relatively stable and rebuilding their lives',
      'Flexible schedule accommodates work, family, and daily responsibilities',
      'Optional recovery housing available',
    ],
    note: 'Just because the structure is flexible doesn\'t mean the support is less powerful. Our counselors are fully invested in your recovery.',
    cta: 'See Outpatient Options',
    img: 'https://images.unsplash.com/photo-1696453423411-3fc7847a9611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGV4aWJsZSUyMHNjaGVkdWxlJTIwd29yayUyMGxpZmUlMjBiYWxhbmNlJTIwY2FsbSUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzczMzY1MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Flexible outpatient counseling session with professional in calm office setting',
  },
  {
    id: 'dui',
    icon: GraduationCap,
    label: 'DUI Education',
    shortDesc: 'State-certified. MVA-approved. 12-hour program.',
    color: '#F0A500',
    badge: 'MVA Approved',
    headline: 'State-Certified DUI Education — Get Your Life Back on Track',
    description: 'Hope\'s Horizon offers a 6-week, 12-hour DUI education course that is state-certified and approved by the Maryland Motor Vehicle Administration (MVA).',
    highlights: [
      '6-week program, 12 total hours',
      'State-certified and MVA-approved',
      'Meets Maryland court and MVA requirements',
      'Flexible scheduling available',
      'Call 443-725-4062, Option #2 for cost and scheduling',
    ],
    note: 'This program meets Maryland court and MVA requirements. Call us for pricing and current schedule.',
    cta: 'Call for DUI Program Details',
    img: 'https://images.unsplash.com/photo-1758270704080-e3556e6794a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBhZHVsdCUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nJTIwc2VtaW5hciUyMGdyb3VwfGVufDF8fHx8MTc3MzM1MTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imgAlt: 'Adult education classroom seminar for DUI education program',
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const current = services[active];

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-[#f8faf8] overflow-hidden" aria-label="Hope's Horizon Treatment Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Treatment Programs
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
            A Six-Month Program Built
            <br />
            <span className="text-[#2B7A3E]">Entirely Around You</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Every path through recovery is different. Click any program below to see what it involves — and call us to find out which fits you best.
          </p>
        </motion.div>

        {/* Main layout: sidebar + detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* === LEFT SIDEBAR: Numbered program list === */}
          <div
            className="w-full lg:w-72 lg:flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden"
            role="tablist"
            aria-label="Treatment program list"
          >
            {services.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                  active === i
                    ? 'bg-[#f0f9f3]'
                    : 'hover:bg-gray-50'
                }`}
                style={{ borderLeft: active === i ? `4px solid ${s.color}` : '4px solid transparent' }}
              >
                {/* Step number */}
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200"
                  style={{
                    backgroundColor: active === i ? s.color : '#e5e7eb',
                    color: active === i ? 'white' : '#6b7280',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {i + 1}
                </span>
                {/* Label + short desc */}
                <div className="min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: active === i ? s.color : '#1a2e1e'
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs text-gray-400 truncate mt-0.5"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {s.shortDesc}
                  </p>
                </div>
                {/* Active indicator icon */}
                {active === i && (
                  <s.icon className="w-4 h-4 flex-shrink-0 ml-auto" style={{ color: s.color }} />
                )}
              </button>
            ))}

            {/* Sidebar CTA */}
            <div className="p-4 bg-[#1a2e1e]">
              <p className="text-white/80 text-xs mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Not sure where to start? We'll guide you.
              </p>
              <a
                href="tel:4437254062"
                className="flex items-center justify-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] text-sm font-bold px-4 py-2.5 rounded-xl w-full transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-3.5 h-3.5" />
                Call 443-725-4062
              </a>
            </div>
          </div>

          {/* === RIGHT PANEL: Program detail === */}
          <div className="flex-1 min-w-0">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              id={`panel-${current.id}`}
              role="tabpanel"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Content */}
                <div className="lg:col-span-3 p-7 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${current.color}18` }}
                    >
                      <current.icon className="w-5 h-5" style={{ color: current.color }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: current.color, fontFamily: 'Inter, sans-serif' }}
                    >
                      {current.badge}
                    </span>
                  </div>

                  <h3
                    className="text-[#1a2e1e] mb-3"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                      fontWeight: 600,
                      lineHeight: 1.3
                    }}
                  >
                    {current.headline}
                  </h3>
                  <p
                    className="text-gray-600 mb-5"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75, fontSize: '0.95rem' }}
                  >
                    {current.description}
                  </p>

                  <div className="space-y-2.5 mb-5">
                    {current.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: current.color }} />
                        <span className="text-gray-700 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Clinical note */}
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl mb-5"
                    style={{ backgroundColor: `${current.color}0d`, borderLeft: `3px solid ${current.color}` }}
                  >
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: current.color }} />
                    <p className="text-gray-700 text-sm italic" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                      {current.note}
                    </p>
                  </div>

                  <a
                    href="tel:4437254062"
                    className="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                    style={{ backgroundColor: current.color, fontFamily: 'Inter, sans-serif' }}
                  >
                    <Phone className="w-4 h-4" />
                    {current.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Image */}
                <div className="hidden lg:block lg:col-span-2 relative min-h-[380px]">
                  <img
                    src={current.img}
                    alt={current.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <p
                      className="text-[#1a2e1e] font-semibold text-sm mb-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Ready to take the first step?
                    </p>
                    <p className="text-gray-500 text-xs mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Scheduling lines open daily until 9 PM. Space is limited.
                    </p>
                    <a
                      href="tel:4437254062"
                      className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-full w-full justify-center"
                      style={{ backgroundColor: current.color, fontFamily: 'Inter, sans-serif' }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      443-725-4062, Option #2
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          All programs are part of Hope's Horizon's comprehensive 6-month treatment approach. Recovery housing is optional.
        </motion.p>

      </div>
    </section>
  );
}