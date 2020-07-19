import React, { useReducer } from 'react';
import UiContext from './uiContext';
import uiReducer from './uiReducer';
import {
  CHANGE_LANGUAGE
} from '../types';

const UiState = props => {
	const initialState = {
    language: 'FR'
	};

  const [ state, dispatch ] = useReducer(uiReducer, initialState);
  
  const changeLanguage = () => {
    let newLanguage;
    if(state.language === 'FR') {
      newLanguage = 'UK'
    } else {
      newLanguage = 'FR';
    }

    dispatch({
      type: CHANGE_LANGUAGE,
      payload: newLanguage
    })
  }


	return (
		<UiContext.Provider
			value={{
        language: state.language,
        changeLanguage
			}}
		>
			{props.children}
		</UiContext.Provider>
	);
};

export default UiState;