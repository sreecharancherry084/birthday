import React from 'react';
import { motion } from 'framer-motion';
import './WaitingFor.css';

const waitingItems = [
  { icon: '🎨', text: 'Waiting for your next artwork.' },
  { icon: '🖌️', text: 'Waiting for your next painting.' },
  { icon: '🎤', text: 'Waiting to hear you sing again.' },
  { icon: '🎥', text: 'Waiting to make reels together.' },
  { icon: '🏍️', text: 'Waiting for that dream bike ride.' },
  { icon: '⛰️', text: 'Waiting for that trek.' },
  { icon: '✨', text: 'Waiting to create many more memories.' },
];

const WaitingFor = () => {
  return (
    <div className="section waiting-for-section" id="waiting-for">
      <h2 className="section-title gradient-text" data-aos="fade-up">Things I Am Still Waiting For</h2>
      <p className="section-subtitle" data-aos="fade-up">Patience is a virtue, but...</p>

      <div className="waiting-cards-container">
        {waitingItems.map((item, i) => (
          <motion.div key={i} 
            className="waiting-card glass"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)' }}
          >
            <div className="waiting-icon-glow"></div>
            <span className="waiting-icon">{item.icon}</span>
            <p className="waiting-text">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WaitingFor;
