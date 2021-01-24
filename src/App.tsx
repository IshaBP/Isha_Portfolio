import './App.scss';

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import logo from './assets/logo_transparent.png';
import Navigation from './components/Navigation';
// import Themer from './components/Themer';
import { ThemeContext } from './components/Themer/themeContext';
import { NAV_ITEMS } from './constants';

const App = (): JSX.Element => {
  const { isDarkModeActive } = React.useContext(ThemeContext);
  const modeClass = isDarkModeActive ? "dark" : "light";

  return (
    <BrowserRouter>
      <Navigation navItems={NAV_ITEMS} logo={logo} />
      <div className={`section ${modeClass}`}>
        {/* <Themer /> */}
        <Switch>
          {NAV_ITEMS.map(item => (
            <Route
              exact
              path={item.path}
              component={item.component}
              key={`${item.path}_${item.component}`}
            />
          ))}
          <Redirect to="/404" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
