import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					to="/"
					className={cls.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					{t("main")}
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
					{t("about")}
				</AppLink>
			</div>
		</div>
	);
};
