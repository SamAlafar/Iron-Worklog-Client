import React from 'react';
import SCOffdayItem from './OffdayItem.styled';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function OffdayItem({ offday, deleteOffday }) {
  return (
    <SCOffdayItem className='offday-item'>
      <div className='days-wrapper'>
        <span>{}</span>
        <p>Start day: {dayjs(offday.startDay).format('DD/MM/YYYY')}</p>
        <p>End day:{dayjs(offday.endDay).format('DD/MM/YYYY')}</p>
      </div>
      <div className='action-wrapper'>
        <Link
          to={`/offdays/edit/${offday.id}`}>
          <i className='fas fa-edit'></i>
        </Link>
        <Link onClick={deleteOffday}>
          <i className='fas fa-trash-alt'></i>
        </Link>
      </div>
    </SCOffdayItem>
  );
}
