import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { friendshipStats } from '../config/mediaConfig';
import './FriendshipAnalytics.css';

const Counter = ({ end, suffix, displayText, duration = 2000 }) => {
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
    if (!started || displayText) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, displayText, duration]);

  return (
    <span ref={ref} className="counter-value">
      {displayText || `${count.toLocaleString()}${suffix}`}
    </span>
  );
};

const FriendshipAnalytics = () => (
  <div className="section analytics-section" id="analytics">
    <h2 className="section-title gradient-text" data-aos="fade-up">📊 Friendship Analytics</h2>
    <p className="section-subtitle" data-aos="fade-up">The numbers don't lie</p>
    <div className="stats-grid">
      {friendshipStats.map((stat, i) => (
        <motion.div key={i} className="stat-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.4)' }}>
          <Counter end={stat.value} suffix={stat.suffix} displayText={stat.displayText} />
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default FriendshipAnalytics;
