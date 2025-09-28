import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Test.css';

function Navbar() {
  return (

    // common for both About page and Portfolio(main) page
    <div className='header'>
      <p className='txt'>Snithija Raavi</p>
      <nav className="navbar">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        {/* <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink> */}
        <a href="#projects">Projects</a>  {/* Scrolls to project section */}
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
