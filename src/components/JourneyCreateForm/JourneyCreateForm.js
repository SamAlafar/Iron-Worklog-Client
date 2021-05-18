import React, { Component } from 'react';
import { withAuth } from '../../context/auth.context';
import JourneyService from '../../services/journeys.service';
import dayjs from 'dayjs';

class JourneyCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        date: dayjs(),
        startHour: null,
        endHour: null,
        startBreak: null,
        endBreak: null,
        morningStandup: '',
        eveningStandup: '',
      },
      errors: {
        startHour: null,
        endHour: null,
        startBreak: null,
        endBreak: null,
        morningStandup: null,
        eveningStandup: null,
      },
      currentJourneyId: null,
    };

    this.journeyService = new JourneyService();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.fields);
    //llamada a DB para actualizar el valor
    this.journeyService
      .updateOne(this.state.currentJourneyId, {
        morningStandup: this.state.fields.morningStandup,
        eveningStandup: this.state.fields.eveningStandup,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  onClick(e) {
    e.preventDefault();
    const type = e.target.id;
    const hour = dayjs().format('HH:mm').toString();
    console.log(hour);
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
            })
            .catch((error) => console.error(error));
        } else {
          this.journeyService
            .updateOne(this.state.currentJourneyId, this.state.fields)
            .then((response) => {
              console.log(response.data);
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

  componentDidMount() {
    //primero hara llamada al journeyservice y busca si existe algun journey para el dia de hoy
    this.journeyService.get().then((response) => {
      console.log(response.data);
      response.data.map((journey) => {
        if (journey.date && dayjs(journey.date).isSame(dayjs(), 'day')) {
          console.log(journey.date);
          this.setState({
            fields: {
              date: journey.date,
              startHour: journey.startHour,
              endHour: journey.endHour,
              startBreak: journey.startBreak,
              endBreak: journey.endBreak,
              morningStandup: journey.morningStandup,
              eveningStandup: journey.eveningStandup,
            },
            currentJourneyId: journey.id,
          });
        } else {
          console.log('else');
        }
      });
    });
    //si encuentra actualizara con id del registro si no hace nada
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
