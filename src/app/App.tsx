import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "@/app/providers/router";

import { Navbar } from "@/widgets/Navbar";

import { classNames } from "@/shared/lib/classNames/classNames";
import "./styles/index.scss";

export const App = () => {
	const { toggleTheme, theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<button onClick={toggleTheme}>toggle</button>

			<AppRouter />
		</div>
	);
};
