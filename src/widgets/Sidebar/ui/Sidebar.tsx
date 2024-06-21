import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import CaretLeft from "shared/assets/icons/caret-left.svg";
import CaretRight from "shared/assets/icons/caret-right.svg";

import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button className={cls.sidebarButton} onClick={onToggle}>
				{collapsed ? (
					<CaretRight className={cls.sidebarIcon} />
				) : (
					<CaretLeft className={cls.sidebarIcon} />
				)}
			</button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
