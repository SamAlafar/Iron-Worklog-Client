import React from 'react';
import SCUserInfo from './UserInfo.styled';
import dayjs from 'dayjs';

export default function UserInfo({ user }) {
  return (
    <SCUserInfo className='user-info-wrapper'>
      <div className='user-info'>
        <div className='name-wrapper'>
          <label>
            Employee Name
            <p>{user.firstName}</p>
          </label>
          <label>
            Employee Surname
            <p>{user.lastName}</p>
          </label>
        </div>
        <div className='details-wrapper'>
          <label>
            Employee Birth Date
            <p>{dayjs(user.birthDate).format('DD/MM/YYYY')}</p>
          </label>
          <label>
            Contract Start Date
            <p>
              {dayjs(user.startContract).format('DD/MM/YYYY')}
            </p>
          </label>
        </div>
      </div>
      <div className='profile-pic'>
        <img src={user.profilePic} alt='User photo' />
      </div>
    </SCUserInfo>
  );
}
