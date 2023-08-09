import React from "react";

import "./styles/footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
	return (
		<footer>
			<div className="row primary">
				<div className="column about">
					<h3>Guider Developers</h3>
					<p>
						Guider is an online bus reservation and information
						system that aims to provide a convenient and
						user-friendly platform for users to book bus tickets and
						access relevant information.
					</p>
					<div className="social">
						<i className="fa-brands fa-facebook-square"></i>
						<i className="fa-brands fa-instagram-square"></i>
						<i className="fa-brands fa-twitter-square"></i>
						<i className="fa-brands fa-youtube-square"></i>
						<i className="fa-brands fa-whatsapp-square"></i>
					</div>
				</div>

				<div className="column links">
					<h3>Some Links</h3>
					<ul>
						<li>
							<a href="#faq">F.A.Q</a>
						</li>
						<li>
							<a href="#cookies-policy">Cookies Policy</a>
						</li>
						<li>
							<a href="#terms-of-services">Terms Of Service</a>
						</li>
						<li>
							<a href="#support">Support</a>
						</li>
					</ul>
				</div>



				<div className="column subscribe">
					<h3>Newsletter</h3>
					<div>
						<input type="email" placeholder="Your email id here" />
						<button>Send</button>
					</div>
				</div>
			</div>

			<div className="row copyright">
				<div className="footer-menu">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/timetable">Timetable</Link>
					<Link to="/news">News</Link>
					<Link to="/contact">Contact Us</Link>
				</div>
				<p> Copyright &copy; 2023 Guider Developers</p>
			</div>
		</footer>
	);
};

export default Footer;
