import { ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useContext } from "react";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return <div>Main Page {theme}</div>;
};

export default MainPage;
