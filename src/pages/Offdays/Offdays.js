import React, { Component } from 'react';
import './Offdays.scss';
import Navbar from '../../components/Navbar/Navbar';
import AddOffdayForm from '../../components/AddOffdayForm/AddOffdayForm';
import { withAuth } from '../../context/auth.context';

class Offdays extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='page-wrapper'>
          <h1>Off days</h1>
          {/* ADD OFFDAY COMPONENT */}
          <AddOffdayForm />
          <div>
            {/* VACATION COMPONENT */}
            {/* ILLNESS / OFFDAYS COMPONENT */}

          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Offdays);
