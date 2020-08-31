import React, { Component } from 'react';
import Testimony from './testimony';
import './testimonials.scss';

const gainesway = {
  text: [
    "Ty and Carl distilled everything we wanted to achieve with our website redesign into a clear vision and plan.",
    "They considered the nuances of our unique business and built creative, elegant solutions that improved how our clients experience and interact with the site.",
    "The analytics tell us the new site is a huge success, and the compliments keep rolling in from inside and outside our industry."
  ],
  name: "Ian Tapp",
  business: "Gainesway Farms",
  color: "#FF0255"
};

const healthcarousel = {
  text: [
    "We’ve been working with Ty & Carl at Gusto for over two years. In that time, they have become like an extension of our in-house marketing team.",
    "They have helped us reduce redundancies in our web development architecture, which helped us save money on extensions we had used on our sites in the past.",
    "When we need something done, they are always quick to help and can adapt to any project. They go above and beyond to find solutions to our problems, and are always happy to share how they got to their solution so that we can be better educated as a team going forward.",
    "Their help has been invaluable over the years and I would not hesitate to recommend them to others!"
  ],
  name: "Kelly Beckstedt",
  business: "Health Carousel",
  color: "#FBEA40"
};

const orr = {
  text: [
    "I found Carl and Ty easy to work with and appreciated the way the business relationship felt like a partnership geared towards win/win solutions.",
    "They provided high quality work at a fair price (and the end result was a big hit with our customers and internal stakeholders)."
  ],
  name: "Phil Aldridge",
  business: "ORR Safety",
  color: "#2DDAD3"
};

const zimmer = {
  text: [
    "Tyler and Carl are the unicorns of developers combining a cornucopia of highly sought-after qualities and skills including but not limited to: exceptional creativity, the utmost professionalism, exemplary communication, and thoughtful guidance.",
    "Whatever wild idea we threw at them they took to heart, digested and figured out a crazy cool way to implement into the project.",
    "Not only were they a delight to work alongside, we felt we had found true collaborators who were game to push the boundaries of what was possible all the while shepherding our project to completion with our highest satisfaction in mind.",
    "We would jump at the chance for future collaborations."
  ],
  name: "Jim and Jess Zimmer",
  business: "Zimmer Design",
  color: "#FF0255"
}

class Testimonials extends Component {
  render() {
    return (
      <section className="testimonials">

        <div className="container">

          <h2 id="testimonials-header">
              <span>Let Others</span>
              <strong>Tell You</strong>
          </h2>

          <div className="testimonies">

            <Testimony content={gainesway} />

            <Testimony content={orr} />

            <Testimony content={healthcarousel} />
            
            <Testimony content={zimmer} />
            
          </div>
          
        </div>

      </section>
    );
  }
}
  
export default Testimonials;