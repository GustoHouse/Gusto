import React, { Component } from 'react';
import './background.scss';

class Background extends Component {
    render() {
      return (
        <div className="background">

            <svg className="bg-teal" viewBox="0 0 664 591" fill="none">
                <path d="M5.16669e-05 2.98643e-06L664 591L0 591L5.16669e-05 2.98643e-06Z" fill="#2DDAD3"/>
                <path d="M4.6946e-05 54L603 591L0 591L4.6946e-05 54Z" fill="url(#tealfade)"/>
                <defs>
                <linearGradient id="tealfade" x1="301.5" y1="591" x2="301.5" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2BCDC7"/>
                    <stop offset="1" stopColor="#2BCDC7" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>


        </div>
      );
    }
  }
  
  export default Background;