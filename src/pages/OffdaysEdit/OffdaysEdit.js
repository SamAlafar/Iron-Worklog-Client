import React, { Component } from 'react';
import SCOffdaysEdit from './OffdaysEdit.styled';
import Navbar from '../../components/Navbar/Navbar';
import UpdateOffdayForm from '../../components/UpdateOffdayForm/UpdateOffdayForm';
import { withAuth } from '../../context/auth.context';

class OffdaysEdit extends Component {
  // STATE WITH SINGLE OFFDAY TO EDIT SEND BY PROPS TO THE COMPONENTS
  state = {
    offday: {},
  };

  render() {
    return (
      <>
        <Navbar />
        <SCOffdaysEdit>
          <h1>Update Off days</h1>
          {/* ADD OFFDAY COMPONENT */}
          <UpdateOffdayForm />
        </SCOffdaysEdit>
      </>
    );
  }
}

export default withAuth(OffdaysEdit);
