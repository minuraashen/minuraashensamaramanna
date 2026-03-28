// Animate on Scroll (AOS) initialization for scroll-based reveal animations
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOS() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);
}
