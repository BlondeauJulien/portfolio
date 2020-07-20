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
        <p className="test">{content[language].presentation}</p>
        {' '}
        <h1 className="test">JULIEN BLONDEAU</h1>
        <p className="test2">{content[language].whoIAm1} <span>{content[language].whoIAm2}</span></p>
      </div>
      <div className="techno">
        {/* JS
            ES6
            nodeJS
            mongodb
            git
            react
            angular
            html
            css
            typescript
            express 
        */}
      </div>
    </div>
  )
}

export default Presentation;
