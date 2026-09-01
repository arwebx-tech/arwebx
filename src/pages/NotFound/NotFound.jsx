import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead/SEOHead';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | ARWEBX"
        description="The page you're looking for doesn't exist. Return to the ARWEBX homepage."
        canonical="https://arwebx.in/"
      />

      <section className="not-found" aria-label="Page not found">
        <div className="container text-center">
          <div className="not-found-code" aria-hidden="true">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary btn-lg not-found-btn">
            <i className="bi bi-house me-2" aria-hidden="true"></i>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
