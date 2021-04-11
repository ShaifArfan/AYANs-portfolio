import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // document.querySelector('.scroll-content').style.transform =
    //   'translate3d(0,0,0)';
    // document.querySelector('.scroll-content').style.transition =
    //   '.5s linear transform';
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
