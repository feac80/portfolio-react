import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Porfolio';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={LandingPage} />
          <div className="container">
            <Route exact path='/contact' component={ContactMe} />
            <Route exact path='/about' component={AboutMe} />
            <Route exact path='/portfolio' component={Portfolio} />
          </div>
          <Footer />
        </div>
      </Router>
      
    )
  }
}

export default App;
