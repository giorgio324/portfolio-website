import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='toggle-button-container'>
          <button>X</button>
        </div>
        <div className='links-container'>
          <Link to={'/'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/experience'}>Experience</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
