import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

const Layout = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Fade in content on route change
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 50);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className={`flex-grow transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;