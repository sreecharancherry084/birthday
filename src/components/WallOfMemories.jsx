import React from 'react';
import { motion } from 'framer-motion';
import { photos } from '../config/mediaConfig';
import './WallOfMemories.css';


const pins = ['📌', '📍'];

const WallOfMemories = () => {
  const wallPhotos = photos.slice(0, 14);

  return (
    <div className="section wall-section" id="wall">
      <h2 className="section-title gradient-text" data-aos="fade-up">📸 Portrait Gallery</h2>
      <p className="section-subtitle" data-aos="fade-up">Aesthetic clicks</p>
      <div className="memory-wall">
        {wallPhotos.map((photo, i) => (
          <motion.div key={photo.id} className="wall-item"
            style={{ '--rot': `${(Math.random() - 0.5) * 16}deg` }}
            initial={{ opacity: 0, scale: 0.5, rotate: (Math.random() - 0.5) * 30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: (Math.random() - 0.5) * 8 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}>
            <span className="wall-pin">{pins[i % 2]}</span>
            <div className="wall-photo">
              <img src={photo.src} alt={photo.caption} loading="lazy"
                onError={(e) => { e.target.parentElement.innerHTML = '<div class="photo-fallback">📷</div>'; }} />
            </div>

          </motion.div>
        ))}
        {/* Decorative strings */}
        <svg className="wall-strings" viewBox="0 0 1000 50" preserveAspectRatio="none">
          <path d="M0,25 Q250,5 500,25 Q750,45 1000,25" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default WallOfMemories;
