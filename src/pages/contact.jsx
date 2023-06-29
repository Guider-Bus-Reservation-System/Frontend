import React from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

import "./styles/contact.css";

import ContactPage from "../components/contact/ContactPage";

const Contact = () => {
	return (
		<React.Fragment>
			<div className="contact">
				<div className="contact-header">
					<div className="contact-header-navbar">
						<Navbar />
					</div>

					<div className="contact-header-image-container">
						<img
							src="homepage.png"
							alt="homepage"
							className="contact-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-title">Contact Us</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="contact-body">
					<ContactPage />
				</div>

				<div className="contact-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
