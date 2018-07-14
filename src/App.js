import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./component/Home";
import Aboutpage from "./component/About";
import Contactpage from "./component/Contact";
import Deathpage from "./component/Death";
import Chapterspage from "./component/Chapters";


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
        <div> 
         <div>
        <Route exact path="/" component={Homepage} />
         <Route path="/About" component={Aboutpage} /> 
         <Route path="/contact" component={Contactpage} /> 
         <Route path="/Death" component={Deathpage} />
         <Route path="/Chapters" component={Chapterspage} />
       
        </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
