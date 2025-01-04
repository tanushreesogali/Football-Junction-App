import React from 'react';
import {ReactComponent as Icon1} from "../../icons/training-icons/train-p1.svg"
import {ReactComponent as Icon2} from "../../icons/training-icons/train-p2.svg"
import {ReactComponent as Icon3} from "../../icons/training-icons/train-p3.svg"

const Partnership = () => {
  return (
    <div className='in-content-div'>
      {/* CSR Goals Section */}
      <section>
        <div className='in-content-svg'>
        <Icon1/>
        <h2>Alignment with CSR Goals</h2>
        </div>
        <p>The Grassroots Football Training Program aligns with CSR priorities of major corporates and organizations:</p>
        <ul>
          <li>Sports Development: Promoting physical fitness and life skills through football training.</li>
          <li>Social Inclusion & Community Development: Uplifting underserved communities and promoting equal opportunities in sports and education.</li>
          <li>Education & Skill Development: Providing educational opportunities through scholarships for talented players.</li>
          <li>Health & Well-Being: Ensuring participants adopt healthy lifestyles through sports and fitness programs.</li>
        </ul>
      </section>

      {/* Corporate Engagement Section */}
      <section>
        <div className='in-content-svg'>
        <Icon2/>
        <h2>Corporate Engagement</h2>
        </div>
        <ul>
          <li>Co-Branding Opportunities: Logo placement on football kits, school facilities, and tournament materials.</li>
          <li>Visibility in Schools: Sponsors' names will be associated with inter-school tournaments, training camps, and media coverage.</li>
          <li>CSR Reports: Detailed impact reports showcasing the educational and social benefits achieved through the program.</li>
        </ul>
      </section>

      {/* Partnership Section */}
      <section>
        <div className='in-content-svg'>
        <Icon3/>
        <h2>Partnership & Collaboration</h2>
        </div>
        <ul>
          <li>Schools: Partnerships with schools for hosting football training programs and admitting football scholars.</li>
          <li>Football Clubs: Collaboration with local and national football clubs to scout and progress talents to higher levels of competition.</li>
          <li>Healthcare Providers: Partnerships for health assessments, injury prevention, and nutrition workshops to ensure the well-being of players.</li>
        </ul>
      </section>
    </div>
  );
};

export default Partnership;