import React, { useState } from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
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
							src="img6_.jpg"
							alt="homepage"
							className="home-header-image"
						/>
					</div>

					<div className="sub-header-container">
						<div className="sub-header-title">Timetable</div>
						<div className="home-header-subtitle">
							Expressway Bus Transport Management &
							Information System
						</div>
					</div>
				</div>

				<div className="timetable-body">
					<table className="timetable-table">
						<thead>
							<tr>
								<th className="timetable-table_header">ID</th>
								<th className="timetable-table_header">Bus Number</th>
								<th className="timetable-table_header">From</th>
								<th className="timetable-table_header">To</th>
								<th className="timetable-table_header">Depeture Time</th>
								<th className="timetable-table_header">Arrival Time </th>
								<th className="timetable-table_header">Contact Number</th>
								<th className="timetable-table_header">Price</th>
								<th className="timetable-table_header">Availability</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="timetable-table_data">1</td>
								<td className="timetable-table_data">NC3746 </td>
								<td className="timetable-table_data">Kadawatha </td>
								<td className="timetable-table_data">Mathara </td>
								<td className="timetable-table_data">6:00 AM</td>
								<td className="timetable-table_data">9:00 AM</td>
								<td className="timetable-table_data">0719065263</td>
								<td className="timetable-table_data">Rs:800</td>
								<td className="timetable-table_data" style={{ color: 'green' }}>yes</td>

							</tr>

							<tr>
								<td className="timetable-table_data">2</td>
								<td className="timetable-table_data">ND8050 </td>
								<td className="timetable-table_data">Kadawatha </td>
								<td className="timetable-table_data">Makubura </td>
								<td className="timetable-table_data">6:20 AM</td>
								<td className="timetable-table_data">6:20 AM</td>
								<td className="timetable-table_data">0774103485</td>
								<td className="timetable-table_data">Rs:300</td>
								<td className="timetable-table_data" style={{ color: 'red' }}>No</td>

							</tr>
                            
							<tr>
								<td className="timetable-table_data">3</td>
								<td className="timetable-table_data">NC4324 </td>
								<td className="timetable-table_data">Kadawatha </td>
								<td className="timetable-table_data">Mathara </td>
								<td className="timetable-table_data">6:45 AM</td>
								<td className="timetable-table_data">9:30 AM</td>
								<td className="timetable-table_data">0719065263</td>
								<td className="timetable-table_data">Rs:800</td>
								<td className="timetable-table_data" style={{ color: 'green' }}>yes</td>
							</tr>

							<tr>
								<td className="timetable-table_data">4</td>
								<td className="timetable-table_data">CD5069 </td>
								<td className="timetable-table_data">Kadawatha </td>
								<td className="timetable-table_data">Galle </td>
								<td className="timetable-table_data">6:00 AM</td>
								<td className="timetable-table_data">8:30 AM</td>
								<td className="timetable-table_data">0726916104</td>
								<td className="timetable-table_data">Rs:700</td>
								<td className="timetable-table_data" style={{ color: 'green' }}>yes</td>
							</tr>

							<tr>
								<td className="timetable-table_data">5</td>
								<td className="timetable-table_data">NC7896 </td>
								<td className="timetable-table_data">Mathara </td>
								<td className="timetable-table_data"> Galle</td>
								<td className="timetable-table_data">10:00 AM</td>
								<td className="timetable-table_data">13:00 PM</td>
								<td className="timetable-table_data">0724476303</td>
								<td className="timetable-table_data">Rs:600</td>
								<td className="timetable-table_data" style={{ color: 'green' }}>yes</td>
							</tr>

							<tr>
								<td className="timetable-table_data">6</td>
								<td className="timetable-table_data">NC7890 </td>
								<td className="timetable-table_data">Mathara </td>
								<td className="timetable-table_data">Negambo </td>
								<td className="timetable-table_data">11:00 AM</td>
								<td className="timetable-table_data">14:00 PM</td>
								<td className="timetable-table_data">0765165978</td>
								<td className="timetable-table_data">Rs:1000</td>
								<td className="timetable-table_data" style={{ color: 'red' }}>No</td>

							</tr>

							<tr>
								<td className="timetable-table_data">7</td>
								<td className="timetable-table_data">CD3490 </td>
								<td className="timetable-table_data">Meerigama </td>
								<td className="timetable-table_data">Kurunegala </td>
								<td className="timetable-table_data">15:00 AM</td>
								<td className="timetable-table_data">17:30 AM</td>
								<td className="timetable-table_data">0785674536</td>
								<td className="timetable-table_data">Rs:800</td>
								<td className="timetable-table_data" style={{ color: 'green' }}>yes</td>
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

			<div className="timetable-footer">
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Timetable;
