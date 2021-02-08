export type Themes = "DARK" | "LIGHT";

type ThemeParams = {
	primary: string;
	secondary: string;
	black: string;
	lightBlack: string;
	green: string;
	white: string;
};

export type ThemeConfig = {
	[key in Themes]: ThemeParams;
};
