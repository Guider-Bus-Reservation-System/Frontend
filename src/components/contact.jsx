import React from "react";
import styled from "styled-components";

const ContactStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const Contact = () => {
	return (
		<React.Fragment>
			<ContactStyle>
				<h1>Contact</h1>
			</ContactStyle>
		</React.Fragment>
	);
};

export default Contact;
