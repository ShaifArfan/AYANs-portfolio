import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
