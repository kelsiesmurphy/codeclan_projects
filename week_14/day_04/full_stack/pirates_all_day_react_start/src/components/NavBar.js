import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <img src="/images/pirtate-flag.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <Link to="/pirates">Pirates</Link>
        </li>
        <li className="navLink">
          <Link to="/pirates/new">Create Pirate</Link>
        </li>
        <li className="navLink">
          <Link to="/pirates/ships">Ships</Link>
        </li>
        <li className="navLink">
          <Link to="/pirates/raids">Raids</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
