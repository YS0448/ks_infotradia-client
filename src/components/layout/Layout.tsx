import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import axios from 'axios';
import apiCall from '../../services/apiServices';


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

  // useEffect(() => {
  //   // This runs once when the layout mounts (first page load)
  //   axios
  //     .get(`${import.meta.env.VITE_API_BASE_URL}/api/userIP`)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.error('IP logging failed', err));
  // }, []);

  const userIP= async()=>{
    try{
      const endpoint = `/api/userIP`;
      const data = await apiCall({ endpoint});
      console.log('data:', data);
    }
    catch(err){
      console.log('err:', err);
    }
  }

  useEffect(() => {
    userIP()
  }, []);


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