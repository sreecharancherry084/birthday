import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SecurityCheck.css';

const questions = [
  { q: "What nickname do you call me?", opts: ["Kiddo💓", "Cherry🍒", "Pandi🐷", "Bro 👦🏻"] },
  { q: "Who is always right?", opts: ["Me, always", "You, sometimes", "Nobody", "The food"] },
  { q: "Who is the smarter friend?", opts: ["Me, obviously", "You, maybe?", "Both", "Neither"] },
];

const SecurityCheck = () => {
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleAnswer = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    setTimeout(() => {
      if (step < questions.length - 1) setStep(s => s + 1);
      else setVerified(true);
    }, 800);
  };

  return (
    <div className="section security-section" id="security">
      <motion.div className="security-card glass"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>

        <div className="security-header">
          <motion.div className="lock-icon"
            animate={{ rotate: verified ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}>
            {verified ? '🔓' : '🔒'}
          </motion.div>
          <h2 className="section-title gradient-text">Friendship Security Check</h2>
          <p className="security-subtitle">To verify you are the real bestie...</p>
        </div>

        <AnimatePresence mode="wait">
          {!verified ? (
            <motion.div key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="security-question">
              <p className="question-text">{questions[step].q}</p>
              <div className="options-grid">
                {questions[step].opts.map((opt, i) => (
                  <motion.button key={i}
                    className={`option-btn glass ${shaking ? 'shake' : ''}`}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAnswer}>
                    {opt}
                  </motion.button>
                ))}
              </div>
              <div className="step-dots">
                {questions.map((_, i) => (
                  <span key={i} className={`dot ${i <= step ? 'active' : ''}`} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div className="verified-result"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}>
              <motion.div className="verified-check"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 0.8 }}>
                ✅
              </motion.div>
              <h3 className="verified-text gradient-text">
                The system has verified that I am correct.
              </h3>
              <p className="verified-sub">As expected. Scroll down to continue! 👇</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SecurityCheck;
