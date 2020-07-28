import React from 'react';

import PHONE from '../../images/telephone.png';

import './Contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="section-title">Me contacter</h2>
      <div className="contact__cont">
        <a href="mailto:julienblondeaupro@protonmail.com">julienblondeaupro@protonmail.com</a>
        <img src={PHONE} alt="phone number"></img>
      </div>
    </div>
  )
}

export default Contact;
