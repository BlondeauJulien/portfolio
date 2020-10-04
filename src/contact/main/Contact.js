import React, { useContext } from 'react';

import UiContext from '../../context/ui/uiContext';
import content from '../../content/contact';

import PHONE from '../../images/telephone.png';

import './Contact.css';

const Contact = () => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;

  return (
    <div id="contact">
      <h2 className="section-title">{content[language].title}</h2>
      <div className="contact__cont">
        <a href="mailto:julienblondeaupro@protonmail.com">julienblondeaupro@protonmail.com</a>
        <a href="https://www.linkedin.com/in/julien-blondeau-61a0541b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <img src={PHONE} alt="phone number"></img>
      </div>
    </div>
  )
}

export default Contact;
