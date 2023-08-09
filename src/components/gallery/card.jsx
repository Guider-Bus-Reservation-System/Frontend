import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import './gallery.css';


const CardG = ({ title, alt }) => {
  return (
    <div className="card-gallery">
      <img src={title.imageSrc} alt={alt || "Image"} />
    </div>
  );
};

export default CardG;

