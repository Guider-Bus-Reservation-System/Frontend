import React, { useState, useEffect } from "react";

import "./styles/search.css";

const Search = () => {
	const [dateTime, setDateTime] = useState("");

	useEffect(() => {
		const currentDate = new Date();
		const currentDateTime = currentDate.toISOString().slice(0, 16);
		setDateTime(currentDateTime);
	}, []);

	const locations = [
		{ id: 1, name: "City 1" },
		{ id: 2, name: "City 2" },
		{ id: 3, name: "City 3" },
	];

	return (
		<React.Fragment>
			<div className="reservation">
				<div className="reservation-container">
					<div className="reservation-left">
						<div className="reservation-left-title">
							Enter Your Destination
						</div>
					</div>

					<div className="reservation-right">
						<div className="reservation-right-container">
							<div className="reservation-right-form-container">
								<form>
									<div className="form-row">
										<div className="form-group">
											<label htmlFor="from">From:</label>
											<select id="from">
												{locations.map((location) => (
													<option
														key={location.id}
														value={location.name}
													>
														{location.name}
													</option>
												))}
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="to">To:</label>
											<select id="to">
												{locations.map((location) => (
													<option
														key={location.id}
														value={location.name}
													>
														{location.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group">
											<label htmlFor="date">Date:</label>
											<input
												type="datetime-local"
												id="date"
												value={dateTime}
												onChange={(e) =>
													setDateTime(e.target.value)
												}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group">
											<label htmlFor="passengers">
												Passengers:
											</label>
											<input
												type="number"
												id="passengers"
												min="1"
												max="10"
											/>
										</div>
										<button type="submit">Search</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Search;
