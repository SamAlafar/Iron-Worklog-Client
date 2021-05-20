import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import SCUpdateOffdayForm from './UpdateOffdayForm.styled';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';
import OffdaysService from '../../services/offdays.service';
import dayjs from 'dayjs';

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

    this.offdaysService = new OffdaysService();
  }
  

  componentDidMount() {    
    this.offdaysService.getOne(this.props.match.params.id).then((response) => {
      this.setState({
        fields: response.data,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.offdaysService.updateOne(this.props.match.params.id, this.state.fields)
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
      this.props.history.goBack();
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
              value={ new Date(dayjs(fields.startDay).format('YYYY-MM-DD')) }
              onChange={(date) => this.handleDateChange(date, 'startDay')}
            />
          </div>
          <div className='form-item'>
            <label htmlFor='endDay'>Last day:</label>
            <Calendar
              name='endDay'
              value={ new Date(dayjs(fields.endDay).format('YYYY-MM-DD')) }            
              onChange={(date) => this.handleDateChange(date, 'endDay')}
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
