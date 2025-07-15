import React from 'react';

function ProjectCard({
  imageSrc,
  imageClass = 'project-img-placeholder',
  title,
  description,
  buttonLink,
  buttonText = 'Check Demo →',
  techIcons = []
}) {
  return (
    <div className="project-card">
      <img className={imageClass} src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonLink && (
        <button>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </button>
      )}
      <div className="tech-icons">
        {techIcons.map((icon, idx) => (
          <span role="img" aria-label={icon.label || ''} key={idx}>
            <img src={icon.src} alt={icon.alt || ''} height="30px" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;