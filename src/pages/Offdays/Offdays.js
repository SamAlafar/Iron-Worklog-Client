import React, { Component } from 'react';
import SCOffdays from './Offdays.styled';
import Navbar from '../../components/Navbar/Navbar';
import AddOffdayForm from '../../components/AddOffdayForm/AddOffdayForm';
import { withAuth } from '../../context/auth.context';

class Offdays extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SCOffdays>
          <h1>Off days</h1>
          {/* ADD OFFDAY COMPONENT */}
          <AddOffdayForm />
          <div>
            {/* VACATION COMPONENT */}
            {/* ILLNESS / OFFDAYS COMPONENT */}

          </div>
        </SCOffdays>
      </>
    );
  }
}

export default withAuth(Offdays);
