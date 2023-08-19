import { createContext } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export interface ThemeContexetProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContexetProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
