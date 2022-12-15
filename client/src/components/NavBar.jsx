import React from 'react';
import logo from '../stylesheets/images/logo.png';
import leafLogo from '../stylesheets/images/leafLogo.png';
import '../stylesheets/navbar.css';
const Navbar = () => {
  return (
    <div className='navBarWrapper'>
      <nav className='navBarContainer'>
        <img src={logo} className='titleLogo'></img>
        <div className='navigation'>
          <a className='logoutButton'>
            <img src={leafLogo} className='leafLogo'></img>
            <div className='logout'>Logout</div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
