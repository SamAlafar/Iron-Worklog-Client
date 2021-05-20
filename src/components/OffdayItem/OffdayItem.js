import React from 'react';
import SCOffdayItem from './OffdayItem.styled';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function OffdayItem({ offday, deleteOffday }) {
  return (
    <SCOffdayItem className='offday-item'>
      <div className='days-wrapper'>
        <p>
          {offday.type === 'holidays' ? (
            <i class='fas fa-umbrella-beach'></i>
          ) : (
            offday.type === 'sickness' ?
            <i class="fas fa-head-side-mask"></i>
            :
            offday.type === 'off-days' ?
            <i class="fas fa-bell-slash"></i>
            : ''
          )}
        </p>
        <p>
          <i class='far fa-calendar-check'></i>:{' '}
          {dayjs(offday.startDay).format('DD/MM/YYYY')}
        </p>
        <p>
          <i class='far fa-calendar-times'></i>:
          {dayjs(offday.endDay).format('DD/MM/YYYY')}
        </p>
      </div>
      <div className='action-wrapper'>
        <Link to={`/offdays/edit/${offday.id}`}>
          <i className='fas fa-edit'></i>
        </Link>
        <Link onClick={deleteOffday}>
          <i className='fas fa-trash-alt'></i>
        </Link>
      </div>
    </SCOffdayItem>
  );
}
