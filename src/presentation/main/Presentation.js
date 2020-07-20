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
    </div>
  )
}

export default Presentation;
