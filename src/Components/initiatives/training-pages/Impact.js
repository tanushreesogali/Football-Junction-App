import React from 'react';

// svgs
import {ReactComponent as Icon1} from "../../icons/training-icons/train-imp1.svg"
import {ReactComponent as Icon2} from "../../icons/training-icons/train-imp2.svg"
import {ReactComponent as Icon3} from "../../icons/training-icons/train-imp3.svg"
import {ReactComponent as Icon4} from "../../icons/training-icons/train-imp4.svg"
import {ReactComponent as Icon5} from "../../icons/training-icons/train-imp5.svg"

const Impact = () => {
  return (
    <div className='in-content-div'>
      {/* Expected Reach Section */}
      <section>
        <div className='in-content-svg'>
        <Icon1/>
        <h2>Expected Reach</h2>
        </div>
        <ul>
          <li>500 Children Trained annually through school partnerships.</li>
          <li>10 Talented Players will receive scholarships and continue their education as football scholars.</li>
          <li>More than 50 Job Opportunities will be created for coaches, trainers, and support staff.</li>
          <li>Community Integration: The program will foster social inclusion by engaging children from diverse socio-economic backgrounds.</li>
        </ul>
      </section>

      {/* Scalability Section */}
      <section>
        <div className='in-content-svg'>
        <Icon2/>
        <h2>Scalability</h2>
        </div>
        <p>
          This program can be easily replicated across different regions in India by
          partnering with more schools and expanding the scouting network. The
          number of participating schools and scholars can be increased each year
          based on the success of the initial phase.
        </p>
      </section>

      {/* Sustainability Section */}
      <section>
        <div className='in-content-svg'>
        <Icon3/>
        <h2>Sustainability</h2>
        </div>
        <p>
          Revenue generated through inter-school tournaments, sponsorships, and
          corporate partnerships will support the ongoing operational costs of the
          training centres and scholarship programs.
        </p>
      </section>

      {/* Monitoring Section */}
      <section>
        <div className='in-content-svg'>
        <Icon4/>
        <h2>Monitoring</h2>
        </div>
        <p>Key Performance Indicators (KPIs):</p>
        <ul>
          <li>Number of children trained in partner schools.</li>
          <li>Number of scholarships awarded.</li>
          <li>Performance of scholars in both academics and football.</li>
          <li>Talent progression into nursery and 5th division clubs.</li>
        </ul>
      </section>

      {/* Evaluation Section */}
      <section>
        <div className='in-content-svg'>
        <Icon5/>
        <h2>Evaluation</h2>
        </div>
        <p>Key Performance Indicators (KPIs):</p>
        <p>
          Regular performance assessments and progress reports will be shared with
          corporate partners, measuring the program's success in talent development
          and educational achievements.
        </p>
      </section>
    </div>
  );
};

export default Impact;