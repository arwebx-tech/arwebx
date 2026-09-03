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

// Create a larger array of items for seamless off-screen looping
const DISPLAY_ITEMS = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

export default function Hero() {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      const container = containerRef.current;
      if (container) {
        const cards = container.querySelectorAll('.hero-7-card');
        const containerWidth = container.offsetWidth || 1200;
        const isMobile = containerWidth < 768;

        // Dynamic animation speed: smartphone (0.032 - 0.035) vs desktop/tablet (0.045)
        const speed = isMobile
          ? (containerWidth < 431 ? 0.032 : 0.035)
          : 0.045;

        offsetRef.current += delta * speed;

        if (isMobile) {
          // ==========================================
          // SMARTPHONE-ONLY 3D CURVE IMPLEMENTATION
          // ==========================================
          // Use offsetWidth to get true unscaled layout width (prevents scale jitter)
          const actualCardWidth = cards[0]?.offsetWidth || 160;

          // Responsive smartphone spacing factor (0.68 to 0.72 * actual card width)
          let spacingFactor = 0.72;
          if (containerWidth < 360) {
            spacingFactor = 0.68;
          } else if (containerWidth < 390) {
            spacingFactor = 0.70;
          } else if (containerWidth < 430) {
            spacingFactor = 0.71;
          } else {
            spacingFactor = 0.72;
          }

          const totalUnitWidth = actualCardWidth * spacingFactor;
          const totalTrackWidth = totalUnitWidth * DISPLAY_ITEMS.length;
          const centerX = containerWidth / 2 - actualCardWidth / 2;
          const spreadFactor = containerWidth * 0.45;

          cards.forEach((card, index) => {
            let rawX = (index * totalUnitWidth + offsetRef.current) % totalTrackWidth;

            if (rawX > containerWidth + totalUnitWidth * 2) {
              rawX -= totalTrackWidth;
            }

            const offsetFromCenter = rawX - centerX;
            const rawNormalized = offsetFromCenter / spreadFactor;
            const normalized = Math.max(-1, Math.min(1, rawNormalized));

            // Plain horizontal alignment (no vertical arc offset)
            const arcY = 0;

            // 3D Depth calculations for mobile curve
            const rotateY = -Math.max(-24, Math.min(24, normalized * 24));
            const translateZ = -Math.pow(Math.min(1.2, Math.abs(normalized)), 1.7) * 70;
            const scale = Math.max(0.88, 1 - Math.min(1, Math.abs(normalized)) * 0.12);

            // Stacking order: center card highest z-index, side cards lower
            const zIndex = Math.round(100 - Math.abs(normalized) * 50);
            card.style.zIndex = zIndex;

            // Apply 3D transform plain horizontally
            card.style.transform = `translate3d(${rawX.toFixed(1)}px, 0px, ${translateZ.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(2)})`;

            // Edge fading so off-screen wrapping is 100% invisible
            const edgeFade = Math.max(0, 1 - Math.pow(Math.abs(rawNormalized) * 0.85, 2));
            card.style.opacity = edgeFade.toFixed(2);

            // Laser reveal math
            const laserX = containerWidth / 2;
            const cardLeft = rawX;
            const cutDist = laserX - cardLeft;
            let revealPercent = (cutDist / actualCardWidth) * 100;
            revealPercent = Math.max(0, Math.min(100, revealPercent));

            const colorLayer = card.querySelector('.layer-color');
            if (colorLayer) {
              colorLayer.style.clipPath = `inset(0 0 0 ${revealPercent}%)`;
            }
          });
        } else {
          // ==========================================
          // DESKTOP & TABLET IMPLEMENTATION (UNCHANGED)
          // ==========================================
          const cardWidth = 320;
          const gap = 24;
          const totalUnitWidth = cardWidth + gap;
          const totalTrackWidth = totalUnitWidth * DISPLAY_ITEMS.length;

          cards.forEach((card, index) => {
            let rawX = (index * totalUnitWidth + offsetRef.current) % totalTrackWidth;

            if (rawX > containerWidth + totalUnitWidth * 2) {
              rawX -= totalTrackWidth;
            }

            const centerX = containerWidth / 2 - cardWidth / 2;
            const distFromCenter = rawX - centerX;
            const normalizedDist = distFromCenter / (containerWidth / 1.8);

            const rotateY = -normalizedDist * 28;
            const translateZ = -Math.pow(Math.abs(normalizedDist), 1.8) * 120;
            const scale = Math.max(0.8, 1 - Math.abs(normalizedDist) * 0.15);

            const zIndex = Math.round(100 - Math.abs(normalizedDist) * 50);
            card.style.zIndex = zIndex;

            card.style.transform = `translate3d(${rawX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;

            const edgeFade = Math.max(0, 1 - Math.pow(Math.abs(normalizedDist) * 0.85, 2));
            card.style.opacity = edgeFade.toFixed(2);

            const laserX = containerWidth / 2;
            const cardLeft = rawX;
            const cutDist = laserX - cardLeft;
            let revealPercent = (cutDist / cardWidth) * 100;
            revealPercent = Math.max(0, Math.min(100, revealPercent));

            const colorLayer = card.querySelector('.layer-color');
            if (colorLayer) {
              colorLayer.style.clipPath = `inset(0 0 0 ${revealPercent}%)`;
            }
          });
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
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
              <span className="hero-title-line line-1">Turn your online presence </span>
              <span className="hero-title-line line-2">into a reason customers </span>
              <span className="hero-title-line line-3">
                <span className="hero-title-highlight">choose you...</span>
              </span>
            </h1>
            <div className="hero-7-cta-group">
              <Link to="/contact" className="btn btn-hero-7-primary">
                Book a Discovery Call
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/services" className="btn btn-hero-7-secondary">
                View services
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
        <div
          className="hero-7-carousel-wrapper"
          aria-hidden="true"
        >
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
