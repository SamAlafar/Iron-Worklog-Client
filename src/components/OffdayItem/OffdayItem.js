import React from 'react';
import SCOffdayItem from './OffdayItem.styled';
import { Link } from 'react-router-dom';

export default function OffdayItem() {
  return (
    <SCOffdayItem className="offday-item">
      <div className="days-wrapper">

        <p>Start day: 25/05/2021</p>
        <p>End day: 30/05/2021</p>
      </div>
        <div className="action-wrapper">
          <Link to="/edit"><i className="fas fa-edit"></i></Link>
          <Link to=""><i className="fas fa-trash-alt"></i></Link>
        </div>
    </SCOffdayItem>
  )
}
