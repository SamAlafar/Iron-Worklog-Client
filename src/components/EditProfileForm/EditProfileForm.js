import React, { Component } from 'react';
import SCEditProfileForm from './EditProfileForm.styled';
import Calendar from 'react-calendar';

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
};

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: this.props.user.firstName,
        lastName: this.prop.user.lastName,
        birthDate: this.props.user.birthDate,
        startContract: this.props.user.startContract,
      },
      errors: {
        firstName: null,
        lastName: null,
        birthDate: null,
        startContract: null,
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.edit(this.state.fields);
    this.setState({
      fields: {
        firstName: '',
        lastName: '',
        birthDate: '',
        startContract: '',
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
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <SCEditProfileForm>
        <input
          htmlFor='firstName'
          placeholder='First Name'
          type='text'
          name='firstName'
          value={fields.firstName}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          htmlFor='lastName'
          placeholder='Last Name'
          type='text'
          name='lasttName'
          value={fields.lastName}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          htmlFor='birthDate'
          placeholder='Birth Date'
          type='text'
          name='birthDate'
          value={fields.birthDate}
          onChange={(e) => this.handleChange(e)}
        />
      </SCEditProfileForm>
    );
  }
}
