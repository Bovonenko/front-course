import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import LanguageIcon from "shared/assets/icons/language.svg";

import { MyButtonWC } from "shared/WC/Button/my-button";
import cls from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLanguage = () => {
		i18n.language === "ru"
			? i18n.changeLanguage("en")
			: i18n.changeLanguage("ru");
	};
	return (
		<MyButtonWC
			className={classNames(cls.button, {}, [className])}
			onClick={toggleLanguage}
		>
			<LanguageIcon />
			<span>{i18n.language.toUpperCase()}</span>
		</MyButtonWC>
	);
};
