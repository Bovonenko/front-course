import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return <div>Main Page {theme}</div>;
};

export default MainPage;
