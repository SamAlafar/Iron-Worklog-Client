import React, { Component } from 'react';
import SCRegisterEditItem from './RegisterEditItem.styled';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

const validators = {
  startHour: (value) => {
    let message;
    if (!value) {
      message = 'Select an starting hour.';
    }
    return message;
  },
  endHour: (value) => {
    let message;
    if (!value) {
      message = 'Select an ending hour.';
    }
    return message;
  },
  startBreak: (value) => {
    let message;
    if (!value) {
      message = 'Select an starting break-hour.';
    }
    return message;
  },
  endBreak: (value) => {
    let message;
    if (!value) {
      message = 'Select an ending break-hour.';
    }
    return message;
  },
  morningStandup: (value) => {
    let message;
    if (!value) {
      message = 'Update your morning standup.';
    }
    return message;
  },
  eveningStandup: (value) => {
    let message;
    if (!value) {
      message = 'Update your evening standup.';
    }
    return message;
  },
};

class RegisterEditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        startHour: this.props.startHour,
        endHour: this.props.endHour,
        startBreak: this.props.startBreak,
        endBreak: this.props.endBreak,
        morningStandup: this.props.morningStandup,
        eveningStandup: this.props.eveningStandup,
      },
      errors: {
        startHour: null,
        endHour: null,
        startBreak: null,
        endBreak: null,
        morningStandup: null,
        eveningStandup: null,
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.fields);
    console.log(this.props.history);
    this.props.history.goBack();
  }

  handleChange(e) {
    const { name, value } = e.target.value;
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

  handleStartHourChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        startHour: date,
      },
      errors: {
        ...this.state.errors,
        startHour: validators.startHour(date),
      },
    });
  };

  handleEndHourChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        endHour: date,
      },
      errors: {
        ...this.state.errors,
        endHour: validators.endHour(date),
      },
    });
  };

  handleBreakStartHourChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        startBreak: date,
      },
      errors: {
        ...this.state.errors,
        startBreak: validators.startBreak(date),
      },
    });
  };

  handleBreakEndtHourChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        endBreak: date,
      },
      errors: {
        ...this.state.errors,
        endBreak: validators.endBreak(date),
      },
    });
  };

  handleMorningStandupChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        morningStandup: date,
      },
      errors: {
        ...this.state.errors,
        morningStandup: validators.morningStandup(date),
      },
    });
  };

  handleEveningStandupChange = (date) => {
    this.setState({
      fields: {
        ...this.state.fields,
        eveningStandup: date,
      },
      errors: {
        ...this.state.errors,
        eveningStandup: validators.eveningStandup(date),
      },
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <>
        <SCRegisterEditItem onSubmit={(e) => this.handleSubmit(e)}>
          <div className='details-wrapper'>
            <div className='work-hour'>
              <p className='start-style'>Start Hour: 09:00</p>
              <p className='end-style'>End Hour: 18:00</p>
            </div>
            <div className='break-hour'>
              <p className='start-style'>Start Break: 13:30</p>
              <p className='end-style'>End Break: 14:30</p>
            </div>
          </div>
          <div className='standup-label'>
            <label>Prework Standup</label>
            <label>Afterwork Standup</label>
          </div>
          <div className='standup-wrapper'>
            <textarea></textarea>

            <textarea></textarea>
          </div>
          <button type='submit' className='btn-submit' >
            Update Register
          </button>
        </SCRegisterEditItem>
      </>
    );
  }
}

export default withRouter(withAuth(RegisterEditItem));
