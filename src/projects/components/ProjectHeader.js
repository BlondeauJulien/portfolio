import React from 'react';

import './ProjectHeader.css';

const ProjectHeader = () => {
  return (
    <div className="project-item__header">
      <ul>
        <li className="project-item__header__list-item">Nom project</li>
        <li>|</li>
        <li className="project-item__header__list-item">story</li>
        <li>|</li>
        <li className="project-item__header__list-item">video de presentation</li>
      </ul>
    </div>
  )
}

export default ProjectHeader;
