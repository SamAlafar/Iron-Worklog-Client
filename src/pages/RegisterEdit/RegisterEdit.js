import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterEditItem from '../../components/RegisterEditItem/RegisterEditItem';
import SCRegisterEdit from './RegisterEdit.styled';
import { withAuth } from '../../context/auth.context';

class RegisterEdit extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SCRegisterEdit>
          <h1>Edit Register</h1>
          <RegisterEditItem />
        </SCRegisterEdit>
      </>
    );
  }
}
export default withAuth(RegisterEdit);
