import React from 'react';

const Overview = () => {
  return (
    <div className='in-content-div'>
      {/* Event Description Section */}
      <section>
        <p className='initiative-para'>
          This event honours the memory of the late Debasis Bhattacharya, an eminent
          journalist, and social worker, on the first anniversary of his demise. Organized
          in collaboration with the Debasis Bhattacharya Smriti Rakshya Committee,
          Avenue Sammilani, and Football Junction Foundation, the initiative is
          dedicated to promoting the well-being of young footballers and students
          through health awareness, Thalassemia education, and comprehensive
          medical support.
        </p>
      </section>

      {/* Guest List Section */}
      <section>
        <h2>Guest List</h2>
        <ul>
          <li>Shyam Thapa</li>
          <li>Soumitra Chakraborty</li>
          <li>Arnab Mondal</li>
          <li>Sanjib Acharya</li>
          <li>Ardhendu Dutta</li>
          <li>Samik Bhattacharya</li>
          <li>Radhakanto Mukherjee</li>
          <li>Suman Bhattacharya</li>
          <li>Samir Paul Choudhury</li>
        </ul>
      </section>
    </div>
  );
};

export default Overview;