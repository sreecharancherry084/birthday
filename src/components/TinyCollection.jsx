import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TinyCollection.css';

const togetherPhotos = [
  { id: 1, src: './photos/together1.jpeg', caption: 'Proof that we actually meet sometimes.' },
  { id: 2, src: './photos/together2.jpeg', caption: 'One of the rare moments both of us looked at the camera.' },
  { id: 3, src: './photos/together3.jpeg', caption: 'National treasure. Protected by friendship laws.' },
  { id: 4, src: './photos/together4.jpeg', caption: 'Limited edition. Only 4 exist in the world.' },
];

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const TinyCollection = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="section tiny-collection-section" id="tiny-collection">
      <h2 className="section-title gradient-text" data-aos="fade-up">Our Tiny But Legendary Collection</h2>
      <p className="section-subtitle" data-aos="fade-up">Only a few photos. Unlimited memories.</p>

      <div className="tiny-stats-container" data-aos="zoom-in">
        <div className="tiny-stat">
          <div className="tiny-stat-value"><Counter end={4} /></div>
          <div className="tiny-stat-label">Photos Together</div>
        </div>
        <div className="tiny-stat">
          <div className="tiny-stat-value">∞</div>
          <div className="tiny-stat-label">Friendship Strength</div>
        </div>
        <div className="tiny-stat">
          <div className="tiny-stat-value">Priceless</div>
          <div className="tiny-stat-label">Memories</div>
        </div>
      </div>

      <div className="tiny-polaroid-grid">
        {togetherPhotos.map((photo, i) => (
          <motion.div key={photo.id} 
            className="tiny-polaroid-wrapper"
            style={{ '--rot': `${(i % 2 === 0 ? 1 : -1) * (5 + Math.random() * 10)}deg` }}
            initial={{ opacity: 0, y: 50, rotate: (Math.random() - 0.5) * 40 }}
            whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? 1 : -1) * (3 + Math.random() * 5) }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10, transition: { duration: 0.3 } }}
            onClick={() => handleFlip(photo.id)}>
            
            <motion.div className="tiny-polaroid-inner"
              animate={{ rotateY: flipped[photo.id] ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', damping: 15 }}>
              
              <div className="tiny-polaroid-front glass">
                <div className="tiny-polaroid-img">
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                </div>
                <p className="tiny-polaroid-caption">{photo.caption}</p>
                <div className="flip-hint">Tap to flip ↺</div>
              </div>

              <div className="tiny-polaroid-back glass">
                <div className="back-content">
                  <h3>Top Secret</h3>
                  <p>Memory #{photo.id}</p>
                  <div className="heart-stamp">❤️</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TinyCollection;
