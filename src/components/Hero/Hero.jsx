import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import clinicImg from '../../assets/images/clinic.jpg';
import fertilizersImg from '../../assets/images/fertilizers.jpg';
import interiorImg from '../../assets/images/interior.jpg';
import portfolioImg from '../../assets/images/portfolio.jpg';
import restaurantImg from '../../assets/images/restaurant.jpg';
import saloonImg from '../../assets/images/saloon.jpg';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: 'Clinic & Healthcare Websites',
    category: 'Healthcare',
    img: clinicImg,
  },
  {
    id: 2,
    title: 'Agri & Fertilizers Portal',
    category: 'E-Commerce',
    img: fertilizersImg,
  },
  {
    id: 3,
    title: 'Interior Design Studio',
    category: 'Residential',
    img: interiorImg,
  },
  {
    id: 4,
    title: 'Developer Portfolio',
    category: 'Web App',
    img: portfolioImg,
  },
  {
    id: 5,
    title: 'Restaurant Websites',
    category: 'Restaurant Websites',
    img: restaurantImg,
  },
  {
    id: 6,
    title: 'Salon & Spa Websites',
    category: 'Lifestyle & Wellness',
    img: saloonImg,
  },
];

// Create 18 items for smooth, continuous, seamless off-screen looping
const DISPLAY_ITEMS = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

