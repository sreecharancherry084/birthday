import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import './AdventureWheel.css';

const options = [
  { text: 'Long Bike Ride', icon: '🏍', color: '#ff007f' },
  { text: 'Make Reels Together', icon: '🎥', color: '#7000ff' },
  { text: 'Dance Together', icon: '💃', color: '#00d2ff' },
  { text: 'Trek Adventure', icon: '⛰', color: '#ffaa00' },
  { text: 'Dream Trip', icon: '✈', color: '#ff007f' },
  { text: 'Random Cafe Hangout', icon: '☕', color: '#7000ff' },
  { text: 'Sunset Ride', icon: '🌅', color: '#00d2ff' },
  { text: 'Create More Memories', icon: '📸', color: '#ffaa00' },
];

const backgroundStr = `conic-gradient(from -22.5deg, ${options.map((opt, i) => `${opt.color} ${i * 45}deg ${(i + 1) * 45}deg`).join(', ')})`;

const AdventureWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    setAccepted(false);
    
    const winnerIndex = Math.floor(Math.random() * options.length);
    const extraSpins = 360 * 5;
    const targetAngle = 360 - (winnerIndex * 45);
    
    const currentBase = rotation - (rotation % 360);
    const newRotation = currentBase + extraSpins + targetAngle;
    
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedOption(options[winnerIndex]);
      setShowResult(true);
    }, 5000);
  };

  return (
    <div className="section adventure-wheel-section" id="adventure-wheel">
      {showResult && !accepted && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={false} 
          numberOfPieces={300} 
        />
      )}
      
      <h2 className="section-title gradient-text" data-aos="fade-up">Spin The Future Adventure Wheel</h2>
      <p className="section-subtitle" data-aos="fade-up">Let destiny decide our next memory</p>

      <div className="wheel-container" data-aos="zoom-in">
        <div className="wheel-pointer"></div>
        <motion.div 
          className="wheel" 
          animate={{ rotate: rotation }}
          transition={{ duration: 5, ease: [0.2, 0.8, 0.1, 1] }}
          style={{ background: backgroundStr }}
        >
          {options.map((opt, i) => (
            <div 
              key={i} 
              className="wheel-slice"
              style={{ transform: `rotate(${i * 45}deg)` }}
            >
              <span className="slice-text">
                <span className="slice-icon">{opt.icon}</span>
                {opt.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button 
        className="spin-btn" 
        onClick={spinWheel}
        disabled={isSpinning}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-aos="fade-up"
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </motion.button>

      <AnimatePresence>
        {showResult && selectedOption && (
          <motion.div 
            className="wheel-result-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <h3>🎉 Result Revealed! 🎉</h3>
            <div className="result-detail">
              <strong>Mission Selected:</strong> {selectedOption.icon} {selectedOption.text}
            </div>
            <div className="result-detail">
              <strong>Status:</strong> Pending
            </div>
            <div className="result-detail">
              <strong>Partner:</strong> Bestie + Me
            </div>
            <div className="result-detail">
              <strong>Completion Deadline:</strong> ASAP 😎
            </div>

            <motion.button 
              className={`accept-mission-btn ${accepted ? 'accepted' : ''}`}
              onClick={() => {
                setAccepted(true);
              }}
              whileHover={!accepted ? { scale: 1.05 } : {}}
              whileTap={!accepted ? { scale: 0.95 } : {}}
            >
              {accepted ? '✓ Mission Accepted' : 'Accept Mission'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdventureWheel;
