import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal — Non-blocking, progressive enhancement scroll reveal hook
 * Elements are visible (opacity: 1) by default in CSS.
 * Only off-screen elements below the viewport are temporarily given 'reveal-pending'
 * so they animate in smoothly as the user scrolls.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selector = '.reveal, .reveal-up, .reveal-scale, .stagger-item, .stagger-group';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = Array.from(document.querySelectorAll(selector));
    const vh = window.innerHeight || 800;

    // Only apply reveal-pending to elements strictly below the initial viewport fold
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

    // Safety fallback: reveal everything after 200ms so content is NEVER hidden
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
