import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DefaultPage from "./Pages/DefaultPage/DefaultPage";

const App = () => {
	return (
		<div>
			<Router>				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/*" element={<DefaultPage />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
