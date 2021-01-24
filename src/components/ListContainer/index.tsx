import './ListContainer.scss';

import React from 'react';

import { ReactComponent as ReactLogo } from '../../assets/javascript (1).svg';
import ListItem from './ListItem';
import { ListConfig } from './types';

type ListContainerProps = {
  listConfig: ListConfig;
};

const ListContainer: React.FunctionComponent<ListContainerProps> = ({
  listConfig
}: ListContainerProps) => {
  const { title, listItems } = listConfig;

  return (
    <div className="container">
      <div className="header">{title}</div>
      <div className="list-items-container">
        {listItems.map(listItem => (
          <ListItem
            name={listItem.name}
            logo={listItem.logo}
            key={listItem.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
