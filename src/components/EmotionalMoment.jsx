import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './EmotionalMoment.css';

const lines = [
  "Years will pass...",
  "People will change...",
  "Life will get busy...",
  "But some friendships remain special.",
];

const finalMsg = "You are not just a friend. You are a part of every good memory I have. No matter where life takes us, you'll always be my person. Thank you for every laugh, every tear, every insane adventure, and every silent moment where we didn't need words. Happy Birthday to someone who makes this world a little brighter just by existing. 💜";

const EmotionalMoment = () => {
  const [lineIdx, setLineIdx] = useState(-1);
  const [charIdx, setCharIdx] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) { setStarted(true); setLineIdx(0); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (lineIdx < 0 || lineIdx >= lines.length) return;
    if (charIdx <= lines[lineIdx].length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 70);
      return () => clearTimeout(t);
    }
    setTimeout(() => {
      if (lineIdx < lines.length - 1) { setLineIdx(i => i + 1); setCharIdx(0); }
      else setTimeout(() => setShowFinal(true), 1000);
    }, 800);
  }, [lineIdx, charIdx]);

  return (
    <div className="section emotional-section" ref={ref} id="emotional">
      <div className="emotional-overlay" />
      <div className="emotional-content">
        {lines.map((line, i) => {
          if (i > lineIdx) return null;
          const text = i === lineIdx ? line.substring(0, charIdx) : line;
          return (
            <motion.p key={i} className={`emotional-line ${i < lineIdx ? 'done' : 'active'}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {text}
              {i === lineIdx && charIdx <= line.length && <span className="cursor">|</span>}
            </motion.p>
          );
        })}
        {showFinal && (
          <motion.div className="emotional-final"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}>
            <div className="emotional-divider">💜</div>
            <p className="emotional-message">{finalMsg}</p>
          </motion.div>
        )}
      </div>
      {/* Soft particles */}
      {started && Array.from({ length: 15 }, (_, i) => (
        <motion.div key={i} className="soft-particle"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
};

export default EmotionalMoment;
