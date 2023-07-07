import React, { useEffect, useRef } from "react";

const App = () => {
	const containerRef = useRef(null);
	const calendarRef = useRef(null);
	const daysRef = useRef(null);
	const formRef = useRef(null);
	const inputRef = useRef(null);
	const buttonsRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const calendar = calendarRef.current;
		const days = daysRef.current;
		const form = formRef.current;
		const input = inputRef.current;
		const buttons = buttonsRef.current;

		const swap = (currentSide, desiredSide) => {
			container.classList.toggle("flip");
			currentSide.fadeOut(900);
			currentSide.hide();
			desiredSide.show();
		};

		const bindUIActions = () => {
			days.on("click", () => {
				swap(calendar, form);
				input.focus();
			});

			buttons.on("click", () => {
				swap(form, calendar);
			});
		};

		bindUIActions();
	}, []);

	return (
		<div>
			<div className="calendar" ref={containerRef}>
				<div className="front" ref={calendarRef}>
					{/* Content for the front side */}
				</div>

				<div className="back" ref={formRef}>
					{/* Content for the back side */}
				</div>
			</div>
		</div>
	);
};

export default App;
