import { ThemeConfig } from './types';

export const Themes: ThemeConfig = {
  DARK: {
    primaryTheme: "BLACK",
    secondaryTheme: "PINK"
  },
  LIGHT: {
    primaryTheme: "WHITE",
    secondaryTheme: "PINK"
  }
};

export const getInitialMode = () => {
  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const isRepeatUser = "dark" in localStorage;
  const userPrefersDark = getPrefColorScheme();

  if (isRepeatUser) {
    const savedMode = JSON.parse(localStorage.getItem("dark")!); // Since isRepeatUser, dark will always be there. So ! to remove TS error.
    return savedMode;
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
};
