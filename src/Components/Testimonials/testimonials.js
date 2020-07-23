import React, { Component } from 'react';
import Testimony from './testimony';
import './testimonials.scss';

const gainesway = {
    text: "",
    name: "",
    business: "",
    color: ""
};

class Testimonials extends Component {
  render() {
    return (
      <section className="testimonials">

        <h2 id="testimonials-header">
            <span>Let Others</span>
            <strong>Tell You</strong>
        </h2>

        <Testimony content={gainesway} />

      </section>
    );
  }
}
  
export default Testimonials;