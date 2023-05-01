import React from "react";
import styled from "styled-components";

const LoginStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const Login = () => {
	return (
		<React.Fragment>
			<LoginStyle>
				<h1>Login</h1>
			</LoginStyle>
		</React.Fragment>
	);
};

export default Login;
