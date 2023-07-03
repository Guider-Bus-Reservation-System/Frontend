import React from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
	return (
		<div className="contact-container">
			<h2>Contact Us</h2>
			<form className="contact-form">
				<div className="row">
					<div className="col-25">
						<label for="name">Name : </label>
					</div>
					<div className="col-75">
						<input type="text" placeholder="Your Name" />
					</div>
				</div>

				<div className="row">
					<div className="col-25">
						<label for="email">Email : </label>
					</div>
					<div className="col-75">
						<input type="email" placeholder="Your Email" />
					</div>
				</div>

				<div className="row">
					<div className="col-25">
						<label for="message">Message : </label>
					</div>
					<div className="col-75">
						<textarea placeholder="Your Message"></textarea>
					</div>
				</div>

				<div className="row">
					<button type="submit">Send Message</button>
				</div>
			</form>
		</div>
	);
};

export default ContactPage;
