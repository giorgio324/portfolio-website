import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pageLocation = useLocation();

  // when page changes i want to close mobile navigation
  useEffect(() => {
    setIsNavOpen(false);
  }, [pageLocation]);

  // this adds nav-open when nav opens so overflow content will not be shown
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isNavOpen]);
  // closing navigation after screen reaches 620px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 620) {
        setIsNavOpen(false);
        document.body.classList.remove('nav-open');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='navbar-container'>
      <nav className={isNavOpen ? 'navbar open' : 'navbar'}>
        <div className='toggle-button-container'>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className='nav-btn'>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className='links-container'>
          <Link to={'/'} className='nav-link'>
            Home
          </Link>
          <Link to={'/projects'} className='nav-link'>
            Projects
          </Link>
          <Link to={'/experience'} className='nav-link'>
            Experience
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
