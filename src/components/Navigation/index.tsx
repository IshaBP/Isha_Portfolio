import './Navigation.scss';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
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
  const [activeMenuItem, setActiveMenuItem] = useState(navItems[0].id);
  const [isVisibleMobileMenu, setVisibleMobileMenu] = useState(false);
  let modeClass = isDarkModeActive ? "dark" : "light";

  return (
    // <div className={`${modeClass}`}>
    <div className="nav">
      <Link to="/" className="logoContainer">
        IP
      </Link>

      {isVisibleMobileMenu ? (
        <div className="mobileIconContainer">
          <IoClose onClick={() => setVisibleMobileMenu(false)} />
        </div>
      ) : (
        <div className="mobileIconContainer">
          <FaBars onClick={() => setVisibleMobileMenu(true)} />
        </div>
      )}

      <div className={"navMenu"}>
        {navItems.map((item, index) => (
          <div key={item.section}>
            <Link
              to={item.path}
              className={`navLink ${
                item.id === activeMenuItem ? "active" : ""
              }`}
              onClick={() => setActiveMenuItem(item.id)}
            >
              {item.section}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
