import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-6 bg-gray-100'>
      <div className='container mx-auto flex justify-center'>
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
  );
};

export default Header;