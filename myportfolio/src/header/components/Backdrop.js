import React from 'react';

import './Backdrop.css';

const Backdrop = props => {
  return (
    <div 
      className="backdrop"
      onClick={() => props.drawerClickHandler(false)}
    />
  )
}

export default Backdrop;
