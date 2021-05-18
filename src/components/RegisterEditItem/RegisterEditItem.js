import React, { Component } from 'react';
import SCRegisterEditItem from './RegisterEditItem.styled';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';
import JourneyService from '../../services/journeys.service';
import TimePicker from 'react-time-picker';

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

    this.journeyService = new JourneyService();
  }
  componentDidMount() {
    this.journeyService.getOne(this.props.match.params.id).then((response) => {
      this.setState({
        fields: response.data,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.journeyService
      .updateOne(this.props.match.params.id, this.state.fields)
      .then((response) => {
        this.props.history.goBack();
      })
      .catch((error) => console.error(error))
      ;

  }

  handleStartHourChange = (time) => {
    this.setState({
      fields: {
        ...this.state.fields,
        startHour: time,
      },
      errors: {
        ...this.state.errors,
        startHour: validators.startHour(time),
      },
    });
  };

  handleEndHourChange = (time) => {
    this.setState({
      fields: {
        ...this.state.fields,
        endHour: time,
      },
      errors: {
        ...this.state.errors,
        endHour: validators.endHour(time),
      },
    });
  };

  handleBreakStartHourChange = (time) => {
    this.setState({
      fields: {
        ...this.state.fields,
        startBreak: time,
      },
      errors: {
        ...this.state.errors,
        startBreak: validators.startBreak(time),
      },
    });
  };

  handleBreakEndHourChange = (time) => {
    this.setState({
      fields: {
        ...this.state.fields,
        endBreak: time,
      },
      errors: {
        ...this.state.errors,
        endBreak: validators.endBreak(time),
      },
    });
  };

  handleChange = (e) => {
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
  };


  render() {
    const { fields } = this.state;
    return (
      <>
        {this.props.match.params.id}
        <SCRegisterEditItem onSubmit={(e) => this.handleSubmit(e)}>
          <div className='details-wrapper'>
            <div className='work-hour'>
              <TimePicker
                name='startHour'
                value={this.state.fields.startHour}
                onChange={(e) => this.handleStartHourChange(e)}
                disableClock
                format='HH:mm'
              />
              <p className='start-style'>
                Start Hour: {this.state.fields.startHour}
              </p>
              <TimePicker
                name='endHour'
                value={this.state.fields.endHour}
                onChange={(e) => this.handleEndHourChange(e)}
                disableClock
                format='HH:mm'
              />
              <p className='end-style'>End Hour: {this.state.fields.endHour}</p>
            </div>
            <div className='break-hour'>
              <TimePicker
                name='startBreak'
                value={this.state.fields.startBreak}
                onChange={(e) => this.handleBreakStartHourChange(e)}
                disableClock
                format='HH:mm'
              />
              <p className='start-style'>
                Start Break: {this.state.fields.startBreak}
              </p>
              <TimePicker
                name='endBreak'
                value={this.state.fields.endBreak}
                onChange={(e) => this.handleBreakEndHourChange(e)}
                disableClock
                format='HH:mm'
              />
              <p className='end-style'>
                End Break: {this.state.fields.endBreak}
              </p>
            </div>
          </div>
          <div className='standup-label'>
            <label>Prework Standup</label>
            <label>Afterwork Standup</label>
          </div>
          <div className='standup-wrapper'>
            <textarea
              name='morningStandup'
              value={this.state.fields.morningStandup}
              onChange={(e) => this.handleChange(e)}></textarea>
            <textarea
              name='eveningStandup'
              value={this.state.fields.eveningStandup}
              onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <button type='submit' className='btn-submit'>
            Save changes
          </button>
        </SCRegisterEditItem>
      </>
    );
  }
}

export default withRouter(withAuth(RegisterEditItem));
