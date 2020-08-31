import React, { Component } from 'react';
import Job from './job';
import Gainesway from '../../Assets/Images/gainesway.jpg';
import Cognision from '../../Assets/Images/cognision.png';
import MatchSeries from '../../Assets/Images/matchseries.png';
import Setzer from '../../Assets/Images/setzer.png';
import Zimmer from '../../Assets/Images/zimmer.gif';
import Holiday from '../../Assets/Images/holiday.png';
import Beyond from '../../Assets/Images/beyond.png';
import './work.scss';

class Work extends Component {
  render() {
      return (
        <section className="work">
          <div className="container">
            <h2 id="work-header">
                <span>View Our</span>
                <strong>Work</strong>
            </h2>

            <div className="jobs">
              <Job name="Gainesway" image={Gainesway} url="https://www.gainesway.com" />
              <Job name="Cognision" image={Cognision} url="https://www.cognision.com" />
              <Job name="Match Series" image={MatchSeries} url="http://www.matchseries.com" />
              <Job name="Setzer" image={Setzer} url="http://setzerproperties.com/" />
              <Job name="Zimmer Design" image={Zimmer} url="https://zimmer-design.com/" />
              <Job name="Holiday Inn" image={Holiday} url="http://hihurstbourne.com/" />
              <Job name="Beyond The Wire" image={Beyond} url="http://www.beyondthewire.org/" />
            </div>
          </div>
        </section>
      );
    }
  }
  
  export default Work;