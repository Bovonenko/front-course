import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MyButtonWC } from "shared/WC/Button/my-button";

// Component for testing
export const BugButton = () => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();

	const onThrowError = () => setError(true);

	useEffect(() => {
		console.log("error effect", error);
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <MyButtonWC onClick={onThrowError}>{t("throw error")}</MyButtonWC>;
};
