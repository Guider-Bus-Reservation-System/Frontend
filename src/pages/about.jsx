import React from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

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
							src="homepage.png"
							alt="homepage"
							className="about-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-title">About</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="about-body">
					<p>
						<h1 className="element"></h1> {/*About Guider*/}
						Welcome to Guider, your comprehensive Expressway Bus
						Transport Management & Information System in Sri Lanka.
						Our mission is to revolutionize the way people travel by
						providing efficient and reliable bus transportation
						services. With Guider, we aim to make commuting a
						seamless and enjoyable experience for all passengers.
						<br />
						<br />
						<h2>Our Vision</h2>
						<br />
						At Guider, we envision a future where public
						transportation is accessible, convenient, and
						sustainable. We strive to create a reliable and
						efficient bus transport system that connects people,
						communities, and businesses across Sri Lanka. Our goal
						is to contribute to the development of a greener and
						more interconnected society.
						<br />
						<br />
						<div>
							<h2>What We Offer </h2>
							<br />
							<ul>
								<li>Bus Scheduling and Routing: </li>
								Guider offers up-to-date bus schedules, routes,
								and stops to help you plan your journeys. With
								real-time updates on bus locations and estimated
								arrival times, you can reduce waiting times and
								travel with confidence.
								<br />
								<br />
								<li>Ticketing and Fare Management: </li>Say
								goodbye to long queues and paper tickets. Guider
								provides an easy-to-use online ticketing system,
								allowing you to purchase and manage your bus
								tickets digitally. Choose from various payment
								options and enjoy hassle-free transactions.
								<br />
								<br />
								<li>Passenger Information System: </li>
								Stay informed throughout your journey with
								Guider's passenger information system. Whether
								you're waiting at a bus stop or onboard a bus,
								you'll have access to essential information such
								as upcoming stops, route maps, and estimated
								arrival times.
								<br />
								<br />
								<li>Fleet Management: </li>
								We prioritize the safety and reliability of our
								bus fleet. Our comprehensive fleet management
								system ensures proper maintenance, tracks fuel
								consumption, and optimizes driver assignments.
								This enables us to provide a consistent and
								high-quality transportation service.
								<br />
								<br />
								<li>Passenger Feedback and Complaints: </li>
								Your satisfaction is our top priority. Guider
								provides a platform for passengers to provide
								feedback, report issues, and submit complaints.
								We value your input and use it to continuously
								improve our services and address any concerns
								promptly.
								<br />
								<br />
							</ul>
						</div>
						<h2>Get in Touch </h2>
						<br />
						We believe in open communication and value your thoughts
						and suggestions. If you have any questions, feedback, or
						partnership inquiries, please don't hesitate to reach
						out to our team. We're here to assist you and make your
						experience with Guider exceptional.
						<br />
						<br />
						Thank you for choosing Guider as your preferred
						Expressway Bus Transport Management & Information
						System. We look forward to serving you and making your
						daily commute a smooth and enjoyable journey.
					</p>
				</div>

				<div className="about-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
