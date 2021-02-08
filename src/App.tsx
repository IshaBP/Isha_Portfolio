import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from './assets/logo_transparent.png';
import Navigation from './components/Navigation';
import { NAV_ITEMS } from './constants';

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation navItems={NAV_ITEMS} />
			</Router>
		</div>
	);
}

export default App;
