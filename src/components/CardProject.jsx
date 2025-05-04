import React from 'react';
import "../styles/CardProject.css";
import { ExternalLink } from 'lucide-react';

const CardProject = ({ Img, Title, Description, ProjectLink, id }) => {
  const hasLiveDemo = ProjectLink && ProjectLink.trim() !== "";

  const formatUrl = (url) => {
    if (!url) return '#';
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  const handleClick = (e) => {
    console.log("Link clicked:", ProjectLink);
    
    if (!hasLiveDemo) {
      e.preventDefault();
      alert('Live demo link is not available');
    }
  };

  const formattedLink = formatUrl(ProjectLink);

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
              {hasLiveDemo ? (
                <a
                  href={formattedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="live-demo-link"
                  style={{ cursor: 'pointer', zIndex: 10, position: 'relative' }}
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