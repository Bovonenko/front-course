import { ThemeContext } from "shared/lib/Theme";
import { useContext } from "react";

import { useTranslation } from "react-i18next";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div>
			Main
			{theme}
		</div>
	);
};

export default MainPage;
