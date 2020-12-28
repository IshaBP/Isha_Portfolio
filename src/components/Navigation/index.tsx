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
  const MobileMenuIcon = isVisibleMobileMenu ? IoClose : FaBars;
  const modeClass = isDarkModeActive ? "dark" : "light";
  const navOpenClass = isVisibleMobileMenu ? "-expanded" : "";

  const renderNavLinks = () => {
    return (
      <div className={`nav-menu${navOpenClass}`}>
        {navItems.map(item => (
          <div key={item.section} className="nav-link-container">
            <Link
              to={item.path}
              className={`nav-link ${
                item.id === activeMenuItem ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenuItem(item.id);
                setVisibleMobileMenu(!isVisibleMobileMenu);
              }}
            >
              {item.section}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`nav${navOpenClass}`} /* className={`${modeClass}`} */>
      <Link
        to={navItems[0].path}
        className="logo-container"
        onClick={() => {
          setActiveMenuItem(navItems[0].id);
          setVisibleMobileMenu(!isVisibleMobileMenu);
        }}
      >
        IP
      </Link>

      <MobileMenuIcon
        onClick={() => setVisibleMobileMenu(!isVisibleMobileMenu)}
        className="mobile-icon-container"
      />

      {renderNavLinks()}
    </div>
  );
};

export default withRouter(Navigation);
