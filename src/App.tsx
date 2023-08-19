import { AboutPageasync } from "./pages/AboutPage/AboutPage.async";
import { MainPageasync } from "./pages/MainPage/MainPage.async";

import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>toggle</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPageasync />} />
					<Route path="/" element={<MainPageasync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
