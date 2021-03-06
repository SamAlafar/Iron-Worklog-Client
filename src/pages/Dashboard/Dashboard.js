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
            return this.setState({
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
          return null;
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
            <div className="calendar-wrapper">
            <Calendar />
            </div>
          </div>
          <div className='lists-wrapper'>
            <div className='registers-wrapper'>
              <div className='list-header'>
                <h2>Worklog</h2>
                <p className='registers-counter'>{`${dayjs()
                  .day(0)
                  .format('DD/MM/YYYY')} to ${dayjs()
                  .day(6)
                  .format('DD/MM/YYYY')}`}</p>
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
                return null;
              })}
            </div>
            <div className='offdays-wrapper'>
              <div className='list-header'>
                <h2>{`${dayjs()
                  .day(0)
                  .format('YYYY')}`}</h2>
                <p className='offdays-counter'>Holidays, sickdays and days off</p>
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
                return null;
              })}
            </div>
          </div>
        </SCDashboard>
      </>
    );
  }
}

export default withAuth(Dashboard);
