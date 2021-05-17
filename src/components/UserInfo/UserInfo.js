import React from 'react';
import SCUserInfo from './UserInfo.styled';

export default function UserInfo({ user }) {
  return (
    <SCUserInfo className='user-info-wrapper'>
      <div className='user-info'>
        <div>
          <p>Employee name: {user.firstName}</p>
          <p>Employee surname: {user.lastName}</p>
        </div>
        <div>
          <p>Employee birthdate: {user.birthDate}</p>
          <p>Contract start date: {user.startContract}</p>
        </div>
      </div>
      <img src={user.profilePic} alt='User photo' />
    </SCUserInfo>
  );
}
