import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MiniGames.css';

const MiniGames = () => {
  // Game 1
  const [yesPos, setYesPos] = useState({ x: 0, y: 0 });
  const [game1Solved, setGame1Solved] = useState(false);

  const handleHoverYes = () => {
    setYesPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200
    });
  };

  // Game 2
  const [game2State, setGame2State] = useState(0); // 0: initial, 1: error, 2: solved

  const handleYouClick = () => {
    setGame2State(1);
    setTimeout(() => {
      setGame2State(2);
    }, 2000);
  };

  // Game 3
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="section minigames-section" id="minigames">
      <h2 className="section-title gradient-text" data-aos="fade-up">Funny Mini Games</h2>
      <p className="section-subtitle" data-aos="fade-up">Let's test our friendship</p>

      <div className="games-grid">
        
        {/* Game 1 */}
        <motion.div className="game-card glass" whileHover={{ y: -5 }}>
          <h3>Do You Forget Me?</h3>
          {!game1Solved ? (
            <div className="game-actions relative-actions">
              <motion.button 
                className="game-btn yes-btn"
                animate={{ x: yesPos.x, y: yesPos.y }}
                onMouseEnter={handleHoverYes}
                onClick={handleHoverYes}
              >
                YES
              </motion.button>
              <button className="game-btn no-btn" onClick={() => setGame1Solved(true)}>
                NO
              </button>
            </div>
          ) : (
            <div className="game-success">
              <span className="success-icon">✅</span>
              <p>Correct answer detected.</p>
              <small>Friendship verified.</small>
            </div>
          )}
        </motion.div>

        {/* Game 2 */}
        <motion.div className="game-card glass" whileHover={{ y: -5 }}>
          <h3>Who Is The Better Friend?</h3>
          <AnimatePresence mode="wait">
            {game2State === 0 && (
              <motion.div key="options" className="game-actions" exit={{ opacity: 0 }}>
                <button className="game-btn" onClick={handleYouClick}>You</button>
                <button className="game-btn" onClick={() => setGame2State(2)}>Me</button>
              </motion.div>
            )}
            {game2State === 1 && (
              <motion.div key="error" className="game-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="error-text">System Error.</p>
                <p className="recalc-text">Recalculating...</p>
              </motion.div>
            )}
            {game2State === 2 && (
              <motion.div key="solved" className="game-success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                <span className="success-icon">😎</span>
                <p>Still Me.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Game 3 */}
        <motion.div className="game-card glass" whileHover={{ y: -5 }}>
          <h3>How Much Do You Miss Me?</h3>
          <div className="slider-container">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValue} 
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="miss-slider"
            />
            <div className="slider-value">{sliderValue}%</div>
          </div>
          {sliderValue < 100 ? (
            <p className="slider-msg error-msg">Insufficient. Please increase.</p>
          ) : (
            <p className="slider-msg success-msg">Correct.</p>
          )}
        </motion.div>


      </div>
    </div>
  );
};

export default MiniGames;
