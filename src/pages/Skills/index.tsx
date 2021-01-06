import React from 'react';

import ListContainer from '../../components/ListContainer';
import SKILLS_GROUPS from './constants';

const Skills = () => {
  return (
    <div className="section-inner skills">
      {SKILLS_GROUPS.map(skillsGroup => (
        <ListContainer listConfig={skillsGroup} />
      ))}
    </div>
  );
};

export default Skills;
