import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	children: ReactNode;
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
	const {
		className,
		children,
		to,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link
			{...otherProps}
			to={to}
			className={classNames(cls.applink, {}, [className, cls[theme]])}
		>
			{children}
		</Link>
	);
};
