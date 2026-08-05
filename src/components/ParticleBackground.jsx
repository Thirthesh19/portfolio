import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
  const { isDarkMode } = useTheme();

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log(container);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: ["#7dcfff", "#bb9af7", "#f7768e", "#e0af68"],
            },
            links: {
              enable: false,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              }
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
