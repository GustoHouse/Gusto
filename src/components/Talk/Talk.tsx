import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'

const ConvoForm = dynamic(() => import('conversational-form'), { ssr: false });

const formFields = [
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

export default function Talk() {
    useEffect(() => {

        const cf = ConvoForm.startTheConversation({
            options: {
              submitCallback: submitCallback,
              preventAutoFocus: false,
              preventAutoStart: true,
              userInterfaceOptions: {
                robot: {
                    robotResponseTime: 1000
                }
              },
              animationsEnabled: true
            },
            tags: formFields
        });
      
    }, []);

    const submitCallback = () => {
        console.log('callback');
    }

    return (
        <section id="talk" className="talk">
            <div className="container">

                <h2>Want to <strong>chat?</strong></h2>
                <p>We'd be happy to show you how this all works and answer more questions!</p>

                

            </div>
        </section>
    )
}