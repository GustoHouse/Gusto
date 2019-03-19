import React, { Component } from 'react';
import logo from './gusto-logo.svg';
import apexScreenshot from './apex-project-screenshot.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="intro">
            <div className="left">
              <span className="tag">Nurture Fascination.</span>
            </div>
            <div className="right">
              <h1>Digital Builders.</h1>
              <p>Gusto. Such a little word. But to live its true meaning could move mountains. It stands for vigor. It stands for curiosity. It’s the very thing that gives life genuine super powers.</p>
              <p>Building things is our passion. Through websites and applications we tell stories and enrich lives.</p>
            </div>
          </div>
          <div className="projects">
            <div className="project">
              <div className="image">
                <img src={apexScreenshot} alt="Apex Tracker Screenshot" />
              </div>
              <div className="text">
                <span className="tag">Application</span>
                <h2>Apex Tracker</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut odio sit amet lorem rutrum finibus.</p>
                <a href="#">Explore.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
