import React from 'react';

import { Timeline } from '../../components/TimeLine/TimeLine';
import { TIMELINE_DATA } from './constants';

const About = () => {
  return (
    <div className="section-inner">
      <Timeline timelineData={TIMELINE_DATA} />
    </div>
  );
};

export default About;
