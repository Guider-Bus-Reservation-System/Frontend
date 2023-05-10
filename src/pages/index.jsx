import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/common/navbar";
import Search from "../components/index/search";

import "./styles/index.css";

const Index = () => {
	return (
		<React.Fragment>
			<div className="home">
				<div className="home-header">
					<div className="home-header-navbar">
						<Navbar />
					</div>

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
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
						<div className="home-header-button">
							<button>Book your seat</button>
						</div>
					</div>
				</div>

				<div className="home-search-container">
					<div className="home-body-search">
						<Search />
					</div>
				</div>

				<div className="home-body"></div>
			</div>
		</React.Fragment>
	);
};

export default Index;
