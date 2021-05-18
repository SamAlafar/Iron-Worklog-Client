import React, { Component } from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import Calendar from 'react-calendar';
import JourneyCreateForm from '../../components/JourneyCreateForm/JourneyCreateForm';

class Dashboard extends Component {
  state = {
    registers: [],
    offdays: [],
  };
  // INSTANCE OF SERVICES TO CALL AND GET THE INFO

  componentDidMount() {
    // API CALLS TO GET REGISTERS AND OFFDAYS OF THE USER LOGGED IN
  }

  render() {
    return (
      <>
        <Navbar />
        <SCDashboard>
          <div className="top-section">
            {/* CREATE REGISTER FORM COMPONENT */}
            <div className='add-register-container'>
              <JourneyCreateForm />
            </div>
            <Calendar />
          </div>
          <div className='lists-wrapper'>
            <div className='register-container'>
              {/* MAP REGISTERS OF CURRENT WEEK + DISPLAY REGISTER ITEM IN A LIST */}
              <OffdayItem />
            </div>
            <div className='offdays-container'>
              {/* MAP OFFDAYS OF CURRENT YEAR + DISPLAY OFFDAYS ITEM IN A LIST */}
              <OffdayItem />
            </div>
          </div>
        </SCDashboard>
      </>
    );
  }
}

export default withAuth(Dashboard);
