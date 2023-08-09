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
        <div className="search-timetable">
            <div className="search-timetable-container">
                <div className="search-timetable-left">
                    <div className="search-timetable-left-title">
                        Enter Your Destination
                    </div>
                </div>

                <div className="search-timetable-right">
                    <div className="search-timetable-right-container">
                        <div className="search-timetable-right-form-container">
                            <form className="search-timetable-form">
                                <div className="search-timetable-form-row">
                                    <div className="search-timetable-form-group search-timetable-form-group-left">
                                        <label
                                            className="search-timetable-label"
                                            htmlFor="from"
                                        >
                                            From:
                                        </label>
                                        <select
                                            id="from"
                                            className="search-timetable-select"
                                        >
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
                                    <div className="search-timetable-form-group search-timetable-form-group-left">
                                        <label
                                            className="search-timetable-label"
                                            htmlFor="to"
                                        >
                                            To:
                                        </label>
                                        <select
                                            id="to"
                                            className="search-timetable-select"
                                        >
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
                                <div className="search-timetable-form-row">
                                    <div className="search-timetable-form-group search-timetable-form-group-left">
                                        <label
                                            className="search-timetable-label"
                                            htmlFor="date"
                                        >
                                            Date:
                                        </label>
                                        <input
                                            className="search-timetable-date"
                                            type="datetime-local"
                                            id="date"
                                            value={dateTime}
                                            onChange={(e) =>
                                                setDateTime(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="search-timetable-form-group search-timetable-form-group-left">
                                        <label
                                            className="search-timetable-label"
                                            htmlFor="passengers"
                                        >
                                            Passengers:
                                        </label>
                                        <input
                                            className="search-timetable-passengers"
                                            type="number"
                                            id="passengers"
                                            min="1"
                                            max="10"
                                        />
                                    </div>
                                </div>
                                <div className="search-timetable-form-row">
                                    <button className="search-timetable-button">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
