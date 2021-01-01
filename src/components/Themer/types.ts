export type Themes = "DARK" | "LIGHT";
export type PrimaryColor = "BLACK" | "WHITE";
export type SecondaryColor = "PINK" | "GREEN";

type ThemeParams = {
  primaryTheme: PrimaryColor;
  secondaryTheme: SecondaryColor;
};

export type ThemeConfig = {
  [key in Themes]: ThemeParams;
};

export type ThemeContextType = {
  theme: ThemeParams;
  toggle: () => void;
  isDarkModeActive: boolean;
};
