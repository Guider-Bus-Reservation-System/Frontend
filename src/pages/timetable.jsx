import React, { useState } from "react";

import Navbar from "../components/common/navbar";
import AddBus from "../components/timetable/addBus";

import "./styles/timetable.css";

const Timetable = () => {
	const [showPopup, setShowPopup] = useState(false);

	function handleAddBusClick() {
		setShowPopup(true);
	}

	const handleAddNewClosePopup = () => {
		setShowPopup(false);
	};

	const handleSubmitNewClosePopup = () => {
		setShowPopup(false);
		console.log("Submitted");
	};

	return (
		<React.Fragment>
			<div className="timetable">
				<div className="timetable-header">
					<div className="timetable-header-navbar">
						<Navbar />
					</div>

					<div className="timetable-header-image-container">
						<img
							src="homepage.png"
							alt="homepage"
							className="home-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-title">Timetable</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="timetable-add-bus">
					<button
						className="timetable-add-bus-button"
						onClick={handleAddBusClick}
					>
						Add Bus
					</button>
				</div>

				<div className="timetable-body">
					<table className="timetable-table">
						<thead>
							<tr>
								<th className="timetable-table_header">No.</th>
								<th className="timetable-table_header">From</th>
								<th className="timetable-table_header">To</th>
								<th className="timetable-table_header">
									Distance
								</th>
								<th className="timetable-table_header">
									Depart Time
								</th>
								<th className="timetable-table_header">
									Arrival Time
								</th>
								<th className="timetable-table_header">
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="timetable-table_data">1</td>
								<td className="timetable-table_data">
									New York
								</td>
								<td className="timetable-table_data">
									Los Angeles
								</td>
								<td className="timetable-table_data">
									2,475 miles
								</td>
								<td className="timetable-table_data">
									10:00 AM
								</td>
								<td className="timetable-table_data">
									5:00 PM
								</td>
								<td className="timetable-table_data">$300</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{showPopup && (
				<AddBus
					onClose={handleAddNewClosePopup}
					onSubmit={handleSubmitNewClosePopup}
				/>
			)}
		</React.Fragment>
	);
};

export default Timetable;
