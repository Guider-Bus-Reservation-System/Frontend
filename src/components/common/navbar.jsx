import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar-links">


					 {/*navigation bar item 6*/}
					 <div className="navbar-links-item">
						<Link to="/contact">Contact Us</Link>
					</div>
					
					{/*navigation bar item 5*/}
					<div className="navbar-links-item">
						<Link to="/about">About</Link>				
					</div>
					
					{/*navigation bar item 4*/}
					<div className="navbar-links-item">
						<Link to="/timetable">Timetable</Link>
					</div>
					{/*navigation bar item 3*/}
					<div className="navbar-links-item">
						<Link to="/news">News</Link>
					</div>
					{/*navigation bar item 2*/}
					<div className="navbar-links-item">
						<Link to="/reservations">Reservations</Link>
					</div>
					
					{/*navigation bar item 1*/}
					<div className="navbar-links-item">
						<Link to="/" className="active">Home</Link>
					</div>
					<div>
						{/*navigation bar item 6*/}
						<div className="navbar-links-logo" style={{ color: 'white' }}>							<FontAwesomeIcon icon={faBus} />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
