import { useState, useEffect } from 'react';
import './App.scss';
import './reset.css';

///Import Components
import ScrollToTop from '@/components/ScrollToTop';

//import layout
import Navbar from '@/layout/Navbar';
import NavbarMenu from '@/layout/Menu';
import AnimatedRoutes from '@/routes/index';
import { useTheme } from '@/useTheme'; // ✅ подключаем useTheme

//Import React router dom
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
// import Loading from '@/layout/Loading/index';

function App() {
  const [menuIsActive, setMenuIsActive ] = useState(null);
  const { theme, toggleTheme } = useTheme(); // ✅ получаем из кастомного хука

  ///PAGE SCROLL TO TOP
  function ScrollToTopFunc() {
    const { pathname, search } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
  };

  return (
    <Router>
      <>
        {/* SCROLL TO TOP */}
        <ScrollToTop />
        <ScrollToTopFunc />
        {/* <Loading /> */}
        <div className="fixed-img__wrapper"></div>

        <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} toggleTheme={toggleTheme} theme={theme} />
        <NavbarMenu setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />

        {/* ANIMATED ROUTE */}
        <AnimatedRoutes />
      </>
    </Router>
  )
}

export default App
