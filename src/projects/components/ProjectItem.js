import React from 'react';

import ProjectHeader from './ProjectHeader'; 
import ProjectImages from './ProjectImages';
import ProjectInfos from './ProjectInfos';

import './ProjectItem.css';

const ProjectItem = () => {
  return (
    <div className="project-item">
      <ProjectHeader />
      <div className="project-item__content">
        <ProjectImages />
        <ProjectInfos />
      </div>
    </div>
  )
}

export default ProjectItem;
