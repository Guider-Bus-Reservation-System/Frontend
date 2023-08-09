import React from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

import "./styles/news.css";
import Card from "../components/news/card";

const News = () => {
	const news = [
		{
			title: "Bus and Lorry Collision on E01: Several Injured, Traffic Diverted",
			date: "August 10, 2023",
			content:
				"A collision between a passenger bus and a lorry on the E01 highway results in multiple injuries and disrupts traffic flow. Emergency services are deployed, and alternative routes are established.",
		},

		{
			title: "Eco-Friendly Buses Join Sri Lanka's Highway Transport",
			date: "August 11, 2023",
			content:
				"Sri Lanka's highway bus system welcomes a fleet of eco-friendly buses powered by clean energy sources, contributing to reduced air pollution and a more sustainable transportation solution for passengers.",
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
