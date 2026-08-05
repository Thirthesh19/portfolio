import React, { createContext, useContext, useState, useEffect } from 'react';
import useSound from 'use-sound';

// Placeholder sounds (Replace with actual high-quality Tokyo Night inspired sounds)
const clickSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
const hoverSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
const typingSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3'; // Fast click for typing
const ambientSoundUrl = '/interstellar.mp3'; // Waiting for the user to upload interstellar.mp3 to the public folder

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false); // Default unmuted, but browser policy may require interaction

  const [playClick] = useSound(clickSoundUrl, { volume: 0.5, soundEnabled: !isMuted });
  const [playHover] = useSound(hoverSoundUrl, { volume: 0.3, soundEnabled: !isMuted });
  const [playTyping] = useSound(typingSoundUrl, { volume: 0.4, soundEnabled: !isMuted });
  const [playAmbient, { stop: stopAmbient, pause: pauseAmbient }] = useSound(ambientSoundUrl, {
    volume: 0.2,
    loop: true,
    soundEnabled: true, // We handle logic manually
    html5: true, // Streams the audio (required for large 30MB+ files)
  });

  useEffect(() => {
    if (!isMuted) {
      playAmbient();
    } else {
      pauseAmbient();
    }
    return () => stopAmbient();
  }, [isMuted, playAmbient, pauseAmbient, stopAmbient]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playClick, playHover, playTyping }}>
      {children}
    </AudioContext.Provider>
  );
};
