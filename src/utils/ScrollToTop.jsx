import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем страницу вверх после каждого перехода
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Этот компонент ничего не рендерит
}

export default ScrollToTop;
