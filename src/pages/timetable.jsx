import React from "react";

import Navbar from "../components/common/navbar";

import "./styles/timetable.css";

const Timetable = () => {
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

				<div className="timetable-body">
					<table class="timetable-table">
						<thead>
							<tr>
								<th class="timetable-table_header">No.</th>
								<th class="timetable-table_header">From</th>
								<th class="timetable-table_header">To</th>
								<th class="timetable-table_header">Distance</th>
								<th class="timetable-table_header">
									Depart Time
								</th>
								<th class="timetable-table_header">
									Arrival Time
								</th>
								<th class="timetable-table_header">Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="timetable-table_data">1</td>
								<td class="timetable-table_data">New York</td>
								<td class="timetable-table_data">
									Los Angeles
								</td>
								<td class="timetable-table_data">
									2,475 miles
								</td>
								<td class="timetable-table_data">10:00 AM</td>
								<td class="timetable-table_data">5:00 PM</td>
								<td class="timetable-table_data">$300</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Timetable;
