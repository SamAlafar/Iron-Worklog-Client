import React, { Component } from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import Calendar from 'react-calendar';
import JourneyService from '../../services/journeys.service';

class Dashboard extends Component {
  state = {
    registers: [],
    offdays: [],
  };
  // INSTANCE OF SERVICES TO CALL AND GET THE INFO
  journeyService = new JourneyService();

  componentDidMount() {
    // API CALLS TO GET REGISTERS AND OFFDAYS OF THE USER LOGGED IN
    this.journeyService
      .get()
      .then((response) => this.setState({ registers: response.data }))
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <SCDashboard>
          <div className='top-section'>
            {/* CREATE REGISTER FORM COMPONENT */}
            <div className='add-register-container'></div>
            <Calendar />
          </div>
          <div className='lists-wrapper'>
            <div className='register-container'>
              {/* MAP REGISTERS OF CURRENT WEEK + DISPLAY REGISTER ITEM IN A LIST */}
              <OffdayItem />
              {this.state.registers.map((journey) => {
                //if day in week 40 return info
                return (
                  <p key={journey.createdAt}>
                    {new Date(journey.startHour).getHours()}:{new Date(journey.startHour).getMinutes()}
                  </p>
                );
              })}
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
