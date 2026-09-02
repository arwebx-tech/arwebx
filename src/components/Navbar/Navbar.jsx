import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png'
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setCollapsed(true);
  }, [location.pathname]);

  const handleToggle = () => setCollapsed(prev => !prev);
  const closeMobileMenu = () => setCollapsed(true);

  return (
    <nav
      className={`arwebx-navbar navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container-fluid px-3 px-md-5">
        <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
          <img src={logoImg} alt="ARWEBX Logo" className="navbar-logo-img" loading="lazy" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarMain"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`}
          id="navbarMain"
        >
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0 gap-1">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
