import React from 'react';
import logo from '../stylesheets/images/logo.png';
import leafLogo from '../stylesheets/images/leafLogo.png';
import '../stylesheets/navbar.css';
const Navbar = ({ setShowLogin }) => {
  function changePage() {
    setShowLogin('login');
  }

  // signout button functionality to remove local storage
  function handleSignOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    localStorage.removeItem('firstName');
    localStorage.removeItem('widgets');
    localStorage.setItem('signedIn', 'false');
    // return user back to the login page
    changePage();
  }
  return (
    <div className='navBarWrapper'>
      <nav className='navBarContainer'>
        <img src='https://i.imgur.com/bfLAokI.png' className='titleLogo'></img>
        <div className='navigation'>
          <a className='logoutButton'>
            <img src='https://i.imgur.com/KcXKTPo.png' className='leafLogo'></img>
            <button onClick={handleSignOut} className='logout'>
              Logout
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
