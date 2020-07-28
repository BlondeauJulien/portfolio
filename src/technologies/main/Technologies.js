import React, { useContext } from 'react';

import UiContext from '../../context/ui/uiContext';
import content from '../../content/technologies';

import HTMLLogo from '../../images/technologiesLogos/html5.png';
import CSS from '../../images/technologiesLogos/css.png';
import JS from '../../images/technologiesLogos/js.png';
import REACT from '../../images/technologiesLogos/react.png';
import NODEJS from '../../images/technologiesLogos/nodejs.png';
import MONGODB from '../../images/technologiesLogos/mongodb.png';
import GIT from '../../images/technologiesLogos/git.png';
import NPM from '../../images/technologiesLogos/npm.png';
import JEST from '../../images/technologiesLogos/jest.png';
import TYPESCRIPT from '../../images/technologiesLogos/typescript.png';
import ANGULAR from '../../images/technologiesLogos/angular.png';
import SQL from '../../images/technologiesLogos/sql.png';
import BOOTSTRAP from '../../images/technologiesLogos/bootstrap.png';
import JQUERY from '../../images/technologiesLogos/jquery.png';

import './Technologies.css';

const Technologies = () => {
  const uiContext = useContext(UiContext);

  const { language } = uiContext;

  return (
    <div id="technologies">
      <h2 className="section-title">{content[language].title}</h2>
      <div className="technologies__cont">
        <h3>{content[language].mainTech}:</h3>
        <ul>
          <li><img src={HTMLLogo} alt="html logo"/><span>html</span></li>
          <li><img src={CSS} alt="css logo"/><span>css</span></li>
          <li><img src={JS} alt="javascript logo"/><span>Javascript (ES6)</span></li>
          <li><img src={REACT} alt="react logo"/><span>React</span></li>
          <li><img src={NODEJS} alt="nodeJs logo" className="center-nodejs"/><span>NodeJS</span></li>
          <li><img src={MONGODB} alt="mongoDB logo" className="center-mongodb"/><span>MongoDB</span></li>
          <li><img src={GIT} alt="git logo" /><span>Git</span></li>
          <li ><img src={NPM} alt="npm logo" className="center-npm"/><span>npm</span></li>
          <li><img src={JEST} alt="jest logo" className="center-jest"/><span>jest</span></li>
        </ul>
      </div>
      <div className="technologies__cont">
        <h3>{content[language].secondaryTech}:</h3>
        <ul>
          <li><img src={TYPESCRIPT} alt="typescript logo"/><span>TypeScript</span></li>
          <li><img src={ANGULAR} alt="angular logo"/><span>Angular</span></li>
          <li><img src={SQL} alt="sql logo"/><span>SQL</span></li>
          <li><img src={BOOTSTRAP} alt="bootstrap logo"/><span>Bootstrap</span></li>
          <li><img src={JQUERY} alt="jquery logo"/><span>jQuery</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Technologies;
