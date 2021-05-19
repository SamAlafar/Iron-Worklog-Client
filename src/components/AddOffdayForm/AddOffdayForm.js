import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import SCAddOffdayForm from './AddOffdayForm.styled';
import Calendar from 'react-calendar';
import OffdaysService from '../../services/offdays.service';

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

    this.offdaysService = new OffdaysService();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.offdaysService.create(this.state.fields)
    .then(response => {
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

      this.props.handleShowAdd();
      this.props.refreshState();
    })
    
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

  handleDateChange = (date, type) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [type]: date,
      },
      errors: {
        ...this.state.errors,
        [type]: validators[type](date),
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
              onChange={(date) => this.handleDateChange(date, 'startDay')}
            />
          </div>
          <div className='form-item'>
            <label htmlFor='endDay'>Last day:</label>
            <Calendar
              name='endDay'
              value={fields.endDay}
              onChange={(date) => this.handleDateChange(date, 'endDay')}
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
