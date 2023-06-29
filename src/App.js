import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Timetable from "./pages/timetable";
import Reservations from "./pages/reservations";
import News from "./pages/news";
import AddBus from "./components/timetable/addBus";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/timetable" element={<Timetable />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/news" element={<News />} />
				<Route path="/addbus" element={<AddBus />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
