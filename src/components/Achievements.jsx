import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../config/mediaConfig';
import './Achievements.css';

const rarityColors = {
  LEGENDARY: '#fbbf24',
  MYTHIC: '#a855f7',
  EPIC: '#ec4899',
  RARE: '#3b82f6',
};

const Achievements = () => (
  <div className="section achievements-section" id="achievements">
    <h2 className="section-title gradient-text" data-aos="fade-up">🎮 Bestie Achievement Unlocked</h2>
    <p className="section-subtitle" data-aos="fade-up">Lifetime accomplishments</p>
    <div className="achievements-grid">
      {achievements.map((a, i) => (
        <motion.div key={i} className="achievement-card glass"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.05, y: -5 }}>
          <div className="achievement-icon-wrap">
            <span className="achievement-icon">{a.icon}</span>
            <div className="achievement-unlock">
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }} className="unlock-ring" />
            </div>
          </div>
          <h3 className="achievement-title">{a.title}</h3>
          <p className="achievement-desc">{a.desc}</p>
          <span className="achievement-rarity" style={{ color: rarityColors[a.rarity] }}>
            ★ {a.rarity}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Achievements;
