import React, { useMemo } from 'react';

import { ThemeContext } from './themeContext';
import { getInitialMode, Themes } from './utils';

export const ThemeWrapper = (props: { children: React.ReactNode }) => {
  const [isInDarkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isInDarkMode));
  }, [isInDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((isInDarkMode: boolean) => !isInDarkMode);
  };

  const values = useMemo(
    () => ({
      theme: isInDarkMode ? Themes.DARK : Themes.LIGHT,
      toggle: toggleDarkMode,
      isDarkModeActive: isInDarkMode
    }),
    [isInDarkMode]
  );

  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
};
