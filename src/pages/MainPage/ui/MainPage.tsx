import { ThemeContext } from "shared/lib/Theme";
import { useContext } from "react";

import { useTranslation } from "react-i18next";

const MainPage = () => {
	const { t, i18n } = useTranslation();
	const toggle = () => {
		i18n.language === "ru"
			? i18n.changeLanguage("en")
			: i18n.changeLanguage("ru");
	};

	const { theme } = useContext(ThemeContext);
	return <div onClick={toggle}>Main {theme}</div>;
};

export default MainPage;
