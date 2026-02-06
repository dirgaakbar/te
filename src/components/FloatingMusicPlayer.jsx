import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Default: file music.mp3 di folder public/ (path otomatis benar untuk GitHub Pages)
// Bisa diganti lewat prop musicUrl, mis. URL eksternal atau '/music.mp3'
export default function FloatingMusicPlayer({ musicUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const url = musicUrl ?? (import.meta.env.BASE_URL + 'music.mp3');

  useEffect(() => {
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.volume = 0.5;
    audio.loop = true; // putar ulang terus (khas undangan)
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [url]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold-500 text-white shadow-lg flex items-center justify-center hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      onClick={toggle}
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
      title={isPlaying ? 'Pause' : 'Putar musik'}
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </motion.button>
  );
}
