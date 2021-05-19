import React, { Component } from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import Calendar from 'react-calendar';
import JourneyService from '../../services/journeys.service';
import OffdaysService from '../../services/offdays.service';
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
  offdaysService = new OffdaysService();

  refreshRegistersState() {
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

  refreshOffdaysState() {
    this.offdaysService
      .get()
      .then((response) => {
        const sortedOffdays = response.data.sort(function (a, b) {
          return dayjs(b.startDay) - dayjs(a.startDay);
        });

        this.setState({
          offdays: sortedOffdays,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.refreshRegistersState();
    this.refreshOffdaysState();
  }

  deleteRegister(id) {
    this.journeyService.deleteOne(id).then(() => {
      this.refreshRegistersState();
      this.refreshJourneyState();
    });
  }

  deleteOffday(id) {
    this.offdaysService.deleteOne(id).then(() => {
      this.refreshOffdaysState();
    });
  }

  render() {
    const { registers, currentJourney, offdays } = this.state;
    return (
      <>
        <Navbar />
        <SCDashboard>
          <div className='top-section'>
            <div className='add-register-container'>
              <JourneyCreateForm
                refreshState={() => this.refreshRegistersState()}
                journey={currentJourney}
              />
            </div>
            <Calendar />
          </div>
          <div className='lists-wrapper'>
            <div className='registers-wrapper'>
            <div className='list-header'>
                <h2>Current week worklog</h2>
                <p className='registers-counter'>Remaining days: XXX</p>
              </div>
              {registers.map((register) => {
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
            <div className='offdays-wrapper'>
            <div className='list-header'>
                <h2>Current year off days and holidays</h2>
                <p className='offdays-counter'>Remaining days: XXX</p>
              </div>
              {offdays.map((offday) => {
                if (dayjs(offday.startDay).isSame(dayjs(), 'year')) {
                  return (
                    <OffdayItem
                      key={offday.id}
                      offday={offday}
                      deleteOffday={() => this.deleteOffday(offday.id)}
                    />
                  );
                }
              })}
            </div>
          </div>
        </SCDashboard>
      </>
    );
  }
}

export default withAuth(Dashboard);
