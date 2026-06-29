import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const[Names, setNames] = useState([

  ])
  return (
    <header className="navbar">
      
      <nav>
         <div><li> <h1 className="logo">LOGO</h1></li></div>
        <ul className="lists">
          
          <li className="nav-links">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/stories">Stories</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/quotes">Quotes</NavLink>
          </li>
          <li className='nav-links'>
            <NavLink to="/products">Products</NavLink>
          </li>
        
        </ul>
        <input onChange={e => setNames(e.target.value)} type="text" />
          <button>get started, {Names} </button>
      </nav>
    </header>
  );
};

export default Navbar;
