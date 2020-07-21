import React from 'react';

import './ProjectInfos.css';

const ProjectInfos = () => {
  return (
    <div className="project-item__content__infos">
      <h3>Web Application Full stack</h3>
      <p>Front End with: HTML, CSS, Javascript ES6, React</p>
      <p>Back End with: NodeJS, mongoDB</p>
      <p>Application responsive tablette et mobile</p>
      <h3>Key features:</h3>
      <p>Secure user creation, édition, deletion</p>
      <p>Recette création, édition, deletion</p>
      <p>Add recipe to your favorite list</p>
      <p>Rate and comment recipes</p>
      <h3 className="project-item__content__infos__about-title">A propos:</h3>
      <p>
        Je me suis lancé dans la réalisation de cette application juste après avoir fini un cours sur React. 
        Ayant aussi les bases du Back End avec NodeJS et MongoDB j'ai décidé 
      </p>
      <div className="project-item__content__infos__buttons">
        <button className="btn-code">SEE THE CODE</button>
        <button className="btn-website">SEE THE WEBSITE <i className="fas fa-chevron-circle-right"></i></button>
      </div>
    </div>
  )
}

export default ProjectInfos;
