import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="name">John Doe</h1>
        <p className="tagline">Software Developer | Tech Enthusiast</p>
        <div className="social-icons">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
