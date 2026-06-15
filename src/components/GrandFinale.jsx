import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './GrandFinale.css';

const GrandFinale = () => {
  const [active, setActive] = useState(false);
  const [dims, setDims] = useState({ w: window.innerWidth, h: window.innerHeight });
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setActive(true);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', r);
    return () => { obs.disconnect(); window.removeEventListener('resize', r); };
  }, []);

  const hearts = ['❤️', '💜', '💖', '💗', '🩷', '💕'];
  const sparkles = ['✨', '⭐', '🌟', '💫'];

  return (
    <div className="section finale-section" ref={ref} id="finale">
      {active && <Confetti width={dims.w} height={dims.h * 2} numberOfPieces={400}
        colors={['#a855f7','#ec4899','#3b82f6','#fbbf24','#f472b6','#fde68a']}
        recycle={true} gravity={0.08} />}

      {/* Floating hearts */}
      {active && hearts.map((h, i) => (
        <motion.span key={`h-${i}`} className="finale-float"
          style={{ left: `${10 + i * 15}%`, fontSize: `${1.5 + Math.random()}rem` }}
          animate={{ y: [100, -800], opacity: [0, 1, 1, 0], rotate: [0, 360] }}
          transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: i * 0.8 }}>
          {h}
        </motion.span>
      ))}

      {/* Sparkles */}
      {active && sparkles.map((s, i) => (
        <motion.span key={`s-${i}`} className="finale-float"
          style={{ right: `${5 + i * 20}%`, fontSize: '1.5rem' }}
          animate={{ y: [50, -600], opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2 }}>
          {s}
        </motion.span>
      ))}

      <motion.div className="finale-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={active ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, type: 'spring', damping: 8 }}>

        <motion.div className="finale-emoji-row"
          animate={active ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}>
          🎂 🎉 🎈 🎁 🥳
        </motion.div>

        <h1 className="finale-title">
          {'Happy Birthday Bestie ❤️'.split('').map((ch, i) => (
            <motion.span key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.04 }}
              className="finale-letter">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p className="finale-sub"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1.5 }}>
          Thank you for being one of the best parts of my life.
        </motion.p>

        <motion.div className="finale-heart"
          initial={{ opacity: 0, scale: 0 }}
          animate={active ? { opacity: 1, scale: [0, 1.3, 1] } : {}}
          transition={{ delay: 3.5, duration: 1 }}>
          💜
        </motion.div>

        <motion.p className="finale-footer"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 4.5, duration: 1.5 }}>
          Made with love, for you ✨
        </motion.p>
      </motion.div>

      {/* Firework bursts */}
      {active && [0,1,2,3,4].map(i => (
        <motion.div key={`fw-${i}`} className="firework-burst"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 2) * 30}%` }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 1.5 }}>
          <div className="firework-ring" />
        </motion.div>
      ))}
    </div>
  );
};

export default GrandFinale;
