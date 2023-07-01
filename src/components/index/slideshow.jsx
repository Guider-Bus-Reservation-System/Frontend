import React, { useState, useEffect } from "react";
import "./styles/slideshow.css";

const Slideshow = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const showSlides = () => {
		const slides = document.getElementsByClassName("mySlides");
		const dots = document.getElementsByClassName("dot");

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex].style.display = "block";

		for (let i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		dots[slideIndex].className += " active";
	};

	useEffect(() => {
		showSlides();
	}, [slideIndex]);

	return (
		<div>
			<div className="slideshow-container">
				<div className="mySlides fade">
					<img
						src="homepage.png"
						alt="homepage.png"
						style={{ width: "100%" }}
					/>
				</div>

				<div className="mySlides fade">
					<img
						src="img1.png"
						alt="img1.png"
						style={{ width: "100%" }}
					/>
				</div>

				<div className="mySlides fade">
					<img
						src="img2.jpg"
						alt="img2.jpg"
						style={{ width: "100%" }}
					/>
				</div>
			</div>

			<br />

			<div style={{ textAlign: "center" }}>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</div>
		</div>
	);
};

export default Slideshow;
