import React from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Gallery from "./gallery";
import "./styles/about.css";

const About = () => {
	return (
		<React.Fragment>
			<div className="about">
				<div className="about-header">
					<div className="about-header-navbar">
						<Navbar />
					</div>

					<div className="about-header-image-container">
						<img
							src="img6_.jpg"
							alt="homepage"
							className="about-header-image"
						/>
					</div>

					<div className="sub-header-container">
						<div className="sub-header-title">About</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>
				<div className="about-content">
                    <div className="welcome">
                        <h2><bold>Welcome to Guider</bold></h2><br/>
                        <p>Your comprehensive Expressway Bus Transport Management & Information System in Sri Lanka. Our mission is to revolutionize the way people travel by providing efficient and reliable bus transportation services. With Guider, we aim to make commuting a seamless and enjoyable experience for all passengers.</p>
                    </div>

					<div className="about-content">
					<div className="content-with-image">
						<img src="your-vision-image.jpg" alt="Our Vision" className="content-image" />
						<div className="content-text">
							<h2>Our Vision</h2>
							<p>At Guider, we envision a future where public transportation is accessible, convenient, and sustainable. We strive to create a reliable and efficient bus transport system that connects people, communities, and businesses across Sri Lanka. Our goal is to contribute to the development of a greener and more interconnected society.</p>
						</div>
					</div>


					<div className="content-with-image">
        <div className="content-text">
            <h2>What We Offer</h2>
            <ul>
                <li>Bus Scheduling and Routing:</li>
                {/* ... Rest of the content ... */}
            </ul>
        </div>
        <img src="your-offer-image.jpg" alt="What We Offer" className="content-image" />
    </div>
</div>
						<div className="get-in-touch">
                        <h2>Get in Touch</h2>
                        <p>We believe in open communication and value your thoughts and suggestions. If you have any questions, feedback, or partnership inquiries, please don't hesitate to reach out to our team. We're here to assist you and make your experience with Guider exceptional. Thank you for choosing Guider as your preferred Expressway Bus Transport Management & Information System. We look forward to serving you and making your daily commute a smooth and enjoyable journey.</p>
                    </div>
                </div>
					
				
				<div className="Gallery">
					<Gallery />
				</div>
				<div className="about-footer">
					<Footer />
				</div>


			</div>
		</React.Fragment>
	);
};

export default About;
