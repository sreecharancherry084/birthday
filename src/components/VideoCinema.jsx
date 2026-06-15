import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos } from '../config/mediaConfig';
import './VideoCinema.css';

const VideoCinema = () => {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="section cinema-section" id="cinema">
      <h2 className="section-title gradient-text" data-aos="fade-up">🎬 Memory Cinema</h2>
      <p className="section-subtitle" data-aos="fade-up">Press play on the memories</p>
      <div className="cinema-grid">
        {videos.map((vid, i) => (
          <motion.div key={vid.id} className="cinema-card glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}>
            <div className="cinema-preview" onClick={() => setPlaying(vid)}>
              <video src={vid.src} muted playsInline preload="metadata"
                onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="play-overlay">
                <div className="play-btn-icon">▶</div>
              </div>
              <div className="cinema-glow" />
            </div>
            <div className="cinema-info">
              <h3>{vid.title}</h3>
              <p>{vid.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div className="cinema-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setPlaying(null)}>
            <motion.div className="cinema-modal"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              <video src={playing.src} controls autoPlay playsInline
                style={{ width: '100%', borderRadius: '12px', maxHeight: '80vh' }} />
              <button className="modal-close" onClick={() => setPlaying(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoCinema;
