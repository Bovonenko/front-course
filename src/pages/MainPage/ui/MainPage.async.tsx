import { lazy } from "react";

export const MainPageasync = lazy(
	() =>
		new Promise((resolve, reject) => {
			// @ts-ignore
			setTimeout(() => resolve(import("./MainPage")), 200000);
		}),
);
