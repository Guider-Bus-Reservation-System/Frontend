import React from "react";
import styled from "styled-components";

const AboutStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const About = () => {
	return (
		<React.Fragment>
			<AboutStyle>
				<h1>About</h1>
			</AboutStyle>
		</React.Fragment>
	);
};

export default About;
