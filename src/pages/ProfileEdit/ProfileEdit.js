import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import { withAuth } from '../../context/auth.context' 

 function ProfileEdit(props) {
  return (
    <div>
      <Navbar />
      <EditProfileForm user={props.user}/>
    </div>
  )
}

export default withAuth(ProfileEdit);