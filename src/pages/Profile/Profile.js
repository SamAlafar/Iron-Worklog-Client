import React from 'react';
import SCProfile from './Profile.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import UserInfo from '../../components/UserInfo/UserInfo';

function Profile(props) {
  return (
    <>
      <Navbar />
      <SCProfile>
        <UserInfo user={props.user}/>
      </SCProfile>
    </>
  );
}

export default withAuth(Profile);
