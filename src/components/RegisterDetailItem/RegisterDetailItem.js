import React, { Component } from 'react';
import SCRegisterDetailItem from './RegisterDetailItem.styled';
import dayjs from 'dayjs';
import JourneyService from '../../services/journeys.service';
import { withAuth } from '../../context/auth.context'

class RegisterDetailItem extends Component {
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
      currentJourneyId: null,
    };

    this.journeyService = new JourneyService();
  }
  componentDidMount() {
    console.log(this.props)
    this.journeyService.getOne(this.props.match.params.id).then((response) => {
      this.setState({
        fields: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <SCRegisterDetailItem>
          <div className='details-wrapper'>
            <div className='work-hour'>
              <p className='start-style'>
                Start Hour: {this.state.fields.startHour}
              </p>
              <p className='end-style'>End Hour: {this.state.fields.endHour}</p>
            </div>
            <div className='break-hour'>
              <p className='start-style'>
                Start Break: {this.state.fields.startBreak}
              </p>
              <p className='end-style'>
                End Break: {this.state.fields.endBreak}
              </p>
            </div>
            <div className='worked-hours'>
              <p className='worked-style'>Worked Hours: 08:30</p>
              <p className='extra-style'>Extra Hours: 00:30</p>
            </div>
          </div>
          <div className='standup-wrapper'>
            <p>Prework Standup</p>
            <p>Afterwork Standup</p>
          </div>
        </SCRegisterDetailItem>
      </>
    );
  }
}

export default withAuth(RegisterDetailItem);
