import React from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
	return (
		<div className="contact-container">
			<h2>Contact Us</h2>
			<form>
				<label for="name">Name : </label>
				<input type="text" placeholder="Your Name" />

				<label for="email">Email : </label>
				<input type="email" placeholder="Your Email" />

				<label for="message">Message : </label>
				<textarea placeholder="Your Message"></textarea>

				<button type="submit">Send Message</button>
			</form>
		</div>
	);
};

export default ContactPage;
