import React, { ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './globalStyles';
import { getInitialMode, Themes } from './utils';

const withTheme = (WrappedComponent: ComponentType) => {
	return (props: any) => {
		const [isInDarkMode, setDarkMode] = React.useState(getInitialMode());

		React.useEffect(() => {
			localStorage.setItem("dark", JSON.stringify(isInDarkMode));
		}, [isInDarkMode]);

		const toggleMode = () => {
			setDarkMode((isInDarkMode: boolean) => !isInDarkMode);
		};

		return (
			<ThemeProvider theme={isInDarkMode ? Themes.DARK : Themes.LIGHT}>
				<GlobalStyles />
				<WrappedComponent {...props} toggleMode={toggleMode} />
			</ThemeProvider>
		);
	};
};

export default withTheme;