export default function Hero() {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const offsetRef = useRef(0);
  const dimsRef = useRef({
    containerWidth: 1200,
    cardWidth: 300,
    spacingFactor: 0.78,
    totalUnitWidth: 234,
    totalTrackWidth: 4212,
    speed: 0.045,
    isMobile: false,
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Helper to calculate & cache layout dimensions based on rendered card size
    const updateDimensions = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('.hero-7-card');
      const containerWidth = container.offsetWidth || window.innerWidth || 1200;

      let cardWidth = 300;
      if (cards.length > 0) {
        const rect = cards[0].getBoundingClientRect();
        if (rect.width > 0) {
          cardWidth = rect.width;
        }
      }

      // Pixel-based spacing logic based on actual card width
      let spacingFactor = 0.78;
      let speed = 0.045;
      let isMobile = false;

      if (containerWidth <= 480) {
        spacingFactor = 0.68;
        speed = 0.032;
        isMobile = true;
      } else if (containerWidth <= 767) {
        spacingFactor = 0.70;
        speed = 0.035;
        isMobile = true;
      } else if (containerWidth <= 991) {
        spacingFactor = 0.72;
        speed = 0.038;
      }

      const totalUnitWidth = cardWidth * spacingFactor;
      const totalTrackWidth = totalUnitWidth * DISPLAY_ITEMS.length;

      dimsRef.current = {
        containerWidth,
        cardWidth,
        spacingFactor,
        totalUnitWidth,
        totalTrackWidth,
        speed,
        isMobile,
      };
    };

    // Initial measurement
    updateDimensions();

    // ResizeObserver for efficient dimension updates on viewport changes
    let resizeObserver;
    if (window.ResizeObserver && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    const handleWindowResize = () => updateDimensions();
    window.addEventListener('resize', handleWindowResize);

    let lastTime = performance.now();

    // Optimized animation loop (transforms & clipPath only)
    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      const dims = dimsRef.current;
      offsetRef.current += delta * dims.speed;

      const container = containerRef.current;
      if (container) {
        const cards = container.querySelectorAll('.hero-7-card');
        const { containerWidth, cardWidth, totalUnitWidth, totalTrackWidth, isMobile } = dims;
        const centerX = containerWidth / 2 - cardWidth / 2;

        cards.forEach((card, index) => {
          // Calculate center-relative position formula
          const basePos = index * totalUnitWidth + offsetRef.current;
          let offsetFromCenter = ((basePos % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;
          if (offsetFromCenter > totalTrackWidth / 2) {
            offsetFromCenter -= totalTrackWidth;
          }

          const rawX = centerX + offsetFromCenter;
          const distFromCenter = offsetFromCenter;

          // Responsive normalized distance, 3D values & real vertical arc
          const spreadFactor = isMobile
            ? Math.max(containerWidth / 1.15, cardWidth * 1.8)
            : containerWidth / 1.8;

          const normalized = Math.max(-1, Math.min(1, distFromCenter / spreadFactor));

          // Real Vertical Arc Y calculation (center card Y=0, edge cards move downward)
          const arcY = Math.pow(Math.abs(normalized), 1.7) * (isMobile ? 24 : 30);

          // Mobile-specific 3D values (rotateY: +-24deg, translateZ: max -70px, scale: 0.86-1.0)
          const maxRotate = isMobile ? 24 : 28;
          const maxZ = isMobile ? 70 : 120;
          const minScale = isMobile ? 0.86 : 0.80;

          const rotateY = -normalized * maxRotate;
          const translateZ = -Math.pow(Math.abs(normalized), 1.7) * maxZ;
          const scale = Math.max(minScale, 1 - Math.abs(normalized) * (1 - minScale));

          // Apply 3D transform with X, vertical arcY, Z depth, Y rotation and scale
          card.style.transform = `translate3d(${rawX.toFixed(1)}px, ${arcY.toFixed(1)}px, ${translateZ.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(2)})`;

          // Z-index layering so center card sits on top
          const zIndex = Math.round(100 - Math.abs(normalized) * 50);
          card.style.zIndex = zIndex;

          // Edge fading so off-screen wrapping is 100% smooth
          const edgeFade = Math.max(0, 1 - Math.pow(Math.abs(normalized) * 0.85, 2));
          card.style.opacity = edgeFade.toFixed(2);

          // Precision Laser Beam Reveal Math
          const laserX = containerWidth / 2;
          const cutDist = laserX - rawX;
          let revealPercent = (cutDist / cardWidth) * 100;
          revealPercent = Math.max(0, Math.min(100, revealPercent));

          const colorLayer = card.querySelector('.layer-color');
          if (colorLayer) {
            colorLayer.style.clipPath = `inset(0 0 0 ${revealPercent.toFixed(1)}%)`;
          }
        });
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className="hero-section hero-7-official" aria-label="Hero">
      {/* Background Particles & Glow */}
      <div className="hero-glow hero-glow-primary" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-secondary" aria-hidden="true"></div>

      <div className="container-fluid px-3 px-md-5">
        {/* Top Centered Header Content */}
        <div className="row justify-content-center text-center hero-7-header">
          <div className="col-lg-9 col-xl-8">
            <h1 className="hero-7-title">
              Turn your online presence into a reason{' '}
              <span className="hero-title-highlight">customers choose you</span>
            </h1>
            <div className="hero-7-cta-group">
              <Link to="/contact" className="btn btn-hero-7-primary">
                Book a Discovery Call
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/services" className="btn btn-hero-7-secondary">
                View My Work
              </Link>
            </div>

            {/* Feature Highlights Row */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <i className="bi bi-check-circle-fill icon-check" aria-hidden="true"></i>
                <span>Responsive Design</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-phone-fill icon-mobile" aria-hidden="true"></i>
                <span>Mobile First Approach</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-whatsapp icon-whatsapp" aria-hidden="true"></i>
                <span>WhatsApp Enquiries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero 7 Official 3D Arc Carousel Track */}
        <div className="hero-7-carousel-wrapper" aria-hidden="true">
          {/* Vertical Central Glowing Laser Line */}
          <div className="hero-7-laser">
            <div className="laser-beam-core"></div>
            <div className="laser-beam-flare"></div>
          </div>

          {/* 3D Curved Track */}
          <div className="hero-7-track" ref={containerRef}>
            {DISPLAY_ITEMS.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="hero-7-card">
                <div className="hero-7-card-inner">
                  {/* Base Layer: Grayscale / B&W */}
                  <div className="card-layer layer-grayscale">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="hero-7-card-img"
                      loading="lazy"
                    />
                    <div className="hero-7-card-content">
                      <span className="hero-7-card-cat">{item.category}</span>
                      <h3 className="hero-7-card-title">{item.title}</h3>
                    </div>
                  </div>

                  {/* Overlay Layer: Full Color (dynamically clipped by laser position) */}
                  <div className="card-layer layer-color">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="hero-7-card-img"
                      loading="lazy"
                    />
                    <div className="hero-7-card-content">
                      <span className="hero-7-card-cat">{item.category}</span>
                      <h3 className="hero-7-card-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
