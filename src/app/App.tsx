import { Suspense, useEffect } from "react";
import { useTheme } from "shared/lib/Theme";
import { AppRouter } from "app/providers/router";

import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";

import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

export const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="app-content">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
