import React from "react";
import styled from "styled-components";

const IndexStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const Index = () => {
	return (
		<React.Fragment>
			<IndexStyle>
				<h1>Index</h1>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/reservations">Bus Reservations</a>
					</li>
					<li>
						<a href="/managment">Bus Managment</a>
					</li>
					<li>
						<a href="/contact">Contact Us</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</IndexStyle>
		</React.Fragment>
	);
};

export default Index;
