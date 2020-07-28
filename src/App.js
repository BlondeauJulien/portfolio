import React, { useState } from 'react';

import Header from './header/main/Header';
import SideDrawer from './header/components/SideDrawer';
import Backdrop from './header/components/Backdrop';
import Presentation from './presentation/main/Presentation';
import UiState from './context/ui/UiState';
import Projects from './projects/main/Projects';
import Technologies from './technologies/main/Technologies';
import Resume from './resume/main/Resume';
import Contact from './contact/main/Contact';

import './App.css';

function App() {
  const [ sideDrawerOpen, setSideDrawerOpen ] = useState(false);
  
  return (
    <UiState>
      <div className="App">
        <Header drawerClickHandler={setSideDrawerOpen} />
        <SideDrawer show={sideDrawerOpen} drawerClickHandler={setSideDrawerOpen}/>
        {sideDrawerOpen && <Backdrop drawerClickHandler={setSideDrawerOpen} /> }
        <Presentation />
        <Projects />
        <Technologies />
        <Resume />
        <Contact />
      </div>
    </UiState>
  );
}

export default App;
