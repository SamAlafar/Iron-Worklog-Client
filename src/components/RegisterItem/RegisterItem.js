import React from 'react';
import SCRegisterItem from './RegisterItem.styled';
import { Link } from 'react-router-dom';

export default function RegisterItem() {
  return (
    <SCRegisterItem>
      <div className='registers-wrapper'>
        <p>Start hour: 09:00</p>
        <p>End hour: 18:00</p>
        <p>Start break: 13:30</p>
        <p>End break: 14:30</p>
      </div>

      <div className='action-wrapper'>
        <Link to='/registers/:id'>
          <i class='fas fa-eye'></i>
        </Link>
        <Link to='/registers/edit/:id'>
          <i class='fas fa-edit'></i>
        </Link>
        <Link>
          <i class='fas fa-trash-alt'></i>
        </Link>
      </div>
    </SCRegisterItem>
  );
}
