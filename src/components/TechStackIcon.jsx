import React from 'react';
import "../styles/TechStackIcon.css";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="tech-stack-group">
      <div className="tech-stack-container">
        <div className="tech-stack-icon-wrapper">
          <div className="tech-stack-icon-glow"></div>
          <img 
            src={TechStackIcon}
            alt={`${Language} icon`} 
            className="tech-stack-icon"
          />
          <div className="tech-stack-tooltip">{Language}</div>
        </div>
      </div>
    </div>
  );
};

export default TechStackIcon;