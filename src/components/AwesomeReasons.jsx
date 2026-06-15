import React from 'react';
import { motion } from 'framer-motion';
import { awesomeReasons } from '../config/mediaConfig';
import './AwesomeReasons.css';

const emojis = ['💖', '🌟', '🔥', '💪', '✨', '🦋', '🌈', '👑'];

const AwesomeReasons = () => (
  <div className="section awesome-section" id="awesome">
    <h2 className="section-title gradient-text" data-aos="fade-up">
      ✨ Reasons You Are Awesome
    </h2>
    <p className="section-subtitle" data-aos="fade-up">Every single one of these is true</p>
    <div className="awesome-grid">
      {awesomeReasons.map((reason, i) => (
        <motion.div key={i} className="awesome-card glass"
          initial={{ opacity: 0, y: 50, rotateY: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -8 }}>
          <span className="awesome-emoji">{emojis[i]}</span>
          <h3 className="awesome-title">{reason.title}</h3>
          <p className="awesome-desc">{reason.desc}</p>
          <div className="awesome-number">#{i + 1}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default AwesomeReasons;
