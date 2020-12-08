import React from 'react';

import { ThemeContext, Themes } from './themeContext';

export const ThemeWrapper = (props: { children: React.ReactNode }) => {
  const getInitialMode = () => {
    const getPrefColorScheme = () => {
      if (!window.matchMedia) return;

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const isRepeatUser = "dark" in localStorage;
    const userPrefersDark = getPrefColorScheme();

    if (isRepeatUser) {
      const savedMode = JSON.parse(localStorage.getItem("dark")!); // Since isRepeatUser, dark will always be there. So ! to stop TS from yelling
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((darkMode: boolean) => !darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: darkMode ? Themes.DARK : Themes.LIGHT,
        toggle: toggleDarkMode,
        isDarkModeActivated: darkMode
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
