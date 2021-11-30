import { useState, useEffect } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn.js'

function App() {

  return (
    <div className="App"> 
      <NavBar />
      <LogIn/>
      <HomeContainer />
    </div>

  );
  
}

export default App;
