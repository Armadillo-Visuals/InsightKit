import React from 'react';
import classes from './navBar.module.css';
const Navbar = () => {
  return (
    <div className={`${classes.navBar}`}>
      <nav>
        <h1 className='title'>Environment.IQ</h1>
      </nav>
    </div>
  );
};

export default Navbar;
