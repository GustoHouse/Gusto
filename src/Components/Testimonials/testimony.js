import React, { Component } from 'react';
import './testimony.scss';

class Testimony extends Component {
  render() {
    return (
      <div className="testimony">

        <svg viewBox="0 0 83 73" fill="none">
            <path d="M33 0.5L38 5.5L6.5 37L1.5 32V0.5H33Z" fill="#5980F7"/>
            <path d="M0 68L10.5 37H17.5L5 73L0 68Z" fill="#5980F7"/>
            <path d="M77 0.5L82 5.5L50.5 37L45.5 32V0.5H77Z" fill="#5980F7"/>
            <path d="M44 68L54.5 37H61.5L49 73L44 68Z" fill="#5980F7"/>
          <path d="M82.5906 33.6999L64.2906 73H48.9906L61.5906 37L50.7906 37L50.7906 5.19996L82.5906 5.19996V33.6999ZM38.1906 33.6999L19.8906 73H4.59058L17.1906 37L6.39058 37L6.39059 5.19995L38.1906 5.19995V33.6999Z" fill={this.props.content.color}/>
        </svg>

        {this.props.content.text.map((paragraph) =>
          <p>{paragraph}</p>
        )}

        <strong>{this.props.content.name}</strong>
        <span>{this.props.content.business}</span>

      </div>
    );
  }
}
  
export default Testimony;