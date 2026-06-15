import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { secretLetters } from '../config/mediaConfig';
import './SecretLetters.css';

const SecretLetters = () => {
  const [opened, setOpened] = useState(null);

  return (
    <div className="section letters-section" id="letters">
      <h2 className="section-title gradient-text" data-aos="fade-up">💌 Secret Letters</h2>
      <p className="section-subtitle" data-aos="fade-up">Open with care...</p>
      <div className="envelopes-row">
        {secretLetters.map((letter, i) => (
          <motion.div key={i} className="envelope-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}>
            <motion.div className="envelope"
              style={{ '--accent': letter.color }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(i)}>
              <div className="envelope-flap" />
              <div className="envelope-body">
                <span className="envelope-label">{letter.title}</span>
              </div>
              <div className="envelope-heart">💌</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {opened !== null && (
          <motion.div className="letter-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpened(null)}>
            <motion.div className="letter-paper"
              initial={{ y: 100, opacity: 0, rotateX: 30 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              onClick={e => e.stopPropagation()}>
              <h3 className="letter-title" style={{ color: secretLetters[opened].color }}>
                {secretLetters[opened].title}
              </h3>
              <div className="letter-content">
                {secretLetters[opened].content.split('\n').map((line, j) => (
                  <p key={j}>{line || <br />}</p>
                ))}
              </div>
              <button className="letter-close" onClick={() => setOpened(null)}>Close ✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretLetters;
