import './Home.scss';

import React from 'react';

import { SOCIAL } from './constants';

const Home = () => {
  return (
    <div className="section-inner home">
      <div className="logos-container">
        <hr />
        {SOCIAL.map((item, index) => (
          <span key={index} className="logo">
            {item.logo}
          </span>
        ))}
      </div>
      <div className="name-container">
        <span>Isha Pachkawade</span>
      </div>
      <div className="profile-container">
        <span>Frontend Developer</span>
      </div>
    </div>
  );
};

export default Home;
