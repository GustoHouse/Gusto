import React, { Component } from 'react';
import Header from './Components/Header/header';
import Background from './Components/Background/background';
import Banner from './Components/Banner/banner';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div>
        
        <Background />

        <Header />

        <Banner />

      </div>
    );
  }
}

export default App;
