import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Experience</a></li>
            <li><a href="https://github.com/sachin-naik" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a></li>
          <li><a href="https://www.linkedin.com/in/sachin-naik-3353718a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
