import React from 'react';
import "../styles/CardProject.css";
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log('ProjectLink is empty');
      e.preventDefault();
      alert('Live demo link is not available');
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      console.log('ID is empty');
      e.preventDefault();
      alert('Project details are not available');
    }
  };

  return (
    <div className="card-project-group">
      <div className="card-project-container">
        <div className="card-project-overlay"></div>

        <div className="card-content">
          <div className="image-container">
            <img
              src={Img}
              alt={Title}
              className="project-image"
            />
          </div>

          <div className="text-content">
            <h3 className="project-title">{Title}</h3>
            <p className="project-description">{Description}</p>

            <div className="button-section">
              {ProjectLink ? (
                <a
                  href={ProjectLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="live-demo-link"
                >
                  <span className="live-demo-text">Live Demo</span>
                  <ExternalLink className="icon" />
                </a>
              ) : (
                <span className="not-available-text">Demo Not Available</span>
              )}

            </div>
          </div>

          <div className="card-border"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
