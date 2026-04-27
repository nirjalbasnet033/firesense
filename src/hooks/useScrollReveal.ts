'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealClasses = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
    ];

    const elements = document.querySelectorAll<HTMLElement>(revealClasses?.join(', '));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);
}
