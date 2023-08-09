import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import './gallery.css';


const CardG = ({ title, description }) => {
  return (
    <div className="card-gallery">
      <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
      <h5>{title}</h5>
      <div className="pra">
          <a className="button" href="#">Read More</a>
      </div>
    </div>
  );
};

export default CardG;
/*
*/