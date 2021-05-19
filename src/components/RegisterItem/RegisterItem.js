import React from 'react';
import SCRegisterItem from './RegisterItem.styled';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function RegisterItem({register, deleteRegister}) {
  
  return (
    <SCRegisterItem className='register-item'>
      <div className='registers-wrapper'>
        <p>Date: {dayjs(register.date).format('DD/MM/YYYY')}</p>
        <p>Start hour: {register.startHour}</p>
        <p>End hour: {register.endHour}</p>
        <p>Start break: {register.startBreak}</p>
        <p>End break: {register.endBreak}</p>
      </div>

      <div className='action-wrapper'>
        <Link to={`/registers/${register.id}`}>
          <i className='fas fa-eye'></i>
        </Link>
        <Link to={`/registers/edit/${register.id}`}>
          <i className='fas fa-edit'></i>
        </Link>
        <Link onClick={deleteRegister}>
          <i className='fas fa-trash-alt'></i>
        </Link>
      </div>
    </SCRegisterItem>
  );
}
