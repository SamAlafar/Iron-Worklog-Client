import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterItem from '../../components/RegisterItem/RegisterItem';
import Calendar from 'react-calendar';
import SCRegisters from './Registers.styled';
import { withAuth } from '../../context/auth.context';
import JourneyService from '../../services/journeys.service';
import dayjs from 'dayjs';

class Registers extends Component {
  state = {
    registers: [],
  };

  journeyService = new JourneyService();

  refreshState() {
    this.journeyService
      .get()
      .then((response) => {
        const sortedJourneys = response.data.sort(function (a, b) {
          return dayjs(b.date) - dayjs(a.date);
        });

        this.setState({
          ...this.state.currentJourney,
          registers: sortedJourneys,
        });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.refreshState();
  }

  deleteRegister(id) {
    this.journeyService.deleteOne(id).then((response) => {
      this.refreshState();
    });
  }

  render() {
    const { registers } = this.state;
    return (
      <>
        <Navbar />
        <SCRegisters>
          <h1>Registers</h1>
          <div className='registers-container'>
            <div className='registers-wrapper'>
              {registers.map((register) => {
                return (
                  <RegisterItem
                    key={register.id}
                    register={register}
                    deleteRegister={() => this.deleteRegister(register.id)}
                  />
                );
              })}
            </div>
            <div className='calendar-wrapper'>
              <Calendar />
            </div>
          </div>
        </SCRegisters>
      </>
    );
  }
}

export default withAuth(Registers);
