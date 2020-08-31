import React, { Component } from 'react';
import './job.scss';

class Job extends Component {
  render() {
      return (
        <a href={this.props.url} className="job" target="_blank" rel="noopener noreferrer">
            <strong className="original">{this.props.name}</strong>
            <div className="image">
                <strong>{this.props.name}</strong>
                <img alt={this.props.name} title={this.props.name} src={this.props.image} />
            </div>
        </a>
      );
    }
  }
  
  export default Job;