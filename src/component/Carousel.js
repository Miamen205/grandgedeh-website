import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import President from './President.jpg';
import Vpresident from './Vpresident.png';
import Picture35 from './gedehpics/Picture35.jpeg';
import Gedehlogo from './gedehpics/Gedehlogo.jpeg';
import Picture40 from './gedehpics/Picture40.jpg';
import Picture1 from './gedehpics/Picture1.jpeg';
import Picture54 from './gedehpics/Picture54.jpg';

class Carouselpage extends Component {
    render() {
      return (
  <StyleRoot >
      <div className="carousel">
    <Coverflow 
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: '350px',
          height: '400px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
    >
    
      
     
    <img src={Picture54} alt=' The National Chaplain:Training Tarlue' data-action="http://tw.yahoo.com"/>
      <img src={Picture1} alt='The National Tresurer: Moses Gorwah' data-action="http://tw.yahoo.com"/>
      <img src={Picture40 } alt='The National Secretary: Ziawo A Dorbor' data-action="https://doce.cc/"/>
      <img src={Vpresident} alt='The National Vice President: Hon Harsaus Tarwo' data-action="http://passer.cc"/>
      <img src={President} alt='The National President: Hon Augustine S Manyeah' data-action="https://facebook.github.io/react/"/>
      <img src={Gedehlogo} alt='G.G.A.A' data-action="https://facebook.github.io/react/"/>
    </Coverflow>
    </div>
  </StyleRoot>
    );
}
}

export default Carouselpage;