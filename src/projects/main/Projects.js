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
      <h2>{}</h2>
      {projectsContent.map(project => (<ProjectItem content={project} language={language}/>))}
    </div>
  )
}

export default Projects;
