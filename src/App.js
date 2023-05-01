import { Routes, Route } from "react-router-dom";

import Index from "./components/index";
import Home from "./components/home";
import Login from "./components/login";
import Reservations from "./components/reservations";
import BusManagment from "./components/busManagment";
import Contact from "./components/contact";
import About from "./components/about";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/managment" element={<BusManagment />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
