import React from 'react';

import ListConfig from './types';

type ListContainerProps = {
  listConfig: ListConfig;
};

const ListContainer: React.FunctionComponent<ListContainerProps> = ({
  listConfig
}: ListContainerProps) => {
  const { title, skills } = listConfig;

  return (
    <div className="container">
      <div className="header">{title}</div>
      {skills.map(skill => (
        <div>{skill.name}</div>
      ))}
    </div>
  );
};

export default ListContainer;
