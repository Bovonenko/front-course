import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { MyButtonWC } from "shared/WC/Button/my-button";

import cls from "./index.module.scss";

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => window.location.reload();

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			{t("Error")}
			<MyButtonWC onClick={reloadPage}>{t("Reload page")}</MyButtonWC>
		</div>
	);
};
