import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Phone } from 'lucide-react';

const reviews = [
  {
    text: "The staff at Hope's Horizon are loving and caring. They'll go out of their way to help you fight addiction and win.",
    author: 'Gamb. D.',
    role: 'Program Graduate',
    stars: 5,
    highlight: 'loving and caring',
    category: 'Staff',
  },
  {
    text: "I will always have a special place in my heart for Hope's Horizon. They took me in when no one else would.",
    author: 'Charles B.',
    role: 'Recovery Alumni',
    stars: 5,
    highlight: 'when no one else would',
    category: 'Acceptance',
  },
  {
    text: "Hopes is a great place. Caring staff and gives you a solid foundation you can lean on. Grew a lot at this place and I still am.",
    author: 'Travis P.',
    role: 'Ongoing Recovery',
    stars: 5,
    highlight: 'a solid foundation you can lean on',
    category: 'Foundation',
  },
  {
    text: "It's an amazing experience. I got to meet some amazing people.",
    author: 'Ben A.',
    role: 'Program Graduate',
    stars: 5,
    highlight: 'amazing people',
    category: 'Community',
  },
  {
    text: "Hope's Horizon literally saved my daughter's life. It's an awesome program. I can't thank them enough for what they did for our family.",
    author: 'Joe R.',
    role: 'Parent of a Graduate',
    stars: 5,
    highlight: 'literally saved my daughter\'s life',
    category: 'Family',
  },
  {
    text: "They have helped many people I know when other places could not. We need more places like this in this world.",
    author: 'R.P.',
    role: 'Community Member',
    stars: 5,
    highlight: 'when other places could not',
    category: 'Community',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#F0A500] text-[#F0A500]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setAutoplay(false); setCurrent((c) => (c + 1) % reviews.length); };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-[#0d2818] to-[#1a4028] overflow-hidden"
      aria-label="Client testimonials and reviews for Hope's Horizon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#F0A500] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 bg-white/10 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Real Stories, Real Recovery
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Hundreds of Lives Changed.
            <br />
            <span className="text-[#F0A500]">These Are a Few of Their Stories.</span>
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.97rem', lineHeight: 1.7 }}
          >
            These are real clients and family members — not actors, not scripts. Just truth.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#F0A500] text-[#F0A500]" />)}
            </div>
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>5.0</span>
            <span className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>— All 6 featured reviews</span>
          </div>
        </motion.div>

        {/* Featured review carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 lg:p-12 text-center"
              >
                <Quote className="w-10 h-10 text-[#F0A500]/40 mx-auto mb-5" />
                <p
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    lineHeight: 1.65,
                    fontStyle: 'italic'
                  }}
                >
                  "{reviews[current].text}"
                </p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: '#2B7A3E', fontFamily: 'Inter, sans-serif' }}
                  >
                    {reviews[current].author[0]}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {reviews[current].author}
                    </p>
                    <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {reviews[current].role}
                    </p>
                  </div>
                </div>
                <StarRating count={reviews[current].stars} />
                <div className="mt-3">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-white/10 text-white/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {reviews[current].category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAutoplay(false); setCurrent(i); }}
                    className={`rounded-full transition-all duration-300 ${
                      current === i ? 'bg-[#F0A500] w-6 h-2' : 'bg-white/30 hover:bg-white/50 w-2 h-2'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* All reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`bg-white/8 hover:bg-white/12 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-default ${
                current === i ? 'border-[#F0A500]/40 bg-white/12' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? '#2B7A3E' : '#F0A500', color: i % 2 === 0 ? 'white' : '#1a1a1a', fontFamily: 'Inter, sans-serif' }}
                >
                  {r.author[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>{r.author}</p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{r.role}</p>
                </div>
                <div className="ml-auto">
                  <StarRating count={r.stars} />
                </div>
              </div>
              <p
                className="text-white/75 text-sm italic leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "{r.text}"
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center gap-1 text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Heart className="w-3 h-3 text-[#F0A500]" /> {r.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p
            className="text-white/60 text-sm mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join hundreds of people who have found their way back to life. Your story could be next.
          </p>
          <a
            href="tel:4437254062"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#d4920a] text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-xl hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Phone className="w-5 h-5" />
            Write Your Own Story — Call 443-725-4062
          </a>
        </motion.div>

      </div>
    </section>
  );
}
