import React, { Component } from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import Calendar from 'react-calendar';
import JourneyService from '../../services/journeys.service';
import JourneyCreateForm from '../../components/JourneyCreateForm/JourneyCreateForm';
import dayjs from 'dayjs';
import RegisterItem from '../../components/RegisterItem/RegisterItem';

class Dashboard extends Component {
  state = {
    registers: [],
    offdays: [],
    currentJourney: {
      date: dayjs(),
      startHour: null,
      endHour: null,
      startBreak: null,
      endBreak: null,
      morningStandup: '',
      eveningStandup: '',
      id: null,
    },
  };
  // INSTANCE OF SERVICES TO CALL AND GET THE INFO
  journeyService = new JourneyService();

  refreshState() {
    this.journeyService
      .get()
      .then((response) => {
        this.setState({
          ...this.state.currentJourney,
          registers: response.data,
        });
        response.data.map((journey) => {
          if (journey.date && dayjs(journey.date).isSame(dayjs(), 'day')) {
            this.setState({
              currentJourney: {
                date: journey.date,
                startHour: journey.startHour,
                endHour: journey.endHour,
                startBreak: journey.startBreak,
                endBreak: journey.endBreak,
                morningStandup: journey.morningStandup,
                eveningStandup: journey.eveningStandup,
                id: journey.id,
              },
            });
          }
        });
      })
      .catch((error) => console.error(error));
  }

  refreshJourneyState() {
    this.setState({
      currentJourney: {
        date: dayjs(),
        startHour: null,
        endHour: null,
        startBreak: null,
        endBreak: null,
        morningStandup: '',
        eveningStandup: '',
        id: null,
      },
    });
  }

  componentDidMount() {
    this.refreshState();
  }

  deleteRegister(id) {
    this.journeyService.deleteOne(id).then(() => {
      this.refreshState();
      this.refreshJourneyState();
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
              <JourneyCreateForm
                refreshState={() => this.refreshState()}
                journey={this.state.currentJourney}
              />
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
