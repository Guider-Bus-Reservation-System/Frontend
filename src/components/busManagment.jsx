import React from "react";
import styled from "styled-components";

const ManagmentStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const BusManagment = () => {
	return (
		<React.Fragment>
			<ManagmentStyle>
				<h1>Bus Managment</h1>
			</ManagmentStyle>
		</React.Fragment>
	);
};

export default BusManagment;
