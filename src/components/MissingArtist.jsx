import React from 'react';
import { motion } from 'framer-motion';
import './MissingArtist.css';

const MissingArtist = () => {
  return (
    <div className="section missing-artist-section" id="missing-artist">
      <motion.div 
        className="investigation-board glass"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="warning-header">
          <motion.span 
            className="warning-icon"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >⚠</motion.span>
          <h2 className="missing-title">Missing Artist Report</h2>
          <motion.span 
            className="warning-icon"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
          >⚠</motion.span>
        </div>

        <div className="board-content">
          <svg className="red-strings" preserveAspectRatio="none">
            <motion.path 
              d="M100,50 Q200,100 300,50 T500,150 T700,50" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path 
              d="M200,200 Q300,50 400,250 T600,100" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>

          <motion.div className="sticky-paper profile-card"
            initial={{ rotate: -5, x: -50, opacity: 0 }}
            whileInView={{ rotate: -5, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="pin">📍</div>
            <h3>Subject Profile</h3>
            <p><strong>Name:</strong> Kutti</p>
            <p><strong>Occupation:</strong> Multi-Talented Human</p>
            <p><strong>Status:</strong> Talent Missing From Public View</p>
            <p><strong>Last Uploaded:</strong> Too Long Ago</p>
          </motion.div>

          <motion.div className="sticky-paper abilities-card"
            initial={{ rotate: 5, x: 50, opacity: 0 }}
            whileInView={{ rotate: 5, x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="pin">📌</div>
            <h3>Known Abilities</h3>
            <ul className="abilities-list">
              <li><motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8}}>✓</motion.span> Artist</li>
              <li><motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.1}}>✓</motion.span> Painter</li>
              <li><motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.4}}>✓</motion.span> Singer</li>
              <li><motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.7}}>✓</motion.span> Reel Creator</li>
            </ul>
          </motion.div>

          <motion.div className="sketch-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="tape"></div>
            <div className="sketch-area">
              <svg viewBox="0 0 100 100" className="animated-sketch">
                <motion.path
                  d="M20,50 Q40,20 50,50 T80,50"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M50,50 Q60,80 80,50"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 3 }}
                />
              </svg>
              <div className="brush-icon">🖌️</div>
            </div>
            <p className="sketch-caption">We miss your drawings...</p>
          </motion.div>
        </div>

        <div className="emotional-messages">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>"We miss your paintings."</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>"We miss seeing your creativity."</motion.p>
          <motion.p className="highlight-msg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            "The world deserves to see more of your art."
          </motion.p>
        </div>

      </motion.div>
    </div>
  );
};

export default MissingArtist;
