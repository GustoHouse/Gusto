import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
    render() {
      return (
        <div className="banner">
            <h1>
                <span>Build Fascinating Things</span>
                <strong>With Gusto</strong>
            </h1>
        </div>
      );
    }
  }
  
  export default Banner;