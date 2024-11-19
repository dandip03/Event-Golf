import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaInfoCircle, FaUser } from 'react-icons/fa'; // Import the icons
import './styles/NavBar.css'; // Import CSS for NavBar

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <FaHome className="nav-icon" />
      </Link>
      <Link to="/event" className="nav-link event-paling-rame">
        <FaCalendarAlt className="nav-icon" />
      </Link>
      <Link to="/about" className="nav-link">
        <FaInfoCircle className="nav-icon" />
      </Link>
      <Link to="/profile" className="nav-link">
        <FaUser className="nav-icon" />
      </Link>
    </nav>
  );
}

export default NavBar;
