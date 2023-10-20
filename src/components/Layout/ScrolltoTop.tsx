// ScrollToTop.js
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // This ensures that the scroll-to-top effect works on route changes within the app.
  navigate(location.pathname);

  return null;
};

export default ScrollToTop;
