import React, { Component } from 'react';
import SCEditProfileForm from './EditProfileForm.styled';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

const validators = {
  firstName: (value) => {
    let message;
    if (!value) {
      message = 'Your name is required.';
    }
    return message;
  },
  lastName: (value) => {
    let message;
    if (!value) {
      message = 'Your last name is required.';
    }
    return message;
  },
  birthDate: (value) => {
    let message;
    if (!value) {
      message = 'Your birth date is required.';
    }
    return message;
  },
  startContract: (value) => {
    let message;
    if (!value) {
      message = 'Your intial starting contract date is required.';
    }
    return message;
  },
  profilePic: (value) => {
    let message;
    if (!value) {
      message = 'Your picture is required.';
    }
    return message;
  },
};

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        birthDate: new Date(),
        startContract: new Date(),
        profilePic: null,
      },
      errors: {
        firstName: null,
        lastName: null,
        birthDate: null,
        startContract: null,
        profilePic: null,
      },
    };
  }
  componentDidMount() {
    this.setState({
      fields: {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        birthDate: this.props.user.birthDate,
        startContract: this.props.user.startContract,
        profilePic: this.props.user.profilePic,
      },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const uploadData = new FormData();
    Object.keys(this.state.fields).forEach((key) => {
      console.log(this.state.fields[key]);
      uploadData.append(key, this.state.fields[key]);
    });
    console.log(uploadData);
    this.props.edit(uploadData);
    this.props.history.push('/profile');
  }

  handleChange(e) {
    const { name, value, type, files } = e.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: type === 'file' ? files[0] : value,
      },
      errors: {
        ...this.state.errors,
        [name]:
          type === 'file'
            ? validators[name](files[0])
            : validators[name](value),
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
      <SCEditProfileForm onSubmit={(e) => this.handleSubmit(e)}>
        <div className='name-wrapper'>
          <label htmlFor='firstName'>
            First Name:
            <input
              placeholder='First Name'
              type='text'
              name='firstName'
              value={fields.firstName}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label htmlFor='lastName'>
            Last Name:
            <input
              placeholder='Last Name'
              type='text'
              name='lastName'
              value={fields.lastName}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='picture-wrapper'>
          <label htmlFor='profilePic'>
            Edit your profile pic:
            <input
              type='file'
              name='profilePic'
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='calendar-wrapper'>
          <label>
            Select your birth date:
            <Calendar
              className='react-calendar'
              name='birthDate'
              value={new Date(dayjs(fields.birthDate).format('YYYY-MM-DD'))}
              onChange={(date) => this.handleDateChange(date, 'birthDate')}
            />
          </label>
          <label>
            Select your start contract date:
            <Calendar
              className='react-calendar'
              name='startContract'
              value={new Date(dayjs(fields.startContract).format('YYYY-MM-DD'))}
              onChange={(date) => this.handleDateChange(date, 'startContract')}
            />
          </label>
        </div>
        <div className='save-button'>
          <button type='submit'>Save changes</button>
        </div>
      </SCEditProfileForm>
    );
  }
}

export default withRouter(withAuth(EditProfileForm));
