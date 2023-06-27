import { useState } from 'react';

import './Questions.scss';

const FrequentQuestion = ({ question, answer }) => {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleClick = () => {
      setIsSelected(!isSelected);
    };
  
    return (
      <div
        className={`faq ${isSelected ? 'open' : ''}`}
        onClick={handleClick}
      >
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    );
};

export default function Questions() {
    return (
        <section id="questions" className="questions">
            <div className="container">

                <h2>Still have questions?<br />We have <strong>answers.</strong></h2>
                <p>There's plenty of nuance that helps make our process successful.</p>

                <div className="faqs">
                    
                    <FrequentQuestion
                        question="Couldn't I just hire a full-time designer and developer?"
                        answer="Great question! To begin with, the price tag for hiring a single senior-level designer or developer on a full-time basis now surpasses $100,000 per year, not to mention the additional costs of benefits (and good luck finding an available one). Moreover, there may be occasions when you don't have a constant stream of work to keep them occupied, meaning you would end up paying for their idle time. On the other hand, with the monthly plan, you have the flexibility to pause and resume your subscription as frequently as necessary, ensuring that you only pay for your designer's services when you actually have work for them."
                    />

                    <FrequentQuestion
                        question="How many requests can I have in the queue?"
                        answer="The limit does not exist! Keep piling them into the queue and we'll take care of them in the order you prioritize them."
                    />
                            
                    <FrequentQuestion
                      question="How do I submit requests?"
                      answer="Once you've signed up, you'll quickly get an invite to our simple project managment system. Once you're in, you'll be able to add tasks into our queue. You can also check progress, leave comments, and reprioritize on the fly. But don't worry you don't have to stay constantly logged in to keep up to date. You'll get notifications every time we leave updates on the requests. If you'd like a demo of this process, please contact us and we'd be happy to set one up for you."
                    />
            
                    <FrequentQuestion
                      question="How quickly will my projects get done?"
                      answer="This varies significantly depending on the size of the request. One of the first things we'll do when you submit a larger request is break down the project into the individual tasks necessary to complete it. These tasks will typically take 3-5 days to complete and you will never go a week without a progress update as long as there is an active item in the queue."
                    />

                    <FrequentQuestion
                      question="Who will actually be working on my design and development requests?"
                      answer="Just us! We are Carl Michel and Ty Goss, the two founders of Gusto Creative House and the two design and development experts who will be working with you. Nice to meet you!"
                    />

                    <FrequentQuestion
                      question="What if I'm not quite happy with the end result?"
                      answer="The beautiful thing about this process is it's only the end result when you say it's the end result. So we'll keep at it - keep iterating and collaborating with you for as long as you'd like. Once you're happy with the state it's in, we'll move on to the next request in the queue."
                    />

                    <FrequentQuestion
                      question="Are there refunds?"
                      answer="Due to the effort involved, level of experience, and quality of output, we do not offere refunds. With the monthly plan however you may pause, cancel, and renew at any time."
                    />

                </div>

            </div>
        </section>
    )
}
  