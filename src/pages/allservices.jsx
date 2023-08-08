import React from 'react';
import ServicesExperiences from '../components/ourServices/Services';


const Allservices = () => {
  return (
    <div>
      <div className="blankback" id="experiences">
        <div className="arrow">
          <a href="index.html">
            <i className="fa-solid fa-arrow-left" id="leftarrow" style={{ color: 'white', width: '100px' }}></i>
          </a>
        </div>
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="box">
          <ServicesExperiences
            title="Time Table Management"
            description="Manage and organize schedules for various events and activities efficiently."
          />

          <ServicesExperiences
            title="Seat Booking and Reservation"
            description="Enable users to book and reserve seats for events, shows, or transportation."
          />

          <ServicesExperiences
            title="News and Announcement"
            description="Keep users informed by displaying news and announcements in real-time."
          />
        </div>
        <div className="box2">
          <ServicesExperiences
            title="Real-time Tracking and Monitoring"
            description="Provide live tracking and monitoring of activities or vehicles."
          />

          <ServicesExperiences
            title="Cancellations and Refunds"
            description="Handle cancellations and refunds smoothly and hassle-free."
          />

          <ServicesExperiences
            title="Customer Support and Notifications"
            description="Offer excellent customer support and send important notifications."
          />
        </div>
      </div>
    </div>
  );
};

export default Allservices;
