import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { useTheme, Theme } from "shared/lib/Theme";
import { classNames } from "shared/lib/classNames/classNames";
import { MyButtonWC, ThemeButton } from "shared/WC/Button/my-button";

import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();
	return (
		<MyButtonWC
			theme={ThemeButton.CLEAR}
			className={classNames(cls.themeswitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</MyButtonWC>
	);
};
