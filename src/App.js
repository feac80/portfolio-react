import React,{ Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LandingPage />
        <Footer title={2}/>
      </React.Fragment>
    )
  }
}

export default App;
