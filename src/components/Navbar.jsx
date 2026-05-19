import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      
      <nav>
         <div><li> <h1 className="logo">LOGO</h1></li></div>
        <ul className="lists">
          
          <li className="nav-links">
            <a href="#">Home</a>
          </li>
          <li className="nav-links">
            <a href="#">Stories</a>
          </li>
          <li className="nav-links">
            <a href="#">Movies</a>
          </li>
        
        </ul>
          <button>get started</button>
      </nav>
    </header>
  );
};

export default Navbar;
