import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link
            className={`link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
          >
            <h6>Race Info</h6>
          </Link>

          <Link
            className={`link ${location.pathname === '/map' ? 'active' : ''}`}
            to="/map"
          >
            <h6>Map</h6>
          </Link>

          <Link
            className={`link ${location.pathname === '/sign_up' ? 'active' : ''}`}
            to="/sign_up"
          >
            <h6>Sign Up</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
