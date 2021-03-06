import React, { useContext } from 'react';

import content from '../../content/navigationLinkContent';

import UiContext from '../../context/ui/uiContext';

import './NavigationLinks.css';

const NavigationLinks = props => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;

  const closeDrawerOnClick = () => {
    if(props.drawerClickHandler) {
      props.drawerClickHandler(false);
    }
  }
  
  return (
    <ul className="navigation" >
      {props.withHomeButton && (
        <li className="navigation__link" onClick={closeDrawerOnClick}><a href="#top">{content[language].home}</a></li>
      )}
      <li className="navigation__link" onClick={closeDrawerOnClick}><a href="#projects">{content[language].projects}</a></li>
      <li className="navigation__link" onClick={closeDrawerOnClick}><a href="#technologies">{content[language].technologies}</a></li>
      <li className="navigation__link" onClick={closeDrawerOnClick}><a href="#resume">{content[language].resume}</a></li>
      <li className="navigation__link" onClick={closeDrawerOnClick}><a href="#contact">{content[language].contact}</a></li>
    </ul>
  )
}

export default NavigationLinks
