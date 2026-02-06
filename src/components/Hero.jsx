import { motion } from 'framer-motion';

export default function Hero({ groomName = 'Ahmad', brideName = 'Siti' }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 pt-24 z-10"
    >
      <motion.p
        className="font-sans text-earth-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We are getting married
      </motion.p>

      <motion.h1
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-earth-500 text-center leading-tight mb-2"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        {groomName}
      </motion.h1>

      <motion.span
        className="font-serif text-2xl sm:text-3xl text-gold-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        &amp;
      </motion.span>

      <motion.h1
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-earth-500 text-center leading-tight mb-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        {brideName}
      </motion.h1>

      <motion.div
        className="w-20 h-px bg-gold-400/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />

      <motion.p
        className="font-sans text-earth-400 text-sm md:text-base mt-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.
      </motion.p>

      <motion.a
        href="#countdown"
        className="mt-10 inline-flex items-center gap-2 text-gold-600 font-sans text-sm tracking-widest uppercase hover:text-gold-700 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  );
}
