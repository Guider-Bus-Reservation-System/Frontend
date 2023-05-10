import React from "react";

import "./styles/card.css";

const Card = (props) => {
	const { title, date, content } = props;

	return (
		<React.Fragment>
			<div class="news-container">
				<div class="news-card">
					<h2 class="news-title">{title}</h2>
					<p class="news-date">{date}</p>
					<p class="news-content">{content}</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Card;
