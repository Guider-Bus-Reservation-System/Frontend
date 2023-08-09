import React from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

import "./styles/news.css";
import Card from "../components/news/card";

const News = () => {
	const news = [
		{
			title: "Breaking News!",
			date: "May 10, 2023",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				"Nam aliquet varius nunc, vel tempus ex mollis eu. Nulla" +
				"ultricies ante vel malesuada luctus. Praesent bibendum" +
				"enim vel tellus vulputate lacinia. Aliquam vel neque",
		},
		{
			title: "No busses today",
			date: "May 11, 2023",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				"Nam aliquet varius nunc, vel tempus ex mollis eu. Nulla" +
				"ultricies ante vel malesuada luctus. Praesent bibendum" +
				"enim vel tellus vulputate lacinia. Aliquam vel neque",
		},

		{
			title: "SLTB TO RUN BUSES WITHOUT CONDUCTORS FROM JULY 01!",
			date: "JUNE 19, 2023",
			content:
				"Colombo (LNW): A pilot project of bus operations without conductors is set to undergo from July 01, 2023 covering all expressways in the country, revealed Transport Minister Bandula Gunawardena.",
		},

		{
			title: "Breaking News!",
			date: "May 10, 2023",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				"Nam aliquet varius nunc, vel tempus ex mollis eu. Nulla" +
				"ultricies ante vel malesuada luctus. Praesent bibendum" +
				"enim vel tellus vulputate lacinia. Aliquam vel neque",
		},
	];

	return (
		<React.Fragment>
			<div className="news">
				<div className="news-header">
					<div className="news-header-navbar">
						<Navbar />
					</div>

					<div className="news-header-image-container">
						<img
							src="img6_.jpg"
							alt="homepage"
							className="news-header-image"
						/>
					</div>

					<div className="sub-header-container">
						<div className="sub-header-title">News</div>
						<div className="home-header-subtitle">
							Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="news-body">
					{news.map((item) => (
						<div className="news-card-container">
							<Card
								title={item.title}
								date={item.date}
								content={item.content}
							/>
						</div>
					))}
				</div>

				<div className="news-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default News;
