import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';
import useScrollReveal from './hooks/useScrollReveal';

// Lazy Loaded Pages with React.lazy & Suspense
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const About = lazy(() => import('./pages/About/About'));
const Agreement = lazy(() => import('./pages/Agreement/Agreement'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Page loader fallback during suspense lazy component loading
function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
      aria-label="Loading page"
    >
      <div className="spinner-border text-primary" role="status" style={{ width: '2.5rem', height: '2.5rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, lenisRef]);

  return null;
}

export default function App() {
  const lenisRef = useRef(null);
  useScrollReveal();

  useEffect(() => {
    let rafId;

    const initLenis = () => {
      if (window.Lenis && !lenisRef.current) {
        const lenis = new window.Lenis({
          duration: 0.6,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.0,
        });

        lenisRef.current = lenis;

        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      }
    };

    initLenis();

    // Re-check if script loaded async
    const timer = setTimeout(initLenis, 300);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <ScrollToTop lenisRef={lenisRef} />
      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
