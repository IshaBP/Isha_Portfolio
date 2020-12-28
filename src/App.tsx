import './App.scss';

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import logo from './assets/logo_transparent.png';
import Navigation from './components/Navigation';
import Themer from './components/Themer';
import { NAV_ITEMS } from './constants';
import { ThemeContext } from './theme/themeContext';

const App = (): JSX.Element => {
  const { theme, toggle, isDarkModeActive } = React.useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div
        className={
          theme.primaryTheme == "BLACK" ? "dark-primary" : "light-primary"
        }
      >
        <Navigation navItems={NAV_ITEMS} logo={logo} />
        {/* <Themer /> */}
        <div className="section">
          <Switch>
            {NAV_ITEMS.map((item, index) => (
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
      </div>
    </BrowserRouter>
  );
};

export default App;
