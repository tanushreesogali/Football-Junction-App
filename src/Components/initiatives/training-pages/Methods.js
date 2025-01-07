import React from 'react';
import {ReactComponent as Icon1} from "../../icons/training-icons/training-method-1.svg"
import {ReactComponent as Icon2} from "../../icons/training-icons/training-method-2.svg"
import {ReactComponent as Icon3} from "../../icons/training-icons/training-method-3.svg"
import {ReactComponent as Icon4} from "../../icons/training-icons/training-method-4.svg"
import {ReactComponent as Icon5} from "../../icons/training-icons/training-method-5.svg"


const Methods = () => {
  return (
    <div className='in-content-div'>
      {/* Training Structure Section */}
      <section>
        <div className='in-content-svg'>
        <Icon1/>
        <h2>Training Structure</h2>
        </div>
        <ul>
          <li>Partner Schools: Collaboration with schools to host football training programs for students.</li>
          <li>Training Sessions: Conduct football training before and after school hours. Focus on technical skills, physical fitness, teamwork, and discipline.</li>
          <li>Age Groups: The program will cater to different age groups, typically divided into three categories: 6-8 years, 9-11 years, 12-14 years and 15-17 years.</li>
        </ul>
      </section>

      {/* Talent Scouting Section */}
      <section>
        <div className='in-content-svg'>
        <Icon2/>
        <h2>Talent Scouting</h2>
        </div>
        <ul>
          <li>Scouting Process: Identify top-performing students during school-based training sessions. Scouts will attend sessions and evaluate players' performance.</li>
        </ul>
      </section>

      {/* Scholarship Section */}
      <section>
        <div className='in-content-svg'>
        <Icon3/>
        <h2>Scholarship</h2>
        </div>
        <ul>
          <li>Scholarship Program: Offer football scholarships to exceptional talents. Scholarships will cover school fees, accommodation in the school hostel, and sports-related expenses.</li>
          <li>Football Scholars: Talented footballers will train as "football scholars" within the school system, living in hostels and receiving both academic and sports education.</li>
        </ul>
      </section>

      {/* Competitive Exposure Section */}
      <section>
        <div className='in-content-svg'>
        <Icon4/>
        <h2>Competitive Exposure:</h2>
        </div>
        <ul>
          <li>Inter-School Tournaments: Organize inter-school football tournaments to provide competitive exposure and further scouting opportunities.</li>
          <li>Nursery and 5th Division Clubs: Talented players identified through camps and tournaments will be promoted to nursery and 5th division football clubs, giving them access to higher-level competition.</li>
        </ul>
      </section>

      {/* Educational Integration Section */}
      <section>
        <div className='in-content-svg'>
        <Icon5/>
        <h2>Educational Integration:</h2>
        
        </div>
        <ul>
          <li>Football Curriculum: Develop a specialized curriculum integrating football training with academic subjects, life skills, health education, and leadership development.</li>
          <li>Academic Support: All Footballers will receive academic tutoring, ensuring they excel both in football studies.</li>
        </ul>
      </section>
    </div>
  );
};

export default Methods;