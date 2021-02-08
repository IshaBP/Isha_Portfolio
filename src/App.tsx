import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import ThemeChanger from './components/ThemeChanger';
import withTheme from './components/withTheme';
import { NAV_ITEMS } from './constants';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Navigation navItems={NAV_ITEMS} />
			<div className="section">
				<ThemeChanger />
				<Switch>
					{NAV_ITEMS.map((item) => (
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

export default withTheme(App);
