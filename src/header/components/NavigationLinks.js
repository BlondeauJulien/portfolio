import React from 'react';

import './NavigationLinks.css';

const NavigationLinks = props => {
  return (
    <ul className="navigation">
      {props.withHomeButton && (
        <li className="navigation__link"><a href="/">Home</a></li>
      )}
      <li className="navigation__link"><a href="/">Projets</a></li>
      <li className="navigation__link"><a href="/">Technologies</a></li>
      <li className="navigation__link"><a href="/">CV</a></li>
      <li className="navigation__link"><a href="/">Contact</a></li>
    </ul>
  )
}

export default NavigationLinks
