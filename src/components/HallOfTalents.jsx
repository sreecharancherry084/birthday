import React from 'react';
import { motion } from 'framer-motion';
import './HallOfTalents.css';

const talents = [
  { icon: '🎨', title: 'Artist', desc: 'Turns blank paper into magic.', color: '#a855f7' },
  { icon: '🖌️', title: 'Painter', desc: 'Creates colors that tell stories.', color: '#ec4899' },
  { icon: '🎤', title: 'Singer', desc: 'Can make ordinary moments feel special.', color: '#3b82f6' },
  { icon: '🎥', title: 'Reel Creator', desc: 'CEO of retakes and perfectionism.', color: '#fbbf24' },
  { icon: '🌟', title: 'Multi-Talented Human', desc: 'Proof that talent distribution is unfair.', color: '#10b981' },
];

const HallOfTalents = () => {
  return (
    <div className="section hall-of-talents-section" id="hall-of-talents">
      <h2 className="section-title gradient-text" data-aos="fade-up">Hall Of Talents</h2>
      <p className="section-subtitle" data-aos="fade-up">A premium showcase of unfair talent</p>

      <div className="talents-grid">
        {talents.map((talent, i) => (
          <motion.div key={i} 
            className="talent-card-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="talent-card">
              <div className="talent-card-front" style={{ borderTop: `4px solid ${talent.color}` }}>
                <div className="talent-icon-glow" style={{ background: talent.color }}></div>
                <div className="talent-icon">{talent.icon}</div>
                <h3 className="talent-title">{talent.title}</h3>
                <p className="talent-desc">{talent.desc}</p>
                <div className="sparkles">✨</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HallOfTalents;
