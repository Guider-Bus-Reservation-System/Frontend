import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

import './Services.css';
const ServicesExperiences = ({ title, description }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
      <h5>{title}</h5>
      <div className="pra">
        <p>{description}</p>
        <p style={{ textAlign: 'center' }}>
          <a className="button" href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

export default ServicesExperiences;
/*
*/