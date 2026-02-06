import { motion } from 'framer-motion';

export default function Location({
  venue = 'Gedung Serba Guna',
  address = 'Jl. Contoh No. 123, Kota Anda',
  mapsUrl = 'https://maps.google.com',
  akadTime = '08.00 - 09.00 WIB',
  resepsiTime = '10.00 - 14.00 WIB',
}) {
  return (
    <section id="location" className="relative py-16 md:py-24 px-4 z-10">
      <motion.h2
        className="font-serif text-2xl md:text-3xl text-earth-500 text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Lokasi Acara
      </motion.h2>
      <motion.div
        className="w-12 h-px bg-gold-400/60 mx-auto mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="max-w-lg mx-auto bg-cream-100/80 rounded-2xl border border-gold-300/40 p-6 md:p-8 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-serif text-xl text-earth-500 mb-2">{venue}</h3>
        <p className="font-sans text-earth-400 text-sm mb-4">{address}</p>

        <div className="space-y-2 mb-6">
          <p className="font-sans text-sm">
            <span className="text-gold-600 font-medium">Akad Nikah:</span> {akadTime}
          </p>
          <p className="font-sans text-sm">
            <span className="text-gold-600 font-medium">Resepsi:</span> {resepsiTime}
          </p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 text-white font-sans text-sm font-medium hover:bg-gold-600 transition-colors shadow"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
          Buka Google Maps
        </a>
      </motion.div>
    </section>
  );
}
