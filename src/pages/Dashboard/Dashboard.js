import React, { Component } from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import Calendar from 'react-calendar';
import JourneyCreateForm from '../../components/JourneyCreateForm/JourneyCreateForm';
import JourneyService from '../../services/journeys.service';
import dayjs from 'dayjs';
import RegisterItem from '../../components/RegisterItem/RegisterItem';

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
      .then((response) => {
        this.setState({
          registers: response.data,
        });
      })
      .catch((error) => console.error(error));
  }

  deleteRegister(id) {
    console.log(id);
    this.journeyService.deleteOne(id).then((response) => {
      const registersCopy = this.state.registers.filter((register) => {
        console.log(!id === register.id);
        if (!id === register.id) {
          return register;
        }
      });
      console.log(registersCopy)
/*       this.setState({
        registers: registersCopy,
      }); */
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <SCDashboard>
          <div className='top-section'>
            {/* CREATE REGISTER FORM COMPONENT */}
            <div className='add-register-container'>
              <JourneyCreateForm />
            </div>
            <Calendar />
          </div>
          <div className='lists-wrapper'>
            <div className='register-container'>
              {/* MAP REGISTERS OF CURRENT WEEK + DISPLAY REGISTER ITEM IN A LIST */}
              {this.state.registers.map((register) => {
                if (dayjs(register.date).isSame(dayjs(), 'week')) {
                  return (
                    <RegisterItem
                      key={register.id}
                      register={register}
                      deleteRegister={() => this.deleteRegister(register.id)}
                    />
                  );
                }
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
