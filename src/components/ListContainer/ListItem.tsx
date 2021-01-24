import React from 'react';

import { Skill } from './types';

const ListItem: React.FunctionComponent<Skill> = ({
  name,
  logo: Logo
}: Skill) => {
  return (
    <div key={name} className="list-item-container">
      <span className="item-element">
        <Logo />
      </span>
      <span className="item-element">{name}</span>
    </div>
  );
};

export default ListItem;
