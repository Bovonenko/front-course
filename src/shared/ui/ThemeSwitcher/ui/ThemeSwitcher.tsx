import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { useTheme, Theme } from "shared/lib/Theme";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();
	return (
		<Button
			className={classNames(cls.themeswitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};
