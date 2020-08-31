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
          'cf-questions': 'Hello!'
      },
      {
          'tag': 'input',
          'type': 'text',
          'name': 'movie',
          'cf-questions': 'To kick off this conversation, how about a fun question! <strong>What is one of your favorite movies?</strong>'
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
        'cf-questions': 'Hello {name}! Nice to meet you. Next, could you let us know <strong>what company you work for?</strong>'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'reason',
        'cf-questions': 'Now in a just a short sentence or two, could you let us know why you are reaching out today? <strong>What kind of help are you looking for?</strong>'
      },
      {
        'tag': 'input',
        'type': 'email',
        'name': 'email',
        'cf-questions': 'Lastly, <strong>if you could give us your email address</strong> so we could reach back out to you, that would be awesome.'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {

    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        robotImage: G,
        preventAutoFocus: false,
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

    let message = {
      message_html: JSON.stringify(formDataSerialized), 
      from_name: formDataSerialized.name, 
      reply_to: formDataSerialized.email
    };

    window.emailjs.send('gmail','gusto_convo',message).then(res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)); 
  }
  
  render() {
    return (
      <div ref={ref => this.elem = ref}>
      </div>
    );
  }
}

  
export default Conversation;