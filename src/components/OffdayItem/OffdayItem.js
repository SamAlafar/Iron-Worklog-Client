import React from 'react';
import SCOffdayItem from './OffdayItem.styled';
import { Link } from 'react-router-dom';

export default function OffdayItem() {
  return (
    <SCOffdayItem>
      <div className="days-wrapper">

        <p>Start day: 25/05/2021</p>
        <p>End day: 30/05/2021</p>
      </div>
        <div className="action-wrapper">
          <Link><i class="fas fa-edit"></i></Link>
          <Link><i class="fas fa-trash-alt"></i></Link>
        </div>
    </SCOffdayItem>
  )
}
