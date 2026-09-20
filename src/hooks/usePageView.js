import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/supabase';

export default function usePageView() {
  const location = useLocation();

  useEffect(() => {
    try {
      const rawSearch = typeof window !== 'undefined' ? window.location.search : location.search;
      const searchParams = new URLSearchParams(rawSearch || location.search);
      if (searchParams.get('admin') === 'true' || searchParams.get('admin') === '1') {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('arwebx_is_admin', 'true');
        }
        return;
      }

      if (
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' ||
          window.location.hostname === '127.0.0.1' ||
          window.location.hostname.includes('192.168.'))
      ) {
        return;
      }

      if (typeof localStorage !== 'undefined' && localStorage.getItem('arwebx_is_admin') === 'true') {
        return;
      }

      if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('arwebx_admin_auth') === 'true') {
        return;
      }

      if (location.pathname.startsWith('/admin')) {
        return;
      }

      trackPageView(location.pathname);
    } catch {
      // Fail silently to never impact browsing
    }
  }, [location.pathname, location.search]);
}
