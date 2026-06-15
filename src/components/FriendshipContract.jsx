import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import './FriendshipContract.css';

const contractTerms = [
  "Will not forget bestie.",
  "Will continue being awesome.",
  "Will post artwork again.",
  "Will join future adventures.",
  "Will make reels.",
  "Will continue tolerating me."
];

const FriendshipContract = () => {
  const [checkedTerms, setCheckedTerms] = useState(new Array(contractTerms.length).fill(false));
  const [signed, setSigned] = useState(false);

  const handleCheck = (index) => {
    if (signed) return;
    const newChecked = [...checkedTerms];
    newChecked[index] = !newChecked[index];
    setCheckedTerms(newChecked);
  };

  const allChecked = checkedTerms.every(Boolean);

  const handleSign = () => {
    if (allChecked && !signed) {
      setSigned(true);
    }
  };

  return (
    <div className="section contract-section" id="contract">
      {signed && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} colors={['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#fbbf24']} />}
      
      <motion.div 
        className="contract-paper"
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contract-header">
          <h2>Official Bestie Agreement</h2>
          <p>Binding under the universal laws of friendship.</p>
        </div>

        <div className="contract-body">
          <p className="contract-intro">I, the undersigned, hereby agree to the following terms and conditions:</p>
          
          <ul className="terms-list">
            {contractTerms.map((term, i) => (
              <li key={i} className="term-item" onClick={() => handleCheck(i)}>
                <div className={`checkbox ${checkedTerms[i] ? 'checked' : ''} ${signed ? 'disabled' : ''}`}>
                  {checkedTerms[i] && <motion.span initial={{scale:0}} animate={{scale:1}}>✓</motion.span>}
                </div>
                <span className={checkedTerms[i] ? 'term-text checked-text' : 'term-text'}>{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contract-footer">
          <AnimatePresence mode="wait">
            {!signed ? (
              <motion.button 
                key="sign-btn"
                className={`sign-button ${allChecked ? 'ready' : ''}`}
                disabled={!allChecked}
                whileHover={allChecked ? { scale: 1.05 } : {}}
                whileTap={allChecked ? { scale: 0.95 } : {}}
                onClick={handleSign}
                exit={{ opacity: 0, scale: 0 }}
              >
                {allChecked ? "I Agree" : "Accept all terms to sign"}
              </motion.button>
            ) : (
              <motion.div 
                key="signed-stamp"
                className="signed-stamp"
                initial={{ opacity: 0, scale: 2, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
              >
                Contract Approved
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default FriendshipContract;
