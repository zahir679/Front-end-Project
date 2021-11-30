import { useState, useEffect } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LogIn from './components/LogIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function getSessionStorageOfDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key)
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored)
}

function App() {

  const [loggedIn, setLoggedIn] = useState(
    getSessionStorageOfDefault('loggedIn', false)
  );
  // const [loggedInCustomer, setLoggedInCustomer] = useState(null);

  useEffect(() => {
    sessionStorage.setItem('loggedIn', JSON.stringify(loggedIn))
  }, [loggedIn])

  const onLogIn = () => {
    setLoggedIn(true);
  }

  return (
    <Router>
    <div className="App"> 
    <NavBar loggedIn={loggedIn}/>
    <div className="content">
      <Switch>
        <Route path="/" exact>
        <HomeContainer/>
        </Route>
      

        <Route path="/LogIn">
          <LogIn onLogIn={onLogIn}/>
        
        </Route>
       
        <Route path="/WishList">

        </Route>
      </Switch>
      </div>
      <div className="footer" id="Footer">
      <Footer/>
      </div>
      </div>
      </Router>


  );
  
}

export default App;
