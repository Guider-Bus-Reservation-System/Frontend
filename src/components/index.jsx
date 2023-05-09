import React from "react";

import "./styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
	return (
		<React.Fragment>
			<div className="home">
				<div className="home-header">
					<div className="home-header-image-container">
						<img
							src="homepage.png"
							alt="homepage"
							className="home-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-logo">
							<FontAwesomeIcon icon={faBus} />
						</div>
						<div className="home-header-title">
							Welcome to Guider
						</div>
						<div className="home-header-subtitle">
							Online Advance Bus Seat Reservation
						</div>
					</div>
				</div>

				<div className="home-body">
					<h1>Body</h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Index;
