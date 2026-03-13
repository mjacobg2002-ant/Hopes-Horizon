import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Users, Home, Smile, ArrowRight, Phone, CheckCircle } from 'lucide-react';

// Facility exterior photo — replace with your actual hosted image URL
const houseImg = '/facility-exterior.jpg';

const FAMILY_IMG = 'https://images.unsplash.com/photo-1752090711785-eefa846205c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob2xkaW5nJTIwaGFuZHMlMjBzdXBwb3J0JTIwbG92ZWQlMjBvbmV8ZW58MXx8fHwxNzczMzQ5NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const values = [
  { icon: Heart, title: 'No Labels, No Shame', desc: 'We treat every person with dignity. You are more than your addiction.' },
  { icon: Home, title: 'Forever Home', desc: 'Every client who walks through our doors becomes part of our family.' },
  { icon: Users, title: 'Family Support', desc: 'We support loved ones too, because recovery affects the whole family.' },
  { icon: Smile, title: 'Individualized Care', desc: 'Your path is unique. We tailor every treatment plan to your specific needs.' },
];

const teamRoles = [
  'Certified Administrators',
  'Licensed Case Workers',
  'Board-Certified Physicians',
  'Nurse Practitioners & Nurses',
  'Licensed Counselors & Therapists',
  'Peer Recovery Coaches',
  'People Who Truly Understand',
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="About Hope's Horizon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#2B7A3E] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 bg-green-50 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Story
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
            More Than a Treatment Center.
            <br />
            <span className="text-[#2B7A3E]">We Are Your Forever Home.</span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            Hope's Horizon opened its doors on <strong>April 25, 2016</strong> with one simple mission: to make every person who walks through our doors feel welcomed, valued, and at home. Not as a patient — as family.
          </p>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: House photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={houseImg}
                alt="Hope's Horizon treatment center exterior in Nottingham, Maryland — accessible ramp and welcoming front porch"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d2818]/90 to-transparent p-6">
                <p
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem' }}
                >
                  "The community is our extended family."
                </p>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  — Hope's Horizon Team, Nottingham, Maryland
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#F0A500] text-[#1a1a1a] rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>2016</p>
              <p className="text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Est. in MD</p>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3
              className="text-[#1a2e1e] mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                fontWeight: 600,
                lineHeight: 1.3
              }}
            >
              A Small Dream That Grew Into a Movement
            </h3>
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, fontSize: '0.97rem' }}>
              We started as a small community center. In our <strong>first year alone, we proudly served 118 clients</strong>. Word spread quickly across Maryland and neighboring states — not because of marketing, but because our clients told their stories. By 2017, our census grew by <strong>500%</strong>.
            </p>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, fontSize: '0.97rem' }}>
              Our journey has had its ups and downs — just like the journey through addiction. But we believe that <strong className="text-[#2B7A3E]">there is nothing we can't overcome together</strong>. We are a continued support network for loved ones, a team of dedicated professionals, and most importantly — real people who understand addiction from every angle, including personally.
            </p>

            <div className="bg-green-50 border-l-4 border-[#2B7A3E] rounded-r-2xl px-6 py-4 mb-6">
              <p
                className="text-[#1a2e1e] italic"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', lineHeight: 1.6 }}
              >
                "If you are serious about getting clean and sober, it's never too late to ask for help."
              </p>
              <p className="text-[#2B7A3E] text-sm font-semibold mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                — The Journey Starts Here
              </p>
            </div>

            <a
              href="tel:4437254062"
              className="inline-flex items-center gap-2 bg-[#2B7A3E] hover:bg-[#1f5e2d] text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Phone className="w-4 h-4" />
              Start Your Journey Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group bg-white hover:bg-green-50 border border-gray-100 hover:border-[#2B7A3E]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 group-hover:bg-[#2B7A3E] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <v.icon className="w-6 h-6 text-[#2B7A3E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4
                className="text-[#1a2e1e] mb-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
              >
                {v.title}
              </h4>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team dark banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[#0d2818] to-[#1a4028] rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <span
                className="inline-block text-[#F0A500] text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Our Multidisciplinary Team
              </span>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 600,
                  lineHeight: 1.3
                }}
              >
                One Big "Dysfunctional" Family — With a Fierce Commitment to Help
              </h3>
              <p
                className="text-white/70 mb-6"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, fontSize: '0.95rem' }}
              >
                What sets us apart isn't just our credentials — it's that most of our team has <strong className="text-white">personal experience with addiction</strong>. We don't understand your struggle only academically. We've lived it, or we've loved someone who has.
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {teamRoles.map((role) => (
                  <div key={role} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#2B7A3E] flex-shrink-0" />
                    <span className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block min-h-[300px]">
              <img
                src={FAMILY_IMG}
                alt="Compassionate support for families affected by addiction at Hope's Horizon"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2818]/70 to-transparent" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
