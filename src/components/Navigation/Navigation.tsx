import './Navigation.scss';

import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ListItem, ListItemText } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import { ThemeContext } from '../../theme/themeContext';
import NavObject from './types';

type NavigationProps = RouteComponentProps & {
  navItems: Array<NavObject>;
  logo?: string;
};

const Navigation: React.FunctionComponent<NavigationProps> = ({
  navItems,
  history,
  logo
}: NavigationProps) => {
  const { theme, toggle, isDarkModeActivated } = React.useContext(ThemeContext);
  console.log(theme.primaryTheme == "BLACK");

  const onSectionClick = (path: string) => {
    history.push(path);
  };

  return (
    <div className="navBar">
      <Drawer
        className="sidebar"
        classes={{ paper: "sidebarPaper" }}
        variant="permanent"
        anchor="right"
      >
        {logo && (
          <List>
            <img src={logo} className="ishaLogo" alt="logo" />
          </List>
        )}
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item.section}>
              <ListItemText
                primary={item.section}
                onClick={() => onSectionClick(item.path)}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(Navigation);
