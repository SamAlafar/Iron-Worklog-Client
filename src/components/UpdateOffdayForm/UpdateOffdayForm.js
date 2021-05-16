import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import SCUpdateOffdayForm from './UpdateOffdayForm.styled';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

const validators = {
  startDay: (value) => {
    let message;
    if (!value) {
      message = 'Select a starting date';
    }
    return message;
  },
  endDay: (value) => {
    let message;
    if (!value) {
      message = 'Select a ending date';
    }
    return message;
  },
  type: (value) => {
    let message;
    if (!value) {
      message = 'Select a type of off day';
    }
    return message;
  },
};

class UpdateOffdayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        startDay: this.props.startDay,
        endDay: this.props.endDay,
        type: this.props.type,
      },
      errors: {
        startDay: null,
        endDay: null,
        type: null,
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.fields);
    // this.props.editOffday(this.state.fields);
    // <Redirect to="/offdays" />
    this.props.history.push('/offdays');
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  handleStartDateChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        startDay: date,
      },
      errors: {
        ...this.state.errors,
        startDay: validators.startDay(date),
      },
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        endDay: date,
      },
      errors: {
        ...this.state.errors,
        endDay: validators.endDay(date),
      },
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <SCUpdateOffdayForm onSubmit={(e) => this.handleSubmit(e)}>
        <div className='form-item'>
          <label htmlFor='type'>Select off day type:</label>
          <select
            name='type'
            value={fields.type}
            onChange={(e) => this.handleChange(e)}>
            <option value=''></option>
            <option value='holidays'>Holidays</option>
            <option value='sickness'>Sick days</option>
            <option value='off-days'>Off days</option>
          </select>
        </div>
        <div className='calendar-wrapper'>
          <div className='form-item'>
            <label htmlFor='startDay'>First day:</label>
            <Calendar
              name='startDay'
              value={fields.startDay}
              onChange={this.handleStartDateChange}
            />
          </div>
          <div className='form-item'>
            <label htmlFor='endDay'>Last day:</label>
            <Calendar
              name='endDay'
              value={fields.endDay}
              onChange={this.handleEndDateChange}
            />
          </div>
        </div>
        <button type='submit' className='btn-submit'>
          Update
        </button>
      </SCUpdateOffdayForm>
    );
  }
}

export default withRouter(withAuth(UpdateOffdayForm));
