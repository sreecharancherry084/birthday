import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './BirthdayReveal.css';

const BirthdayReveal = () => {
  const [visible, setVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dims, setDims] = useState({ w: window.innerWidth, h: window.innerHeight });
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !visible) {
        setVisible(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    const handleResize = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => { obs.disconnect(); window.removeEventListener('resize', handleResize); };
  }, [visible]);

  const balloonColors = ['#a855f7', '#ec4899', '#3b82f6', '#fbbf24', '#f472b6', '#60a5fa'];

  return (
    <div className="section reveal-section" ref={ref} id="reveal">
      {showConfetti && <Confetti width={dims.w} height={dims.h} numberOfPieces={300}
        colors={['#a855f7','#ec4899','#3b82f6','#fbbf24','#f472b6']} recycle={false} />}

      {/* Floating balloons */}
      {visible && balloonColors.map((c, i) => (
        <motion.div key={i} className="balloon"
          style={{ left: `${10 + i * 15}%`, background: c }}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: [-20, -60, -20], opacity: 1 }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse' }}>
          <div className="balloon-string" />
        </motion.div>
      ))}

      <motion.div className="reveal-content"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, type: 'spring', damping: 8 }}>

        {/* Cake */}
        <motion.div className="cake-emoji"
          animate={visible ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}>
          🎂
        </motion.div>

        <motion.h1 className="reveal-title"
          initial={{ opacity: 0, y: 50 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}>
          {'HAPPY BIRTHDAY'.split('').map((ch, i) => (
            <motion.span key={i} className="reveal-letter"
              initial={{ opacity: 0, y: 50 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.05 }}>
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div className="reveal-photo-container"
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}>
          <div className="reveal-photo-glow" />
          <img src="/birthday/photos/photo10.jpeg" alt="Best moment" className="reveal-photo"
            loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
        </motion.div>

        {/* Firework sparkles */}
        {visible && [0,1,2,3,4,5].map(i => (
          <motion.div key={i} className="firework-spark"
            style={{ left: `${Math.random() * 80 + 10}%`, top: `${Math.random() * 40 + 10}%` }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}>
            ✦
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BirthdayReveal;
