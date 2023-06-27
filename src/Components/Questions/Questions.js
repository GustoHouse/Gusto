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
                        answer="Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them."
                    />

                    <FrequentQuestion
                        question="How many requests can I have in the queue?"
                        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                            
                    <FrequentQuestion
                      question="How do I submit requests?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
            
                    <FrequentQuestion
                      question="How quickly will my projects get done?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />

                    <FrequentQuestion
                      question="Who will actually be working on my design and development work?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />

                    <FrequentQuestion
                      question="What if I'm not quite happy with the end result?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />

                    <FrequentQuestion
                      question="Are there refunds?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />

                </div>

            </div>
        </section>
    )
}
  