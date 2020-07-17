import React, { Component } from 'react';
import { ConversationalForm } from 'conversational-form';
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