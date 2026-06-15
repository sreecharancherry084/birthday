import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const messages = [
  "Scanning friendship memories...",
  "Recovering embarrassing evidence...",
  "Loading chaos archives...",
  "Detecting drama levels...",
  "Searching for missing brain cells...",
  "Results not found.",
];

const Preloader = ({ onComplete }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex(prev => {
        if (prev >= messages.length - 1) {
          clearInterval(msgTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(msgTimer);
  }, []);

  useEffect(() => {
    const progTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progTimer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 70);
    return () => clearInterval(progTimer);
  }, [onComplete]);

  return (
    <motion.div className="preloader"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}>
      <div className="preloader-content">
        <motion.div className="preloader-icon"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          ✨
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p className="preloader-msg"
            key={msgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            {messages[msgIndex]}
          </motion.p>
        </AnimatePresence>

        <div className="progress-bar-container">
          <motion.div className="progress-bar-fill"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="progress-percent">{Math.min(Math.round(progress), 100)}%</p>
      </div>
      
      {/* Floating emojis */}
      {['🎂', '🎈', '🎉', '🎁', '⭐', '💜'].map((e, i) => (
        <motion.span key={i} className="preloader-emoji"
          style={{ left: `${15 + i * 13}%` }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
          {e}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Preloader;
