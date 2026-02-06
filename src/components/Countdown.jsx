import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate = '2025-12-31T09:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-16 md:py-24 px-4 z-10">
      <motion.h2
        className="font-serif text-2xl md:text-3xl text-earth-500 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        Hitung Mundur
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
        {units.map(({ label, value }, i) => (
          <motion.div
            key={label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-cream-100/90 border border-gold-300/50 flex items-center justify-center shadow-sm">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-600 font-medium tabular-nums">
                {mounted ? String(value).padStart(2, '0') : '--'}
              </span>
            </div>
            <span className="font-sans text-earth-400 text-xs sm:text-sm mt-2 uppercase tracking-wider">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
