import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Home, ChevronDown, ChevronUp, ShoppingBag, Shirt, Pill,
  UtensilsCrossed, AlertTriangle, Phone, CheckCircle2, Sparkles, ArrowRight
} from 'lucide-react';

// Facility interior photos — replace with your actual hosted image URLs
const livingRoomImg = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1080&q=80&auto=format&fit=crop';
const kitchenImg = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080&q=80&auto=format&fit=crop';

const PERSON_IMG = 'https://images.unsplash.com/photo-1721522282330-0c2ed44f10cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2JlciUyMGxpdmluZyUyMGhvdXNlJTIwYmVkcm9vbSUyMHdlbGNvbWluZyUyMGJyaWdodCUyMGNsZWFuJTIwaG9tZXxlbnwxfHx8fDE3NzMzNTE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080';

const bringItems = [
  {
    icon: ShoppingBag,
    title: 'Toiletries',
    desc: 'Soap, shampoo, conditioner, laundry detergent, towels, and personal hygiene items.',
    color: '#2B7A3E',
  },
  {
    icon: Shirt,
    title: 'Clothing (7 Days Worth)',
    desc: 'Pack 7 days of clothing — there is a washer and dryer on-site. Don\'t forget laundry detergent.',
    color: '#1a6b9e',
  },
  {
    icon: Pill,
    title: 'Prescribed Medications',
    desc: 'Bring all prescribed medications in original prescription bottles with your name. You are responsible for copays on refills.',
    color: '#7B4A9E',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food (Optional)',
    desc: 'Lunch and dinner are provided. We recommend bringing personal items for special dietary needs. Patients are transported to the grocery store weekly.',
    color: '#F0A500',
  },
  {
    icon: AlertTriangle,
    title: 'Special Considerations',
    desc: 'Space is limited. If your belongings don\'t fit in a kitchen-sized trash bag, you may be asked to send some home. Pack smart.',
    color: '#B85C38',
  },
];

const programFeatures = [
  'Treatment therapies and real-world skill application',
  'Employment or educational activity participation expected',
  'Guidance toward independence and stable, affordable housing',
  'Comprehensive support for a strong, sober lifestyle',
  'Weekly grocery transport',
  'Lunch and dinner provided on-site',
  'Washer and dryer on-site',
  'Peer community and built-in accountability',
];

export function ResidentialPrograms() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="residential"
      ref={ref}
      className="py-20 lg:py-28 bg-[#f8faf8] overflow-hidden"
      aria-label="Hope's Horizon Residential Recovery Housing"
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
            Recovery Housing
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
            Sober Living Is the Bridge
            <br />
            <span className="text-[#2B7A3E]">Between Treatment and True Independence</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Sober, supportive housing is a crucial part of staying clean and living a drug-free lifestyle. Hope's Horizon offers several housing options while engaging in treatment programs.
          </p>
        </motion.div>

        {/* Program cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {/* 3.1 Residential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={livingRoomImg}
                alt="Hope's Horizon 3.1 Residential Program community living room"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span
                  className="inline-block bg-[#2B7A3E] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Now Enrolling
                </span>
                <h3
                  className="text-white mt-2"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 600 }}
                >
                  3.1 Residential Program
                </h3>
              </div>
            </div>
            <div className="p-7">
              <p
                className="text-gray-600 mb-5 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.75 }}
              >
                Clients engage in an assortment of treatment therapies and practice executing those skills in the community. The goal is to guide you toward independence — so you can transition into affordable housing with a strong, sober lifestyle.
              </p>
              <div className="space-y-2.5 mb-6">
                {programFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2B7A3E]" />
                    <span className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:4437254062"
                className="flex items-center justify-center gap-2 bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white px-5 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                Ask About Availability — 443-725-4062
              </a>
            </div>
          </motion.div>

          {/* 3.5 Coming Soon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={kitchenImg}
                alt="Hope's Horizon 3.5 Residential Program coming soon — fully equipped kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4028]/90 to-[#0d2818]/30" />
              <div className="absolute bottom-4 left-4">
                <span
                  className="inline-block bg-[#F0A500] text-[#1a1a1a] text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  ✨ Coming Soon
                </span>
                <h3
                  className="text-white mt-2"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 600 }}
                >
                  3.5 Residential Program
                </h3>
              </div>
            </div>
            <div className="p-7">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <p className="text-amber-800 font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Exciting Expansion Announcement!
                  </p>
                </div>
                <p className="text-amber-700 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                  Hope's Horizon is expanding its residential services. Our new 3.5 Residential Program is coming soon with enhanced programming and additional support structures for those who need a more intensive residential experience.
                </p>
              </div>
              <p
                className="text-gray-500 text-sm mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                This program will provide a higher level of residential care, combining clinical excellence with the warm, family-centered atmosphere Hope's Horizon is known for. Stay tuned — or call us today to be placed on the early notification list.
              </p>
              <a
                href="tel:4437254062"
                className="flex items-center justify-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-5 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                Get Early Notification — Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* What to Bring Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: What to bring */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-[#2B7A3E]" />
                </div>
                <div>
                  <h3
                    className="text-[#1a2e1e]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600 }}
                  >
                    What to Bring
                  </h3>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Packing guide for residential program
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {bringItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="border border-gray-100 rounded-2xl overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenItem(openItem === i ? null : i)}
                      aria-expanded={openItem === i}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span
                        className="text-[#1a2e1e] font-semibold text-sm flex-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.title}
                      </span>
                      {openItem === i ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openItem === i && (
                      <div className="px-4 pb-4 pt-0">
                        <p
                          className="text-gray-500 text-sm pl-12"
                          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo + CTA */}
            <div className="relative hidden lg:flex flex-col">
              <div className="relative flex-1 min-h-[300px] overflow-hidden">
                <img
                  src={PERSON_IMG}
                  alt="Welcoming bright sober living bedroom — a fresh start at Hope's Horizon residential program"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a4028]/80" />
              </div>
              <div className="bg-gradient-to-br from-[#0d2818] to-[#1a4028] p-8">
                <h4
                  className="text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600 }}
                >
                  Ready to Move In?
                </h4>
                <p
                  className="text-white/70 text-sm mb-4"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                >
                  Space in our residential program is limited. Call us today to check availability and take the next step toward your new sober life.
                </p>
                <a
                  href="tel:4437254062"
                  className="flex items-center justify-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-5 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  Check Bed Availability
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p
                  className="text-white/40 text-xs text-center mt-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Lines open daily until 9 PM · 100% Confidential
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}