import { useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';

import G from './g.svg';
import './Talk.scss'

export default function Talk() {

    const chatRef = useRef(null);

    const formFields = [
        {
            'tag': 'cf-robot-message',
            'cf-questions': 'Hello!'
        },
        {
            'tag': 'input',
            'type': 'text',
            'name': 'movie',            
            'cf-questions': 'To kick off this conversation, how about a fun question? <strong>What is one of your favorite movies?</strong>'
        },      
        {
            'tag': 'input',
            'type': 'text',
            'name': 'name',
            'cf-questions': 'Now onto business. First, we would like to know just a little about you. <strong>What would be an appropriate name to address you by?</strong>' 
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
          'cf-questions': 'Now in a just a short sentence or two, could you <strong>let us know why you are reaching out today?</strong>'
        },
        {
          'tag': 'input',
          'type': 'email',
          'name': 'email',
          'cf-questions': 'Lastly, <strong>if you would give us your email address</strong> so we could reach back out to you, that would be awesome.'
        }
    ];

    useEffect(() => {

        const processMessages = (details, success, error) =>{

            let content = details.text;
        
            switch(details.tag.name){
        
              case 'movie':
        
                if(content === 'Star Wars' || content === 'The Empire Strikes Back' || content === 'Return of the Jedi'){
                  cf.addRobotChatResponse("What an excellent answer. We're big Star Wars fans ourselves.");
                }else{
                  cf.addRobotChatResponse("Very cool! Film is definitely one of our favorite topics.");
                }
        
                break;
        
              case 'name':
        
                break;
              
              default:
        
                break;
              
            }

            setTimeout(function(){
              console.log('now');
              if(document.getElementsByTagName('input')[0]){
                document.getElementsByTagName('input')[0].focus();
              }
            },3000);

            success();
        
        }

        const submitCallback = () =>{
            const formDataSerialized = cf.getFormData(true);
            console.log("Formdata, obj:", formDataSerialized);
            cf.addRobotChatResponse("Thanks for chatting with us today! You should hear from us soon.");
        
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

        const cf = ConversationalForm.startTheConversation({
            options: {
              submitCallback: submitCallback,
              robotImage: G,
              preventAutoFocus: true,
              preventAutoStart: false,
              userInterfaceOptions: {
                robot: {
                    robotResponseTime: 1000
                }
              },
              animationsEnabled: true,
              flowStepCallback: processMessages
            },
            tags: formFields
        });

        if (chatRef.current) {
            chatRef.current.appendChild(cf.el);
        }

    }, []);

    return (
        <section id="talk" className="talk">
            <div className="container">

                <h2>Want to <strong>talk?</strong></h2>
                <p>We'd be happy to show you how this all works and answer more questions!</p>

                <div ref={chatRef}></div>

            </div>
        </section>
    )
}