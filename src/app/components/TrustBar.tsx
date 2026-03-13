import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, TrendingUp, CalendarCheck, MapPin, Award, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  numericEnd?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: CalendarCheck,
    value: '2016',
    label: 'Proudly Serving Since',
    sublabel: 'Nearly a decade of transforming lives',
    color: '#2B7A3E',
  },
  {
    icon: Users,
    numericEnd: 118,
    suffix: '+',
    value: '118+',
    label: 'Clients in Year One Alone',
    sublabel: 'Word spread fast — for good reason',
    color: '#F0A500',
  },
  {
    icon: TrendingUp,
    numericEnd: 500,
    suffix: '%',
    value: '500%',
    label: 'Census Growth in Year 2',
    sublabel: 'Community trust drives our expansion',
    color: '#2B7A3E',
  },
  {
    icon: MapPin,
    value: 'MD',
    label: 'Baltimore, Maryland',
    sublabel: '4111 E Joppa Rd · Suite 101',
    color: '#F0A500',
  },
  {
    icon: Clock,
    value: '9 PM',
    label: 'Daily Scheduling Hours',
    sublabel: 'We\'re here when you need us most',
    color: '#2B7A3E',
  },
  {
    icon: Award,
    value: '100%',
    label: 'State-Certified & CARF Accredited',
    sublabel: 'MVA-approved DUI, licensed clinical team',
    color: '#F0A500',
  },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-[#0d2818] to-[#1a4028] py-16 px-4"
      aria-label="Hope's Horizon by the numbers"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#F0A500] text-sm uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Trusted by Maryland Families
          </p>
          <h2 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600 }}>
            Real Results. Real Recovery. Real Hope.
          </h2>
          {/* CARF Accreditation badge */}
          <div className="inline-flex items-center gap-2 mt-4 bg-[#F0A500]/10 border border-[#F0A500]/25 rounded-full px-5 py-2">
            <div className="w-5 h-5 rounded-full bg-[#F0A500] flex items-center justify-center flex-shrink-0">
              <span className="text-[#1a1a1a] font-black" style={{ fontSize: '8px' }}>CA</span>
            </div>
            <span className="text-[#F0A500] text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              CARF Accredited
            </span>
            <span className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>·</span>
            <span className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Commission on Accreditation of Rehabilitation Facilities
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 text-center transition-all duration-300 cursor-default"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 mx-auto"
                style={{ backgroundColor: `${stat.color}22` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div
                className="mb-1"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1.1
                }}
              >
                {stat.numericEnd ? (
                  <AnimatedNumber end={stat.numericEnd} suffix={stat.suffix || ''} />
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-white/80 text-xs font-semibold mb-1 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </p>
              <p className="text-white/40 text-xs leading-tight hidden lg:block" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}