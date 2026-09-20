import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selector = '.reveal, .reveal-up, .reveal-scale, .stagger-item, .stagger-group';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = Array.from(document.querySelectorAll(selector));
    const vh = window.innerHeight || 800;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > vh * 0.95) {
        el.classList.add('reveal-pending');
      } else {
        el.classList.add('is-visible');
      }
    });

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('is-visible');
          if (entry.target.classList.contains('stagger-group')) {
            entry.target.querySelectorAll('.stagger-item').forEach((item) => {
              item.classList.remove('reveal-pending');
              item.classList.add('is-visible');
            });
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '100px 0px 100px 0px',
      threshold: 0,
    });

    elements.forEach((el) => {
      if (el.classList.contains('reveal-pending')) {
        observer.observe(el);
      }
    });

    const timer = setTimeout(() => {
      elements.forEach((el) => {
        el.classList.remove('reveal-pending');
        el.classList.add('is-visible');
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);
}
