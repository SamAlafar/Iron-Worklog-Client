import React, { Component } from 'react';
import SCAddOffdayForm from './AddOffdayForm.styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

export default class AddOffdayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        startDay: new Date(),
        endDay: new Date(),
        type: '',
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
    // this.props.createOffday(this.state.fields);
    this.setState({
      fields: {
        startDay: new Date(),
        endDay: new Date(),
        type: '',
      },
      errors: {
        startDay: null,
        endDay: null,
        type: null,
      },
    });
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
      <SCAddOffdayForm onSubmit={(e) => this.handleSubmit(e)}>
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
          Send
        </button>
      </SCAddOffdayForm>
    );
  }
}
