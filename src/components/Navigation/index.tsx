import './Navigation.scss';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { ThemeContext } from '../Themer/themeContext';
import NavObject from './types';

type NavigationProps = RouteComponentProps & {
  navItems: Array<NavObject>;
  logo?: string;
};

const Navigation: React.FunctionComponent<NavigationProps> = ({
  navItems
}: NavigationProps) => {
  const { isDarkModeActive } = React.useContext(ThemeContext);

  const [activeMenuItem, setActiveMenuItem] = useState(navItems[0].id);
  const [isVisibleMobileMenu, setVisibleMobileMenu] = useState(false);

  const modeClass = isDarkModeActive ? "dark" : "light";
  const MobileMenuIcon = isVisibleMobileMenu ? IoClose : FaBars;

  const renderIPLogo = () => {
    return (
      <Link
        className="logo-container"
        to={navItems[0].path}
        onClick={() => {
          setActiveMenuItem(navItems[0].id);
          setVisibleMobileMenu(false);
        }}
      >
        IP
      </Link>
    );
  };

  const renderMobileMenuIcon = () => {
    return (
      <MobileMenuIcon
        onClick={() => setVisibleMobileMenu(!isVisibleMobileMenu)}
        className="mobile-menu"
      />
    );
  };

  const renderNavLinks = () => {
    return (
      <div
        className={`nav-menu ${modeClass} ${
          !isVisibleMobileMenu ? "hide-menu" : ""
        }`}
      >
        {navItems.map(item => (
          <div key={item.section} className="nav-link-container">
            <Link
              to={item.path}
              className={`nav-link ${
                item.id === activeMenuItem ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenuItem(item.id);
                setVisibleMobileMenu(false);
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
    <div className={`${modeClass} nav-container`}>
      {renderIPLogo()}
      {renderMobileMenuIcon()}
      {renderNavLinks()}
    </div>
  );
};

export default withRouter(Navigation);
