import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import marmibonHome from '../../images/mamribon-home.PNG';
import './ProjectImages.css';

const ProjectImages = () => {
  return (
    <div className="project-item__carousel">
      <Carousel>
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>      
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>      
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>      
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>
        <div>
          <img src={marmibonHome} alt="project preview"/>
        </div>
      </Carousel>
    </div>
  )
}

export default ProjectImages;
