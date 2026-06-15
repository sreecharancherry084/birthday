import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const lines = [
  "Hey Bestie...",
  "Before you continue...",
  "This website contains emotional damage...",
  "Proceed at your own risk.",
];

const Intro = ({ onStart }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTimeout(() => setShowButton(true), 500);
      return;
    }
    if (charIndex <= lines[lineIndex].length) {
      const timer = setTimeout(() => setCharIndex(c => c + 1), 50);
      return () => clearTimeout(timer);
    }
    // Line complete
    setDisplayedLines(prev => [...prev, lines[lineIndex]]);
    setTimeout(() => {
      setLineIndex(i => i + 1);
      setCharIndex(0);
    }, 400);
  }, [lineIndex, charIndex]);

  const currentPartial = lineIndex < lines.length
    ? lines[lineIndex].substring(0, charIndex)
    : '';

  return (
    <motion.div className="intro section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <div className="intro-content">
        <div className="intro-lines">
          {displayedLines.map((line, i) => (
            <motion.p key={i} className="intro-line completed"
              initial={{ opacity: 0.5 }} animate={{ opacity: 0.6 }}>
              {line}
            </motion.p>
          ))}
          {currentPartial && (
            <p className="intro-line active">
              {currentPartial}
              <span className="cursor">|</span>
            </p>
          )}
        </div>

        {showButton && (
          <motion.button className="glow-btn intro-btn"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}>
            ✨ Begin the Adventure ✨
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Intro;
