import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const ServicesExperiences = ({ title, description }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={faBars} style={{ color: '#f9004d' }} />
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