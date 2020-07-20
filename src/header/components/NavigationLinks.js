import React, { useContext } from 'react';

import content from '../../content/navigationLinkContent';

import UiContext from '../../context/ui/uiContext';

import './NavigationLinks.css';

const NavigationLinks = props => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;
  
  return (
    <ul className="navigation" >
      {props.withHomeButton && (
        <li className="navigation__link"><a href="/">{content[language].home}</a></li>
      )}
      <li className="navigation__link"><a href="#projects">{content[language].projects}</a></li>
      <li className="navigation__link"><a href="/">{content[language].technologies}</a></li>
      <li className="navigation__link"><a href="/">{content[language].resume}</a></li>
      <li className="navigation__link"><a href="/">{content[language].contact}</a></li>
    </ul>
  )
}

export default NavigationLinks
