import React, { Component } from 'react';
import Conversation from './form';
import './contact.scss';

class Contact extends Component {
    render() {
      return (
        <section className="split contact">

            <div className="left">

                <div className="container">
                    <h2>
                        <span>Now It's Time To</span>
                        <strong>Say Hello</strong>
                    </h2>
                      <p>We’d love to hear about what problems you need solving, what goals you’d like to achieve, what projects you'd love to build, and what your favorite flavor of pie is.</p>
                </div>

            </div>
            <div className="right">
                <div className="container">

                    <Conversation />

                </div>
            </div>

        </section>
      );
    }
  }
  
  export default Contact;