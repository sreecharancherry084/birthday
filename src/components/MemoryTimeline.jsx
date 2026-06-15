import React from 'react';
import { motion } from 'framer-motion';
import { timelineMemories } from '../config/mediaConfig';
import './MemoryTimeline.css';

const MemoryTimeline = () => (
  <div className="section timeline-section" id="timeline">
    <h2 className="section-title gradient-text" data-aos="fade-up">Memory Timeline</h2>
    <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
      A journey through our greatest moments ✨
    </p>
    <div className="timeline">
      <div className="timeline-line" />
      {timelineMemories.map((mem, i) => (
        <motion.div key={i}
          className={`timeline-card ${i % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="timeline-dot">
            <div className="timeline-dot-inner" />
          </div>
          <div className="timeline-content glass">
            <span className="timeline-year">{mem.year}</span>
            <div className="timeline-img-wrapper">
              <img src={mem.photo.src} alt={mem.title} loading="lazy"
                onError={(e) => { e.target.parentElement.innerHTML = '<div class="photo-fallback">📸</div>'; }} />
            </div>
            <h3 className="timeline-card-title">{mem.title}</h3>
            <p className="timeline-card-caption">{mem.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MemoryTimeline;
