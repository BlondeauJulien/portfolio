import React from 'react';

import './ProjectHeader.css';

const ProjectHeader = props => {
  return (
    <div className="project-item__header">
      <ul>
        <li className="project-item__header__list-item">{props.title}</li>
        <li>|</li>
        <li className="project-item__header__list-item">story</li>
        <li>|</li>
        <li className="project-item__header__list-item">video de presentation</li>
      </ul>
    </div>
  )
}

export default ProjectHeader;
