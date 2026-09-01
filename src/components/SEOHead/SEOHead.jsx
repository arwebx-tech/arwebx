import { useEffect } from 'react';

/**
 * SEOHead — Updates document head with per-page SEO metadata.
 * Uses useEffect to manipulate meta tags dynamically.
 */
export default function SEOHead({
  title,
  description,
  canonical,
  image = 'https://arwebx.in/og_img.png',
  ogType = 'website',
}) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Meta description
    setMeta('name', 'description', description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', image);

    // Twitter / X
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, canonical, image, ogType]);

  return null;
}
