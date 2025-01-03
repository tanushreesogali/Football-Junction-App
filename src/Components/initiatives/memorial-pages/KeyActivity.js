import React from 'react';

const KeyActivity = () => {
  return (
    <div className='in-content-div'>
      {/* Activities Section */}
      <section>
        <h2>Activities</h2>
        <ul>
          <li>Thalassemia awareness seminars and screening tests</li>
          <li>Comprehensive health check-ups in partnership with Serum Thalassemia Prevention Federation</li>
          <li>Fitness awareness workshops and mental health consultations</li>
          <li>Anti-doping awareness sessions</li>
          <li>Performances by Thalassemia patients</li>
        </ul>
      </section>

      {/* Participants Section */}
      <section>
        <h2>Participants</h2>
        <ul>
          <li>Young footballers from local clubs and schools</li>
          <li>Students and community members interested in health and fitness</li>
          <li>Thalassemia patients performing to spread awareness</li>
        </ul>
      </section>

      {/* Health Check-ups Section */}
      <section>
        <h2>Health Check-ups</h2>
        <p>
          The event provides a range of diagnostic tests conducted in collaboration
          with the <strong>Serum Thalassemia Prevention Federation</strong>, including:
        </p>
        <ul>
          <li>Thalassemia Screening</li>
          <li>Diabetes Testing</li>
          <li>Anaemia Screening</li>
          <li>Pulmonary Function Test (PFT)</li>
          <li>Bone Mineral Density (BMD) Test</li>
          <li>Electrocardiogram (ECG)</li>
          <li>Blood Pressure Monitoring</li>
        </ul>
      </section>
    </div>
  );
};

export default KeyActivity;