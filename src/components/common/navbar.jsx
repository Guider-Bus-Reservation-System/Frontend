import React from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar-links">
					<div className="navbar-links-item">
						<Link to="/">Home</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/timetable">Timetable</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/reservations">Reservations</Link>
					</div>
					<div className="navbar-links-item">News</div>
					<div className="navbar-links-item">Contact Us</div>
					<div className="navbar-links-item">About</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
