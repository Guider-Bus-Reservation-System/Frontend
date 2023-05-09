import React from "react";

import "./styles/navbar.css";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar-links">
					<div className="navbar-links-item">Home</div>
					<div className="navbar-links-item">Timetable</div>
					<div className="navbar-links-item">Reservations</div>
					<div className="navbar-links-item">News</div>
					<div className="navbar-links-item">Contact Us</div>
					<div className="navbar-links-item">About</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
