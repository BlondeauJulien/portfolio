import React, { useContext } from 'react';

import UiContext from '../../context/ui/uiContext';
import content from '../../content/resume';

import './Resume.css';

const Resume = () => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;

  return (
    <div id="resume">
      <h2 className="section-title">{content[language].title}</h2>
      <a href="/" target="_blank" download >{content[language].btnText}</a>
    </div>
  )
}

export default Resume;
