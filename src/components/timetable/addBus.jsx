import React from "react";
import "./styles/addBus.css";

const AddBus = (props) => {
	const { onSubmit, onClose } = props;

	return (
		<React.Fragment>
			<div className="add-bus-popup">
				<div className="add-bus-popup-content">
					<span onClick={onClose} className="add-bus-close-btn">
						&times;
					</span>
					<h2>Add Bus Details</h2>
					<div className="add-bus-form-group">
						<label htmlFor="bus-id">Bus ID</label>
						<input type="text" id="bus-id" name="bus-id" />
					</div>
					<div className="add-bus-form-group">
						<label htmlFor="from">From</label>
						<input type="text" id="from" name="from" />
					</div>
					<div className="add-bus-form-group">
						<label htmlFor="to">To</label>
						<input type="text" id="to" name="to" />
					</div>
					<div className="add-bus-time-group">
						<label htmlFor="departure-time">Departure Time</label>
						<input
							type="time"
							id="departure-time-1"
							name="departure-time-1"
						/>
						<span>to</span>
						<input
							type="time"
							id="arrival-time-1"
							name="arrival-time-1"
						/>
					</div>

					<div className="add-bus-time-group">
						<label htmlFor="departure-time">Departure Time</label>
						<input
							type="time"
							id="departure-time-2"
							name="departure-time-2"
						/>
						<span>to</span>
						<input
							type="time"
							id="arrival-time-2"
							name="arrival-time-2"
						/>
					</div>
					<div className="add-bus-time-group">
						<label htmlFor="departure-time">Departure Time</label>
						<input
							type="time"
							id="departure-time-3"
							name="departure-time-3"
						/>
						<span>to</span>
						<input
							type="time"
							id="arrival-time-3"
							name="arrival-time-3"
						/>
					</div>
					<div className="add-bus-time-group">
						<label htmlFor="departure-time">Departure Time</label>
						<input
							type="time"
							id="departure-time-4"
							name="departure-time-4"
						/>
						<span>to</span>
						<input
							type="time"
							id="arrival-time-4"
							name="arrival-time-4"
						/>
					</div>
					<div className="add-bus-form-group">
						<label htmlFor="price">Price</label>
						<input type="text" id="price" name="price" />
					</div>
					<div className="add-bus-form-group">
						<label htmlFor="contact">Contact</label>
						<input type="text" id="contact" name="contact" />
					</div>
					<button onClick={onSubmit} className="add-bus-submit-btn">
						Add Bus
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AddBus;
