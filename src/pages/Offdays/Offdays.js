import React, { Component } from 'react';
import SCOffdays from './Offdays.styled';
import Navbar from '../../components/Navbar/Navbar';
import AddOffdayForm from '../../components/AddOffdayForm/AddOffdayForm';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import { withAuth } from '../../context/auth.context';
import OffdaysService from '../../services/offdays.service';
import dayjs from 'dayjs'

class Offdays extends Component {
  state = {
    offdays: [],
    showAddForm: false,
  };

  offdaysService = new OffdaysService();

  refreshState() {
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
    this.refreshState();
  }

  deleteOffday(id) {
    this.offdaysService.deleteOne(id).then(() => {
      this.refreshState();
    });
  }

  handleShowAdd = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  };

  render() {
    const { showAddForm, offdays } = this.state;
    return (
      <>
        <Navbar />
        <SCOffdays>
          <h1>Off days</h1>
          <div className='add-wrapper'>
            <button className='btn-submit' onClick={() => this.handleShowAdd()}>
              {!showAddForm ? 'Add offdays' : 'Close'}
            </button>
          </div>
          {showAddForm ? (
            <AddOffdayForm refreshState={() => this.refreshState()} handleShowAdd={() => this.handleShowAdd()}/>
          ) : (
            ''
          )}
          <div className='lists-wrapper'>
            <div className='holidays-wrapper'>
              <div className='list-header'>
                <h2>Holidays</h2>
                <p className='offdays-counter'>Remaining days: XXX</p>
              </div>
              {offdays.map((offday) => {
                if (offday.type === 'holidays') {
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
            {/* ILLNESS / OFFDAYS COMPONENT */}
            <div className='offdays-wrapper'>
              <div className='list-header'>
                <h2>Off days and Sick days</h2>
                <p className='offdays-counter'>Absence days: XXX</p>
              </div>
              {offdays.map((offday) => {
                if (offday.type !== 'holidays') {
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
        </SCOffdays>
      </>
    );
  }
}

export default withAuth(Offdays);
