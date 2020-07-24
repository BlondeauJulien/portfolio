import React, { useContext } from 'react';

import ProjectItem from '../components/ProjectItem';
import projectsContent from "../../content/projects";

import UiContext from '../../context/ui/uiContext';

import './Projects.css';

const Projects = () => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;
  return (
    <div id="projects">
      <h2>{language === "FR" ? 'Mes projets' : 'My projects'}</h2>
      {projectsContent.map((project, i) => (<ProjectItem key={'project' + i} content={project} language={language}/>))}
    </div>
  )
}

export default Projects;
