import { Link } from "react-router-dom";

import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "@/app/providers/router";

import { classNames } from "@/shared/lib/classNames/classNames";

import "./styles/index.scss";

export const App = () => {
	const { toggleTheme, theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<AppRouter></AppRouter>
		</div>
	);
};
