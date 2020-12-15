import React from 'react';

import styles from './globalVariables.scss';
import { PrimaryColor, ThemeConfig, ThemeContextType } from './types';

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

const initialState: ThemeContextType = {
  theme: Themes.DARK,
  toggle: () => {},
  isDarkModeActive: true
};

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  initialState
);
