import React from 'react';
import './styles/Profile.css'; // Import CSS for Profile

function Profile() {
  return (
    <div className="profile">
     <h2>Your Profile</h2>
      <div className="profile-header">
        <img src="/dandy.jpg" alt="Profile" className="profile-image" />
      </div>
      
      <div className="profile-info">
        <p><strong>Name:</strong> Muhammad Dandy Prasetya</p>
        <p><strong>Email:</strong> mdandiprasetya@gmail.com</p>
        <p><strong>Location:</strong> Indonesia, Jakarta</p>
      </div>

      <h3>Skills and Interests</h3>
      <ul className="skills-list">
        <li>Web Development</li>
        <li>Golf Enthusiast</li>
        <li>React & JavaScript</li>
        <li>API Integration</li>
      </ul>
    </div>
  );
}

export default Profile;