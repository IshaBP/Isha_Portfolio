import React from 'react';

import { ThemeContextType } from './types';
import { Themes } from './utils';

const initialState: ThemeContextType = {
  theme: Themes.DARK,
  toggle: () => {},
  isDarkModeActive: true
};

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  initialState
);
