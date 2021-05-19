import React, { Component } from 'react';
import { withAuth } from '../../context/auth.context';
import JourneyService from '../../services/journeys.service';
import dayjs from 'dayjs';

class JourneyCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        date: this.props.journey.date,
        startHour: this.props.journey.startHour,
        endHour: this.props.journey.endHour,
        startBreak: this.props.journey.startBreak,
        endBreak: this.props.journey.endBreak,
        morningStandup: this.props.journey.morningStandup,
        eveningStandup: this.props.journey.eveningStandup,
      },
      errors: {
        startHour: null,
        endHour: null,
        startBreak: null,
        endBreak: null,
        morningStandup: null,
        eveningStandup: null,
      },
      currentJourneyId: this.props.journey.id,
    };

    this.journeyService = new JourneyService();
  }

  componentWillReceiveProps(props) {
    this.setState({
      fields: {
        date: props.journey.date,
        startHour: props.journey.startHour,
        endHour: props.journey.endHour,
        startBreak: props.journey.startBreak,
        endBreak: props.journey.endBreak,
        morningStandup: props.journey.morningStandup,
        eveningStandup: props.journey.eveningStandup,
      },
      currentJourneyId: props.journey.id,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.journeyService
      .updateOne(this.state.currentJourneyId, {
        morningStandup: this.state.fields.morningStandup,
        eveningStandup: this.state.fields.eveningStandup,
      })
      .then((response) => {
        this.props.refreshState();
      });
  }

  onClick(e) {
    e.preventDefault();
    const type = e.target.id;
    const hour = dayjs().format('HH:mm').toString();
    this.setState(
      {
        fields: {
          ...this.state.fields,
          [type]: hour,
        },
      },
      () => {
        if (!this.state.currentJourneyId) {
          const data = this.state.fields;
          this.journeyService
            .create(data)
            .then((response) => {
              this.setState({
                currentJourneyId: response.data.id,
              });

              this.props.refreshState();
            })
            .catch((error) => console.error(error));
        } else {
          this.journeyService
            .updateOne(this.state.currentJourneyId, this.state.fields)
            .then((response) => {
              this.props.refreshState();
            })
            .catch((error) => console.error(error));
        }
      }
    );
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <div>
        {this.state.fields.startHour ? (
          <button
            id='endHour'
            onClick={(e) => this.onClick(e)}
            disabled={this.state.fields.endHour}>
            End Journey
          </button>
        ) : (
          <button id='startHour' onClick={(e) => this.onClick(e)}>
            Start Journey
          </button>
        )}
        {this.state.fields.startBreak ? (
          <button
            id='endBreak'
            onClick={(e) => this.onClick(e)}
            disabled={this.state.fields.endHour || this.state.fields.endBreak}>
            End Lunch Time
          </button>
        ) : (
          <button
            id='startBreak'
            onClick={(e) => this.onClick(e)}
            disabled={this.state.fields.endHour}>
            Start Lunch Time
          </button>
        )}

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea
            name='morningStandup'
            value={this.state.fields.morningStandup}
            onChange={(e) => this.onChange(e)}
            disabled={this.state.fields.endHour}></textarea>
          <textarea
            name='eveningStandup'
            value={this.state.fields.eveningStandup}
            onChange={(e) => this.onChange(e)}
            disabled={this.state.fields.endHour}></textarea>
          <button type='submit' disabled={this.state.fields.endHour}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(JourneyCreateForm);
