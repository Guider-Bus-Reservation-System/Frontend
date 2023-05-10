import React from "react";

import Navbar from "../components/common/navbar";

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
							src="homepage.png"
							alt="homepage"
							className="news-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-title">News</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
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
			</div>
		</React.Fragment>
	);
};

export default News;
