import React, { useContext } from 'react';

import content from '../../content/presentationContent';
import UiContext from '../../context/ui/uiContext';

import './Presentation.css';

const Presentation = () => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;

  return (
    <div className="presentation">
      <div className="presentation__text">
        <p className="presentation__first-line">{content[language].presentation}</p>
        {' '}
        <h1 className="presentation__first-line">JULIEN BLONDEAU</h1>
        <p className="presentation__second-line">{content[language].whoIAm1} <span>{content[language].whoIAm2}</span></p>
      </div>
      <div className="presentation__logos">
        <a href="https://github.com/BlondeauJulien" target="_blank" rel="noopener noreferrer" title={content[language].hoverTextGithubLink}>
        <i class="fab fa-github github-logo"></i>
        </a>
        <a href="https://www.linkedin.com/in/julien-blondeau-61a0541b5/" target="_blank" rel="noopener noreferrer" title={content[language].hoverTextLinkedinLink}>
          <i class="fab fa-linkedin linkedin-logo"></i>
        </a>
      </div>
    </div>
  )
}

export default Presentation;
