import React, { Component } from 'react';
import {ConversationalForm} from 'conversational-form';
import './form.scss';

class Conversation extends Component {
  constructor(props) {
    super(props);

    this.formFields = [
        {
            'tag': 'cf-robot-message',
            'cf-questions': 'Hello friend!'
        },
        {
            'tag': 'input',
            'type': 'text',
            'name': 'movie',
            'cf-questions': 'To kick off this wonderful conversation, how about a fun question! <strong>What is one of your favorite movies?</strong>'
        },
        {
            'tag': 'input',
            'type': 'text',
            'name': 'name',
            'cf-questions': 'Cool! Now that the movie talk is over, we would like to know how to address you. <strong>Mind telling us your name?</strong>' 
        }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        flowStepCallback: this.processMessages
      },
      tags: this.formFields
    });

    this.elem.appendChild(this.cf.el);
  }

  processMessages = (details, success, error) =>{

    let content = details.tag.text;

    switch(details.tag.name){

        case 'movie':

            if(content == 'The Empire Strikes Back' || content == 'The Empire Strikes Back' || content == 'Return of the Jedi'){
                this.cf.addRobotChatResponse("What an excellent answer. We're big Star Wars fans ourselves.");
            }

            break;

        case 'name':

            break;
    }

    success();

  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("Thanks for chatting with us today! You should hear from us soon.");
  }
  
  render() {
    return (
      <div ref={ref => this.elem = ref}>
      </div>
    );
  }
}

  
export default Conversation;