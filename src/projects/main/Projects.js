import React from 'react';

import './Projects.css';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id="projects">
      <h2>Mes Projets</h2>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  )
}

export default Projects;
