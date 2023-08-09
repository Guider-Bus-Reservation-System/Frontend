import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // <-- Add this import
import { faCalendarDays, faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import CardG from '../components/gallery/card';



const Gallery = () => {
  return (
    <div>
      <div className="blankback" id="experiences">
        <div className="arrow">
          <a href="index.html">
            <i className="fa-solid fa-arrow-left" id="leftarrow" style={{ color: 'white', width: '100px' }}></i>
          </a>
        </div>
        <div className="title" style={{padding:'50px', textAlign:'center' }}>
           

          <h2>Our Services</h2>
        </div>
        <div className="box">
          <CardG
            icon={<FontAwesomeIcon icon={faCalendarDays} style={{ color: 'white' }} />}
            title="Time Table Management"
          />

          <CardG
            icon ="faCalendarDays"
            title="Seat Booking and Reservation"
          />

          <CardG
            title="News and Announcement"
          />
        </div>
        <div className="box2">
          <CardG
            title="Real-time Tracking and Monitoring"
          />

          <CardG
            title="Cancellations and Refunds"
          />

          <CardG
            title="Customer Support and Notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;