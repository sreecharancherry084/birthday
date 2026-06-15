import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import './FutureAdventures.css';

const initialMissions = [
  { id: 1, icon: '🏍️', title: 'Long Ride', status: 'Pending', partner: 'Me', vehicle: 'Dream Bike', priority: 'Extremely High', accepted: false },
  { id: 2, icon: '💃', title: 'Dance Together', status: 'Mandatory', partner: 'Us', vehicle: 'None', priority: 'High', accepted: false },
  { id: 3, icon: '🎥', title: 'Make Reels Together', status: 'Waiting', partner: 'Us', vehicle: 'Camera', priority: 'Medium', accepted: false },
  { id: 4, icon: '⛰️', title: 'Trek Together', status: 'Coming Soon', partner: 'Us', vehicle: 'Feet', priority: 'High', accepted: false },
  { id: 5, icon: '✈️', title: 'Trip Together', status: 'Future Core Memory', partner: 'Us', vehicle: 'Airplane', priority: 'Top Secret', accepted: false },
  { id: 6, icon: '☕', title: 'Random Unplanned Adventures', status: 'Always Active', partner: 'Us', vehicle: 'Anything', priority: 'Maximum', accepted: false },
];

const FutureAdventures = () => {
  const [missions, setMissions] = useState(initialMissions);
  const [showConfetti, setShowConfetti] = useState(false);

  const acceptMission = (id) => {
    setMissions(missions.map(m => m.id === id ? { ...m, accepted: true } : m));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const completedCount = missions.filter(m => m.accepted).length;
  const progress = (completedCount / missions.length) * 100;

  return (
    <div className="section future-adventures-section" id="future-adventures">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={200} />}
      
      <h2 className="section-title gradient-text" data-aos="fade-up">Future Adventures Pending</h2>
      <p className="section-subtitle" data-aos="fade-up">Mission Control Dashboard</p>

      <div className="mission-progress-container" data-aos="fade-up">
        <div className="progress-text">
          <span>Overall Mission Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar-bg">
          <motion.div 
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className="missions-grid">
        {missions.map((mission, i) => (
          <motion.div key={mission.id} 
            className={`mission-card glass ${mission.accepted ? 'accepted' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mission-header">
              <span className="mission-icon">{mission.icon}</span>
              <h3 className="mission-title">{mission.title}</h3>
            </div>
            
            <div className="mission-details">
              <p><strong>Status:</strong> <span className="highlight">{mission.status}</span></p>
              <p><strong>Partner:</strong> {mission.partner}</p>
              <p><strong>Vehicle:</strong> {mission.vehicle}</p>
              <p><strong>Priority:</strong> <span className="priority">{mission.priority}</span></p>
            </div>

            <div className="mission-action">
              <AnimatePresence mode="wait">
                {!mission.accepted ? (
                  <motion.button 
                    key="accept"
                    className="accept-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => acceptMission(mission.id)}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    Accept Mission
                  </motion.button>
                ) : (
                  <motion.div 
                    key="accepted"
                    className="accepted-status"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <span className="check-icon">✓</span>
                    <p>Mission Accepted.</p>
                    <small>No Backouts Allowed.</small>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FutureAdventures;
