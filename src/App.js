import React, { Component } from 'react';
import Header from './Components/Header/header';
import Background from './Components/Background/background';
import Banner from './Components/Banner/banner';
import Contact from './Components/Contact/contact';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div>
        
        <Background />

        <Header />

        <Banner />

        <Contact />

      </div>
    );
  }
}

export default App;
