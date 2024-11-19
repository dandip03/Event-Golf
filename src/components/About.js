// About.js
import React from 'react';
import './styles/About.css'; // Import CSS for About

function About() {
  return (
    <div className="about">
      <h1>About This Application</h1>
      <p>This application is designed to provide detailed information about golf events using data from the LiveGolf API. It includes event details, leaderboards, and player statistics to give users a comprehensive overview of ongoing events.</p>
      <p>The app is simple, intuitive, and focuses on providing quick access to live golf event data.</p>
    </div>
  );
}

export default About;
