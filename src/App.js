import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Timetable from "./pages/timetable";
import Reservations from "./pages/reservations";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/timetable" element={<Timetable />} />
				<Route path="/reservations" element={<Reservations />} />
			</Routes>
		</div>
	);
}

export default App;
