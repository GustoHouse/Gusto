import React, { Component } from 'react';
import './background.scss';

class Background extends Component {
    render() {
      return (
        <div className="background">
            
            <svg className="bg-pink" viewBox="0 0 191 215" fill="none">
                <path d="M191 -8.34888e-06L0 215L-9.39795e-06 0L191 -8.34888e-06Z" fill="#FF0255"/>
                <path d="M174 -7.60578e-06L0 195L-8.52372e-06 0L174 -7.60578e-06Z" fill="url(#pinkfade)"/>
                <defs>
                <linearGradient id="pinkfade" x1="-4.26186e-06" y1="97.5" x2="174" y2="97.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E1004A"/>
                    <stop offset="1" stopColor="#E1004A" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>

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