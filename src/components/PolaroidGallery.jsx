import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '../config/mediaConfig';
import './PolaroidGallery.css';

const PolaroidGallery = () => {
  const [selected, setSelected] = useState(null);
  const galleryPhotos = photos.slice(2, 18); // Use a subset

  return (
    <div className="section polaroid-section" id="polaroid">
      <h2 className="section-title gradient-text" data-aos="fade-up">Evidence Board 📸</h2>
      <p className="section-subtitle" data-aos="fade-up">The scrapbook of chaos</p>

      <div className="polaroid-grid">
        {galleryPhotos.map((photo, i) => (
          <motion.div key={photo.id}
            className="polaroid-card"
            style={{ '--rotation': `${(Math.random() - 0.5) * 12}deg` }}
            initial={{ opacity: 0, y: 40, rotate: (Math.random() - 0.5) * 20 }}
            whileInView={{ opacity: 1, y: 0, rotate: (Math.random() - 0.5) * 6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 10, boxShadow: '0 20px 60px rgba(168,85,247,0.4)' }}
            onClick={() => setSelected(photo)}>
            <div className="polaroid-img">
              <img src={photo.src} alt={photo.caption} loading="lazy"
                onError={(e) => { e.target.parentElement.innerHTML = '<div class="photo-fallback">📷</div>'; }} />
            </div>
            <p className="polaroid-caption">{photo.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="polaroid-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.div className="polaroid-modal"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.caption} />
              <p className="modal-caption">{selected.caption}</p>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PolaroidGallery;
