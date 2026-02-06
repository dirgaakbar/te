import { motion } from 'framer-motion';

const PETAL_COUNT = 15;
const COLORS = ['#F5E6E8', '#E8D4A8', '#E8EDE4', '#F5E6D3', '#D4B8BE'];

function Petal({ delay, duration, x, size, color, rotation }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${x}%`,
        top: '-5%',
        width: size,
        height: size * 1.4,
        background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        transformOrigin: 'center center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
      initial={{ y: -20, rotate: 0, opacity: 0.9 }}
      animate={{
        y: '110vh',
        rotate: rotation,
        opacity: 0.85,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function FallingPetals() {
  const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    duration: 12 + Math.random() * 10,
    x: Math.random() * 100,
    size: 8 + Math.random() * 14,
    color: COLORS[i % COLORS.length],
    rotation: 360 * (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3),
  }));

  return (
    <div className="fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
}
