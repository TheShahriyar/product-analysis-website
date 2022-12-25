import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../../images/menu-icon.png'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className='py-6 bg-gray-100'>
      <div className='container mx-auto flex justify-center items-center'>
        <div className='block md:hidden'>
          <img src={MenuIcon} alt="menu icon" onClick={handleMobileNav} />
        </div>
        <div className={`${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "active text-red-500 px-4 mx-2 uppercase" : "px-4 mx-2 uppercase"}
          >
            Home
          </NavLink>
          <NavLink 
          to="/reviews" 
          className={({isActive}) => isActive ? "active text-red-500 px-4 mx-2 uppercase" : "px-4 mx-2 uppercase"}
          >
            Review
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => isActive ? "active text-red-500 px-4 mx-2 uppercase" : "px-4 mx-2 uppercase"}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => isActive ? "active text-red-500 px-4 mx-2 uppercase" : "px-4 mx-2 uppercase"}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => isActive ? "active text-red-500 px-4 mx-2 uppercase" : "px-4 mx-2 uppercase"}
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;