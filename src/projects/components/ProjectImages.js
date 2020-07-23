import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './ProjectImages.css';

const ProjectImages = props => {
  return (
    <div className="project-item__carousel">
      <Carousel>
        {props.images.map(img => {
          return (<div>
            <img src={img} alt="project preview"/>
          </div> )
        })}
      </Carousel>
    </div>
  )
}

export default ProjectImages;
