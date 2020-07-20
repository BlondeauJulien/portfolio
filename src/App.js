import React, { useState } from 'react';

import Header from './header/main/Header';
import SideDrawer from './header/components/SideDrawer';
import Backdrop from './header/components/Backdrop';
import Presentation from './presentation/main/Presentation';
import UiState from './context/ui/UiState';
import Projects from './projects/main/Projects';

import './App.css';

function App() {
  const [ sideDrawerOpen, setSideDrawerOpen ] = useState(false);
  
  return (
    <UiState>
      <div className="App">
        <Header drawerClickHandler={setSideDrawerOpen} />
        <SideDrawer show={sideDrawerOpen}/>
        {sideDrawerOpen && <Backdrop drawerClickHandler={setSideDrawerOpen} /> }
        <Presentation />
        <Projects />
      </div>
    </UiState>
  );
}

export default App;
