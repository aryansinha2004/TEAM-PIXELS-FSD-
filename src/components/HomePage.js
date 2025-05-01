import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // We'll style it here

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>👨‍💻 Team Pixels </h1>
      <h4>Aryan Sinha[RA2211056010025]</h4>
      <h4>Sneha Sharma[RA2211056010027]</h4>
      <h4>Divyansh[RA2211056010029]</h4>
      <p>Welcome to the Student Team Members Management App</p>
      <p>Full Stack Development CT</p>

      <div className="nav-buttons">
        <Link to="/add" className="button">➕ Add Member</Link>
        <Link to="/members" className="button">👥 View Members</Link>
      </div>
    </div>
  );
};

export default HomePage;
