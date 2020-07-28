import React from 'react';

import NavigationLinks from '../../header/components/NavigationLinks';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer__navigation-items">
        <NavigationLinks withHomeButton={true}/>
      </nav>
      <div className="footer__infos">
        <span>Julien Blondeau</span>
        <span>Lille, France</span>

      </div>
    </div>
  )
}

export default Footer
