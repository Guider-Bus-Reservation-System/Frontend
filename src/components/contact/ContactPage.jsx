import React from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
	return (
		<React.Fragment>
			<div className="contact-container">
				<div className="contact-container-left">
					<div className="contact-container-left-header">
						<h2>Get in touch</h2>
					</div>
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
								<input
									type="email"
									rows="10"
									placeholder="Your Email"
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-25">
								<label for="message">Message: </label>
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
				<div className="contact-container-right">
					<div className="contact-container-right-header">
						<h2>Contact us</h2>
					</div>
					<ul class="contact-list">
						<li class="list-item">
							<i class="fa fa-map-marker fa-2x">
								<span class="contact-text place">
									No 123, Colombo 7, Sri Lanka
								</span>
							</i>
						</li>

						<li class="list-item">
							<i class="fa fa-phone fa-2x">
								<span class="contact-text phone">
									<a
										href="tel:1-212-555-5555"
										title="Give me a call"
									>
										(+94) 555-2368
									</a>
								</span>
							</i>
						</li>

						<li class="list-item">
							<i class="fa fa-envelope fa-2x">
								<span class="contact-text gmail">
									<a href="mailto:#" title="Send me an email">
										guider@gmail.com
									</a>
								</span>
							</i>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ContactPage;
