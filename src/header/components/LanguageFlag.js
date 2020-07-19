import React, { useContext, useState, useEffect } from 'react';

import UiContext from '../../context/ui/uiContext';

import './LanguageFlag.css';

const LanguageFlag = () => {
  const uiContext = useContext(UiContext);
  const { language, changeLanguage } = uiContext;
  const [ flagToDisplay, setFlagToDisplay ] = useState(null);

  useEffect(() => {
    if(language === 'FR') {
      setFlagToDisplay('GB')
    } else {
      setFlagToDisplay('FR')
    }
  }, [ language ]);

  return (
    <div className="flag-container" onClick={() => changeLanguage()}>
      <img 
        src={`https://www.countryflags.io/${flagToDisplay}/shiny/32.png`}
        alt='change language flag'
        title={
          flagToDisplay === "FR" ? 
          'Passer en français':
          'Switch to english'
        }
      />
    </div>
  )
}

export default LanguageFlag
