import React, { useState } from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Calendar from "../components/reservations/calender";

import "./styles/reservations.css";

const Reservations = () => {
	const [showingTimeSlots, setShowingTimeSlots] = useState([]);

	const busses = [
		{
			id: 1,
			busNumber: "#B001",
			availableTimeSlots: ["7.00AM", "10.00AM", "4.00PM"],
		},
		{
			id: 2,
			busNumber: "#B002",
			availableTimeSlots: ["8.00AM", "11.00AM", "5.00PM"],
		},
		{
			id: 3,
			busNumber: "#B003",
			availableTimeSlots: ["9.00AM", "12.00AM", "6.00PM"],
		},
	];

	function handleBusNumberChange(event) {
		if (event.target.value === "") {
			setShowingTimeSlots([]);
			return;
		}

		const selectedBus = busses.find(
			(bus) => bus.id === parseInt(event.target.value)
		);

		setShowingTimeSlots(selectedBus.availableTimeSlots);
	}

	return (
		<React.Fragment>
			<div className="reservations">
				<div className="reservations-header">
					<div className="reservations-header-navbar">
						<Navbar />
					</div>

					<div className="reservations-header-image-container">
						<img
							src="homepage.png"
							alt="homepage"
							className="reservations-header-image"
						/>
					</div>

					<div className="home-header-container">
						<div className="home-header-title">Reservations</div>
						<div className="home-header-subtitle">
							Guider: Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="reservations-body">
					<div className="reservations-bus-form-container">
						<form className="reservations-bus-form">
							<div className="reservations-form-group">
								<label htmlFor="reservations-bus-number">
									Select Bus Number:
								</label>
								<select
									id="reservations-bus-number"
									name="bus-number"
									required
									className="reservations-input"
									onChange={handleBusNumberChange}
								>
									<option value="">Select bus number</option>
									{busses.map((bus) => (
										<option value={bus.id} key={bus.id}>
											{bus.busNumber}
										</option>
									))}
								</select>
							</div>
							<div className="reservations-form-group">
								<label htmlFor="reservations-passengers-count">
									Passengers Count:
								</label>
								<input
									type="number"
									id="reservations-passengers-count"
									name="passengers-count"
									min="1"
									max="100"
									required
									className="reservations-input reservations-input-passengers"
								/>
							</div>
							<div className="reservations-form-group">
								<label htmlFor="reservations-time-slot">
									Time Slot:
								</label>
								<select
									id="reservations-time-slot"
									name="time-slot"
									required
									className="reservations-input"
								>
									{showingTimeSlots.map((timeSlot) => (
										<option value={timeSlot} key={timeSlot}>
											{timeSlot}
										</option>
									))}
								</select>
							</div>
							<button type="submit" className="reservations-btn">
								Take a ticket
							</button>
						</form>
						<div className="reservations-calender-container">
							<Calendar />
						</div>
					</div>

					<div className="reservations-table-container">
						<table class="reservations-table">
							<thead>
								<tr>
									<th class="reservations-table_header">
										No.
									</th>
									<th class="reservations-table_header">
										But Number
									</th>
									<th class="reservations-table_header">
										Passengers
									</th>
									<th class="reservations-table_header">
										Time
									</th>
									<th class="reservations-table_header">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="reservations-table_data">1</td>
									<td class="reservations-table_data">
										#B001
									</td>
									<td class="reservations-table_data">2</td>
									<td class="reservations-table_data">
										10:00 AM
									</td>
									<td class="reservations-table_data">
										<button class="reservations-table_btn">
											Edit
										</button>
										<button class="reservations-table_btn">
											Delete
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="reservations-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Reservations;
