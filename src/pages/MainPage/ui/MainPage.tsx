import { ThemeContext } from "shared/lib/Theme";
import { useContext } from "react";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return <div>{theme}</div>;
};

export default MainPage;
