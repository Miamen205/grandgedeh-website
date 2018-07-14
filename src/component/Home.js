import React, { Component } from 'react';
import Navigation from"./Navbar";
import Carouselpage from "./Carousel";
 import gedehLogo from './gedehLogo.png';
 import LiberiaFlag from './LiberiaFlag.gif';
 import Footerpage from "./Footer";


class Homepage extends Component {
    render() {
      return (
        <div id="Home"className="App">     
 <header className="App-header">
  <img src={gedehLogo} className="App-logo" alt="logo" />
  <img src={LiberiaFlag} className="logo" alt="logo" />
  <h1 className="App-title">Grand Gedeh Association In the Americas</h1>
  <br/>
  <br/>
       </header>
        <Navigation>{Navigation}</Navigation>
       <Carouselpage/>
        <br/>
        <iframe width="0" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/142410271&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <br/>
        <Footerpage />
        </div>

    );
  }
}

export default  Homepage;