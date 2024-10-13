import React from 'react';
import './projects.css'; 

const ProjectCard = ({ index, project }) => {
  function getMargin() {
    return (index % 6) * 150; 
  }

  return (
    <div className="project-card" style={{ marginLeft: `${getMargin()}px` }}>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-tools">Tech Used: {project.tools}</p>
    </div>
  );
};

export default ProjectCard;
