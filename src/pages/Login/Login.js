import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { withAuth } from '../../context/auth.context'

class Login extends Component {
    render() {
        return (
          <div>
            <LoginForm login={this.props.login} />

            <button
              className='google-button'
              onClick={() => this.handleClick()}>
              <img className='google-logo' src='/img/google.png' />
              Login with Google
            </button>
          </div>
        );
    }
}

export default withAuth(Login)