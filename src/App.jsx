import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

/* Lazy-load heavy sections for performance */
const Intro = lazy(() => import('./components/Intro'));
const SecurityCheck = lazy(() => import('./components/SecurityCheck'));
const BirthdayReveal = lazy(() => import('./components/BirthdayReveal'));
const MemoryTimeline = lazy(() => import('./components/MemoryTimeline'));
const PolaroidGallery = lazy(() => import('./components/PolaroidGallery'));
const Achievements = lazy(() => import('./components/Achievements'));
const FriendshipAnalytics = lazy(() => import('./components/FriendshipAnalytics'));
const SecretLetters = lazy(() => import('./components/SecretLetters'));
const AdventureWheel = lazy(() => import('./components/AdventureWheel'));
const WallOfMemories = lazy(() => import('./components/WallOfMemories'));
const AwesomeReasons = lazy(() => import('./components/AwesomeReasons'));
const EmotionalMoment = lazy(() => import('./components/EmotionalMoment'));
const GrandFinale = lazy(() => import('./components/GrandFinale'));
const TinyCollection = lazy(() => import('./components/TinyCollection'));
const MissingArtist = lazy(() => import('./components/MissingArtist'));
const HallOfTalents = lazy(() => import('./components/HallOfTalents'));
const FutureAdventures = lazy(() => import('./components/FutureAdventures'));

const FriendshipContract = lazy(() => import('./components/FriendshipContract'));
const MiniGames = lazy(() => import('./components/MiniGames'));

function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, [started]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  if (!started) {
    return (
      <>
        <ParticlesBackground />
        <Suspense fallback={null}>
          <Intro onStart={() => setStarted(true)} />
        </Suspense>
      </>
    );
  }

  return (
    <div className="app">
      <audio ref={audioRef} loop>
        <source src="/birthday/tune/moodmode-happy-birthday-song-455067 (1).mp3" type="audio/mpeg" />
      </audio>
      <ParticlesBackground />
      <Suspense fallback={<div className="section-loader">✨</div>}>
        <SecurityCheck />
        <BirthdayReveal />
        <MemoryTimeline />
        <PolaroidGallery />
        <WallOfMemories />
        <TinyCollection />
        <MissingArtist />
        <HallOfTalents />
        <Achievements />
        <FriendshipAnalytics />
        <FutureAdventures />

        <FriendshipContract />
        <MiniGames />
        <AdventureWheel />
        <AwesomeReasons />
        <SecretLetters />
        <EmotionalMoment />
        <GrandFinale />
      </Suspense>
    </div>
  );
}

export default App;
