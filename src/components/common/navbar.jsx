import React from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar-links">
					<div className="navbar-links-item">
						<Link to="/" className="active">
							Home
						</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/timetable">Timetable</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/reservations">Reservations</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/news">News</Link>
					</div>
					<div className="navbar-links-item">
						<Link to="/contact">Contact Us</Link>
					</div>
					<div
						className="navbar-links-item"
						style={{ float: "left" }}
					>
						<Link to="/about">About</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
