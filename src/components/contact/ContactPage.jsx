import emailjs from 'emailjs-com';
import React, { useState } from "react";
import "./styles/ContactPage.css";


const ContactPage = () => {

    const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	  });


	  const [isSubmitted, setIsSubmitted] = useState(false);

	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	  };

	  const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			// Check if any of the form fields are empty
			alert("Please fill in all the required fields.");
			return;
		  }
		  

		emailjs
		.sendForm("service_v3f6c06", "template_41j8hbp", e.target, "Diz7XUJ-OACx-nPG_")
		.then((res) => {
		  console.log(res);
		  setFormData({ name: "", email: "", message: "" }); // Clear form fields after successful submission
		  setIsSubmitted(true);
		  setTimeout(() => {
		  setIsSubmitted(false);
				}, 3000);
			})
			.catch((err) => console.log(err));
		
      };


	return (
		<React.Fragment>
			<div className="contact-container">
				<div className="contact-container-left">
					<div className="contact-container-left-header">
						<h2>Get in touch</h2>
					</div>
					<form className="contact-form" onSubmit= {handleSubmit}>
						<div className="row">
							<div className="col-25">
								<label for="name">Name: </label>
							</div>
							<div className="col-75">
							<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-25">
								<label for="email">Email: </label>
							</div>
							<div className="col-75">
								<input
									type="email"
									rows="10"
									name="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-25">
								<label for="message">Message: </label>
							</div>
							<div className="col-75">
							<textarea
									name="message"
									placeholder="Your Message"
									value={formData.message}
									onChange={handleChange}
                             ></textarea>

							</div>
						</div>

						<div className="row">
							<button type="submit">Send Message</button>
						</div>
					</form>
                        
					{isSubmitted && (
                         <div className="success-message">
                                    Message was successfully sent!

			       	</div>
					
					)}
				  </div>
               
			   
				 
				

				<div className="contact-container-right">
					<div className="contact-container-right-header">
						<h2>Contact us</h2>
					</div>
					<ul class="contact-list">
						<li class="list-item">
							<i class="fa fa-map-marker fa-2x">
								<span class="contact-text place">
									<a title="FOT,USJ,Pitipana.">
										FOT,USJ,Pitipana.
									</a>
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
										expressway.guider@gmail.com
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
