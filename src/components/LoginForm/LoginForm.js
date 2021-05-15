import React, { Component } from 'react';
import './LoginForm.scss'
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required.';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Please enter a valid email address.';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required.';
    } else if (value.length < 6) {
      message = 'Please enter a valid password.';
    }
    return message;
  },
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: '',
      },
      errors: {
        email: null,
        password: null,
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.fields);
    this.setState({
      fields: {
        email: '',
        password: '',
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
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <form className='login-form' onSubmit={(e) => this.handleSubmit(e)}>
        <div className='login-form-item'>
          <img className='login-image' src='/img/logo.png' alt='logo' />
          <input
            htmlFor='email'
            placeholder='Email'
            type='text'
            name='email'
            value={fields.email}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className='login-form-item'>
          <input
            htmlFor='password'
            placeholder='Password'
            type='password'
            name='password'
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button className='login-button' type='submit'>Login</button>
      </form>
    );
  }
}
