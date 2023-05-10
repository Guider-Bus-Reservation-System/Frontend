import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Timetable from "./pages/timetable";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/timetable" element={<Timetable />} />
			</Routes>
		</div>
	);
}

export default App;
