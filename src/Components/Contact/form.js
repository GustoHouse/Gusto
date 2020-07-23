import React, { Component } from 'react';
import { ConversationalForm } from 'conversational-form';
import G from '../../Assets/Images/g.svg';
import './form.scss';

class Conversation extends Component {
  constructor(props) {
    super(props);

    this.convoStarted = false;

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
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'company',
        'cf-questions': 'Hello! Next, what company do you work for if you dont mind us asking?'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {

    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        robotImage: G,
        preventAutoFocus: true,
        preventAutoStart: true,
        userInterfaceOptions: {
          robot: {
              robotResponseTime: 1000
          }
        },
        animationsEnabled: true,
        flowStepCallback: this.processMessages
      },
      tags: this.formFields
    });

    this.elem.appendChild(this.cf.el);

    // starting the form on scroll
    let theprops = this.props;
    let convo = this.cf;

    window.addEventListener('scroll', function(e) {
      if( theprops.isvisible( document.getElementById("convo-header") ) ){
        if(!this.convoStarted){
          this.convoStarted = true;
          convo.start();
        }
      }
    });

  }

  processMessages = (details, success, error) =>{

    let content = details.text;

    switch(details.tag.name){

      case 'movie':

        if(content === 'Star Wars' || content === 'The Empire Strikes Back' || content === 'Return of the Jedi'){
          this.cf.addRobotChatResponse("What an excellent answer. We're big Star Wars fans ourselves.");
        }

        break;

      case 'name':

        break;
      
      default:

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