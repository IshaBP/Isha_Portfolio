import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import ThemeChanger from './components/ThemeChanger';
import withTheme from './components/withTheme';
import { NAV_ITEMS } from './constants/NavItems';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Navigation navItems={NAV_ITEMS} />
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
		</BrowserRouter>
	);
};

export default withTheme(App);
