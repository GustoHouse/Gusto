import React, { Component } from 'react';
import Header from './Components/Header/header';
import Background from './Components/Background/background';
import Banner from './Components/Banner/banner';
import Contact from './Components/Contact/contact';
import './style.scss';

class App extends Component {

  isScrolledIntoView = (el) => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
  
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  componentDidMount() {

    document.getElementsByTagName("html")[0].setAttribute("class","viewing-banner");

    let isvisible = this.isScrolledIntoView;

    window.addEventListener('scroll', function(e) {
      if( isvisible( document.getElementById("banner-header") ) ){
        document.getElementsByTagName("html")[0].setAttribute("class","viewing-banner");
      }else if( isvisible( document.getElementById("convo-header") ) ){
        document.getElementsByTagName("html")[0].setAttribute("class","viewing-convo");
      }
    });

  }

  render() {
    return (
      <div>
        
        <Background />

        <Header />

        <Banner />

        <Contact isvisible={this.isScrolledIntoView} />

      </div>
    );
  }
}

export default App;