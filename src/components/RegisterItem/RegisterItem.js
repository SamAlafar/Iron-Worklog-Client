import React from 'react';
import SCRegisterItem from './RegisterItem.styled';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function RegisterItem({register, deleteRegister}) {
  
  return (
    <SCRegisterItem className='register-item'>
      <div className='registers-wrapper'>
        <p><i class="fas fa-calendar-day"></i> {dayjs(register.date).format('DD/MM/YYYY')}</p>
        <p><i class="fas fa-user-clock start"></i> : {register.startHour}</p>
        <p><i class="fas fa-coffee start"></i> : {register.startBreak}</p>
        <p><i class="fas fa-coffee end"></i> : {register.endBreak}</p>
        <p><i class="fas fa-user-clock end"></i> : {register.endHour}</p>
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
