import './App.css';
import HomeContainer from './containers/HomeContainer';

import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App"> 
      <NavBar />
      <HomeContainer />
    </div>

  );
  
}

export default App;
