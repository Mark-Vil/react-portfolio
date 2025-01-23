import React from 'react';
import '../styles/Hero.css';
import chillImage from '../assets/programmer.png';

const Hero = () => {
  return (
    <main className="main">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-container">
            <img 
               src={chillImage} 
              alt="James" 
              className="hero-image"
              width="560"
              height="560"
            />
          </div>
          
          <div className="hero-text-wrapper">
            <div className="hero-title-wrapper">
            <h1 className="hero-title">
                <span>I'm        </span>
                <span>Mark Villiones</span>
              </h1>
            </div>
            
            <p className="hero-subtitle">
              Full Stack Web Developer  Specializing in Scalable Architecture and System Design
            </p>
            
            <div className="hero-cta">
              <a href="" className="resume-button" target="_blank" download>
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="download-icon">
                  <path fill="currentColor" d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"/>
                </svg>
              </a>
              
              <a href="markvil64@gmail.com" className="contact-link">
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="contact-icon">
                  <path fill="currentColor" d="M21 8V7l-3 2-3-2v1l2.72 1.82a.5.5 0 0 0 .55 0L21 8zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;