import React from 'react';
import './HomePage.css';
import AboutPage from './AboutPage';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <h1>Sachin Naik</h1>
        <p>Associate at BlackRock | Full Stack Developer | React, Angular, Java</p>
      </div>
      <div className="bio">
        <AboutPage />
      </div>
    </div>
  );
}

export default HomePage;
