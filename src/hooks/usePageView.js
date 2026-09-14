import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/supabase';

/**
 * Custom hook to track page views automatically on route changes.
 */
export default function usePageView() {
  const location = useLocation();

  useEffect(() => {
    // Exclude /admin page from analytics tracking
    if (location.pathname.startsWith('/admin')) return;

    trackPageView(location.pathname);
  }, [location.pathname]);
}
