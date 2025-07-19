import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import logo from '../../assets/media/image/ks_infotrade_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          {/* <BarChart2 className="w-8 h-8 text-primary-600" /> */}
          {/* <span className="ml-2 text-xl font-bold text-primary-800">KS Infotrade</span> */}
          <img src={logo} alt="" className='h-[100px]' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="btn btn-primary py-2"
          >
            Get Started
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 p-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 p-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive ? 'text-primary-600' : 'text-gray-800 hover:text-primary-600'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="btn btn-primary mt-4 text-center"
                onClick={closeMenu}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/services', label: 'Services' },
  { path: '/features', label: 'Features' },
];

export default Header;