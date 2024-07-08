import { ThemeContext } from "shared/lib/Theme";
import { useContext } from "react";
import { BugButton } from "app/providers/ErrorBoundary";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div>
			{theme} <BugButton />
		</div>
	);
};

export default MainPage;
