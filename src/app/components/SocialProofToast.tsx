import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, UserCheck } from 'lucide-react';

const notifications = [
  { icon: Phone, city: 'Towson', action: 'just called to schedule an assessment', time: '2 min ago', color: '#2B7A3E' },
  { icon: UserCheck, city: 'Baltimore', action: 'started their recovery journey today', time: '7 min ago', color: '#2B7A3E' },
  { icon: Phone, city: 'Bel Air', action: 'just called about the IOP program', time: '12 min ago', color: '#2B7A3E' },
  { icon: MessageSquare, city: 'Essex', action: 'requested a free callback', time: '18 min ago', color: '#F0A500' },
  { icon: UserCheck, city: 'Parkville', action: 'completed their clinical assessment', time: '24 min ago', color: '#2B7A3E' },
  { icon: Phone, city: 'White Marsh', action: 'just called about Medical Detox', time: '31 min ago', color: '#2B7A3E' },
  { icon: MessageSquare, city: 'Nottingham', action: 'submitted a callback request', time: '39 min ago', color: '#F0A500' },
  { icon: UserCheck, city: 'Perry Hall', action: 'enrolled in the IOP program', time: '45 min ago', color: '#2B7A3E' },
  { icon: Phone, city: 'Dundalk', action: 'called about MAT treatment options', time: '52 min ago', color: '#2B7A3E' },
  { icon: MessageSquare, city: 'Rosedale', action: 'just requested a free assessment', time: '1 hr ago', color: '#F0A500' },
];

export function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First notification after 6 seconds
    const initialDelay = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 6000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (current === null) return;

    // Hide after 5 seconds, then show next after 8 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    const nextTimer = setTimeout(() => {
      const next = (current + 1) % notifications.length;
      setCurrent(next);
      setVisible(true);
    }, 8000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current]);

  const notif = current !== null ? notifications[current] : null;

  return (
    <div className="fixed bottom-24 left-4 z-40 pointer-events-none" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait">
        {visible && notif && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -60, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -40, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 flex items-start gap-3 max-w-[270px] pointer-events-auto"
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: `${notif.color}18` }}
            >
              <notif.icon className="w-4 h-4" style={{ color: notif.color }} />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p
                className="text-gray-900 text-xs leading-snug"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="font-semibold">Someone from {notif.city}</span>{' '}
                {notif.action}
              </p>
              <p
                className="text-gray-400 text-xs mt-0.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {notif.time} · Maryland
              </p>
            </div>

            {/* Green dot indicator */}
            <span className="flex-shrink-0 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
