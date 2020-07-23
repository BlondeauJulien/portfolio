import React from 'react';

import ProjectHeader from './ProjectHeader'; 
import ProjectImages from './ProjectImages';
import ProjectInfos from './ProjectInfos';

import './ProjectItem.css';

const ProjectItem = props => {
  const { content, language } = props;

  return (
    <div className="project-item">
      <ProjectHeader title={content.title}/>
      <div className="project-item__content">
        <ProjectImages images={content.images}/>
        <ProjectInfos content={content[language]}/>
      </div>
    </div>
  )
}

export default ProjectItem;
