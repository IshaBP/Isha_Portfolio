import './Navigation.scss';

import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

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
  const { isDarkModeActive } = React.useContext(ThemeContext);
  let modeClass = isDarkModeActive ? "dark" : "light";

  return (
    <div className={`nav ${modeClass}`}>
      <ul className="menu">
        <Link to="/" className="ishaLogo">
          IP
        </Link>
        {navItems.map((item, index) => (
          <li className="menuItem" key={item.section}>
            <Link to={item.path} className="linkText">
              {item.section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Navigation);
