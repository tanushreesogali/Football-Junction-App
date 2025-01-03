import React from 'react';

const Itinerary = () => {
  return (
    <div className='in-content-div'>
      {/* Morning Remembrance Session */}
      <section>
        <div className='mem-it-subtitle'>
        <p>9:00 AM – 10:30 AM</p>
        <p>Session: Remembrance of Late Debasis Bhattacharya Speakers:</p>
        </div>
        <ul>
          <li>Samik Bhattacharya, MP (Rajya Sabha)</li>
          <li>Radhakanto Mukherjee, Former Chief Public Prosecutor</li>
          <li>Suman Bhattacharya, Eminent Journalist</li>
          <li>Samir Paul Choudhury, Industrialist and Philanthropist</li>
        </ul>
      </section>

      {/* Football Legends Session */}
      <section>
        <div className='mem-it-subtitle'>
        <p>10:30 AM – 12:00 Noon</p>
        <p>Session: Football Legends' Talk: Training, Health, and Discipline for Young Footballers Speakers:</p>
        </div>
        <ul>
          <li>Shyam Thapa, former footballer</li>
          <li>Soumitra Chakraborty, former footballer</li>
          <li>Arnab Mondal, former footballer</li>
          <li>Ardhendu Dutta, former footballer</li>
        </ul>
      </section>

      {/* Lunch Break */}
      <section>
        <div className='mem-it-subtitle'>
        <p>12:00 PM – 1:00 PM: Lunch Break</p>
        </div>
      </section>

      {/* Thalassemia Awareness Session */}
      <section>
        <div className='mem-it-subtitle'>
        <p>1:00 PM – 2:00 PM</p>
        <p>Session: Thalassemia Awareness Seminar</p>
        </div>
        <p>In association with: Serum Thalassemia Prevention Federation</p>
        <p>Speaker: Sanjib Acharya, Chairman, Serum Thalassemia Prevention Federation</p>
      </section>

      {/* Performance Session */}
      <section>
        <div className='mem-it-subtitle'>
        <p>2:00 PM – 3:30 PM</p>
        <p>Session: Performance by Thalassemia Patients</p>
        </div>
      </section>
    </div>
  );
};

export default Itinerary;