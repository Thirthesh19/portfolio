import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAudio } from '../context/AudioContext';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

const DecryptText = ({ text, className = "", as: Component = "span", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const hasTriggered = useRef(false);
  const { playHover } = useAudio();

  useEffect(() => {
    if (inView && !hasTriggered.current) {
      hasTriggered.current = true;
      let iteration = 0;
      let interval = null;

      // Small delay before starting the effect
      setTimeout(() => {
        // play a faint sound? playHover() might be too noisy if multiple trigger at once, skip sound for now or use playHover
        
        interval = setInterval(() => {
          setDisplayedText(
            text
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return text[index];
                }
                if (letter === " ") return " ";
                return LETTERS[Math.floor(Math.random() * LETTERS.length)];
              })
              .join("")
          );

          if (iteration >= text.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3; // Controls speed of decryption
        }, 30);
      }, delay);

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [inView, text, delay]);

  // Before inView, show a scrambled version or nothing?
  // Let's show nothing until inView
  if (!inView && !hasTriggered.current) {
    return <Component ref={ref} className={className} style={{ visibility: 'hidden' }}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={className} data-text={text}>
      {displayedText}
    </Component>
  );
};

export default DecryptText;
