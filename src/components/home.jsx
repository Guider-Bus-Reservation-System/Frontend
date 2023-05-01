import React from "react";
import styled from "styled-components";

const HomeStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const Home = () => {
	return (
		<React.Fragment>
			<HomeStyle>
				<h1>Home</h1>
			</HomeStyle>
		</React.Fragment>
	);
};

export default Home;
