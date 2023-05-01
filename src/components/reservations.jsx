import React from "react";
import styled from "styled-components";

const ReservationsStyle = styled.div`
	h1 {
		color: #000;
	}
`;

const Reservations = () => {
	return (
		<React.Fragment>
			<ReservationsStyle>
				<h1>Reservations</h1>
			</ReservationsStyle>
		</React.Fragment>
	);
};

export default Reservations;
