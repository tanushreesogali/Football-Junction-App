import React from 'react';
import "../InitiativesCards.css";


const Overview = () => {
  return (
    <div className='in-content-div'>
      {/* Overview Section */}
      <section>
        <p className='initiative-para'>
          The Grassroots Football Training Program integrates football training with
          education by partnering with schools across India. The program targets to
          increase participation in football and provide state-of-art training facility in
          partner schools. The initiative also focuses on talent scouting, where
          exceptional players are offered full scholarships to study and train at selected
          partner schools. The ultimate goal is to create a nurturing environment where
          students can excel in sports and academics, fostering future leaders and
          professional footballers.
        </p>
      </section>

      {/* Objectives Section */}
      <section>
        <h2>Objectives</h2>
        <ul>
          <li>
            Football Talent Development: Identify and nurture football talent through
            structured training programs at schools.
          </li>
          
          <li>
            Education and Scholarships: Provide academic scholarships to talented
            footballers, ensuring a balanced development of both educational and
            sports skills.
          </li>
          
          <li>
            Pathway to Professional Football: Offer top players opportunities to join
            our nursery and 5th division football clubs, creating a pathway to
            professional football.
          </li>
          
          <li>
            Community Upliftment: Use football as a tool to promote social inclusion,
            education, and health among underprivileged children.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Overview;