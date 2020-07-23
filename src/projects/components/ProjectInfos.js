import React, { Fragment } from 'react';

import './ProjectInfos.css';

const ProjectInfos = props => {
  const { content } = props;
  return (
    <div className="project-item__content__infos">
      <h3>{content.appType}</h3>
      <ul>
        <li>{content.frontend}</li>
        <li>{content.backend}</li>
        <li>{content.responsive}</li>
      </ul>
      {content.keyFeatures && (
        <Fragment>
          <h3>{content.keyFeaturesTitle}:</h3>
          <ul>
            {
              content.keyFeatures.map(f => (<li>{f}</li>))
            }
          </ul>
        </Fragment>
      )}
      <h3 className="project-item__content__infos__about-title">{content.aboutTitle}:</h3>
        {
          content.about.map(t => (<p>{t}</p>))
        }  
      <div className="project-item__content__infos__buttons">
        <a href={content.codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">{content.codeBtnText}</a>
        <a href={content.siteLink} target="_blank" rel="noopener noreferrer" className="btn-website">{content.siteBtnText}{` `}<i className="fas fa-chevron-circle-right"></i></a>
      </div>
    </div>
  )
}

export default ProjectInfos;
