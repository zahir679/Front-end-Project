
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LogIn from "./components/LogIn"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function App() {

  return (
    <Router>
    <div className="App"> 
    <NavBar/>
    <div className="content">
      <Switch>
        <Route path="/" >
        <HomeContainer/>
        </Route>
      
        <Route path="/LogIn">
          <LogIn/>

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
