import React, { Component } from 'react';
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

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
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required.';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email.';
    }

    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required.';
    } else if (value.length < 6) {
      message = 'Your password must be at least 6 characters long.';
    }
    return message;
  },
};

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      errors: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.fields);
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

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className='form-item'>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            name='firstName'
            value={fields.firstName}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            name='lastName'
            value={fields.lastName}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            value={fields.email}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button>Sign up</button>
      </form>
    );
  }
}
