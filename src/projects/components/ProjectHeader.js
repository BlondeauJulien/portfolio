import React from 'react';

import './ProjectHeader.css';

const ProjectHeader = props => {
  return (
    <div className="project-item__header">
      <h3 className="project-item__header__title">{props.title}</h3>
    </div>
  )
}

export default ProjectHeader;
