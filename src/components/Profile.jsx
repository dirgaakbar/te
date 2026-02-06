import { motion } from 'framer-motion';
import { toImgSrc } from '../utils/imgPath';

const Card = ({ name, role, bio, imagePlaceholder, order }) => {
  const imgSrc = imagePlaceholder ? toImgSrc(imagePlaceholder) : null;
  return (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: order * 0.15 }}
  >
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gold-300/60 shadow-lg bg-cream-200 flex items-center justify-center">
      {imgSrc ? (
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="font-serif text-4xl sm:text-5xl text-gold-400/70">{name.charAt(0)}</span>
      )}
    </div>
    <h3 className="font-serif text-xl sm:text-2xl text-earth-500 mt-4">{name}</h3>
    <p className="font-sans text-gold-600 text-sm uppercase tracking-widest mt-1">{role}</p>
    <p className="font-sans text-earth-400 text-sm mt-3 max-w-xs">{bio}</p>
  </motion.div>
  );
};

export default function Profile({
  groom = { name: 'Ahmad', role: 'Mempelai Pria', bio: 'Putra dari Bapak ... & Ibu ...' },
  bride = { name: 'Siti', role: 'Mempelai Wanita', bio: 'Putri dari Bapak ... & Ibu ...' },
  groomPhoto,
  bridePhoto,
}) {
  return (
    <section id="profile" className="relative py-16 md:py-24 px-4 z-10">
      <motion.h2
        className="font-serif text-2xl md:text-3xl text-earth-500 text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Profil Mempelai
      </motion.h2>
      <motion.div
        className="w-12 h-px bg-gold-400/60 mx-auto mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 max-w-3xl mx-auto">
        <Card
          name={groom.name}
          role={groom.role}
          bio={groom.bio}
          imagePlaceholder={groomPhoto}
          order={0}
        />
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-serif text-2xl text-gold-400">&amp;</span>
        </motion.div>
        <Card
          name={bride.name}
          role={bride.role}
          bio={bride.bio}
          imagePlaceholder={bridePhoto}
          order={1}
        />
      </div>
    </section>
  );
}
