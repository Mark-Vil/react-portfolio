import React from "react";
import "../styles/About.css";
import chill from '../assets/chill.jpg';

const About = () => {
  return (
    <main className="main" id="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">
            <span>Hi&nbsp;</span>
            <span>there!&nbsp;</span>
            <span>My&nbsp;</span>
            <span>name&nbsp;</span>
            <span>is&nbsp;</span>
            <span>Mark&nbsp;</span>
            <span>Anthony&nbsp;</span>
            <span>Villiones&nbsp;</span>
          </h1>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-subtitle">About Me</h2>
            <p className="about-paragraph">
            Beyond coding, I'm an enthusiastic problem-solver who thrives on learning new technologies 
  and staying ahead of industry trends. My experience spans from crafting intuitive user 
  interfaces to designing robust server architectures. I believe in writing clean, maintainable 
  code and creating applications that not only meet technical requirements but also deliver 
  exceptional user experiences.
            </p>
            <p className="about-paragraph">
            My approach combines technical expertise with creative problem-solving, allowing me to 
    develop innovative solutions that make a real difference. I'm always excited to collaborate 
    with teams that share my passion for quality code and user-centric design. Whether it's 
    a challenging backend architecture or an engaging frontend experience, I bring dedication 
    and enthusiasm to every project.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                alt="Developer"
                width="670"
                height="570"
                decoding="async"
                className="about-image"
                 src={chill} 
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
