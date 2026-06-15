import React, { useMemo } from 'react';

/**
 * ParticlesBackground - Floating particles, stars, and shooting stars
 * Creates the magical night sky aesthetic across the entire site
 */
const ParticlesBackground = () => {
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 15,
      color: ['#a855f7', '#ec4899', '#3b82f6', '#fbbf24', '#f472b6'][Math.floor(Math.random() * 5)],
    })), []);

  const stars = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    })), []);

  return (
    <div className="particles-bg" aria-hidden="true">
      {stars.map(s => (
        <div key={`star-${s.id}`} style={{
          position: 'absolute',
          width: s.size,
          height: s.size,
          left: `${s.left}%`,
          top: `${s.top}%`,
          background: '#fff',
          borderRadius: '50%',
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
      {particles.map(p => (
        <div key={`p-${p.id}`} className="particle" style={{
          width: p.size,
          height: p.size,
          left: `${p.left}%`,
          background: p.color,
          boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
        }} />
      ))}
      {/* Shooting stars */}
      {[0, 1, 2].map(i => (
        <div key={`shoot-${i}`} style={{
          position: 'absolute',
          top: `${10 + i * 25}%`,
          left: `${10 + i * 20}%`,
          width: '2px',
          height: '2px',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 4px #fff, -20px -10px 0 transparent',
          animation: `shoot 3s ease-in ${i * 4 + 2}s infinite`,
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '60px', height: '1px',
            background: 'linear-gradient(to left, white, transparent)',
            transform: 'rotate(-45deg)',
            transformOrigin: 'right',
          }} />
        </div>
      ))}
    </div>
  );
};

export default ParticlesBackground;
