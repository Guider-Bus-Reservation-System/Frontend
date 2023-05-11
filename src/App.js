import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Timetable from "./pages/timetable";
import Reservations from "./pages/reservations";
import News from "./pages/news";
import AddBus from "./components/timetable/addBus";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/timetable" element={<Timetable />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/news" element={<News />} />
				<Route path="/addbus" element={<AddBus />} />
			</Routes>
		</div>
	);
}

export default App;
