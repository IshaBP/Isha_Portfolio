import './Home.scss';

import React from 'react';

import { SOCIAL } from './constants';

const Home = () => {
  return (
    <div className="section-inner home">
      <div className="logosContainer">
        <hr />
        {SOCIAL.map((item, index) => (
          <span key={index} className="logo">
            {item.logo}
          </span>
        ))}
      </div>
      <div className="nameContainer">
        <span>Isha Pachkawade</span>
      </div>
      <div className="profileContainer">
        <span>Frontend Developer</span>
      </div>
    </div>
  );
};

export default Home;
