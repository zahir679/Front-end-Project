
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LogIn from './components/LogIn'
import ReviewForm from './components/ReviewForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App"> 
    <NavBar/>
    <div className="content">
      <Switch>
        <Route path="/" exact>
        <HomeContainer/>
        </Route>
      
        <Route path="/LogIn">
          <LogIn />
        
        </Route>
       
        <Route path="/LeaveAReview">
          <ReviewForm />


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
