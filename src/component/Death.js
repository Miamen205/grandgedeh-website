import React, { Component } from 'react';
import Navigation from"./Navbar";
import gedehLogo from './gedehLogo.png';
import LiberiaFlag from './LiberiaFlag.gif';


class Deathpage extends Component {
    render() {
      return (
        <div id="Home"className="App">
        
 <header className="App-header">
 <img src={gedehLogo} className="App-logo" alt="logo" />
 <img src={LiberiaFlag} className="logo" alt="logo" />
 <h1 className="App-title">Grand Gedeh Association In America</h1>
        </header>
        <Navigation>{Navigation}</Navigation>
<h1>Death New Page</h1>
        </div>

    );
  }
}

export default  Deathpage;