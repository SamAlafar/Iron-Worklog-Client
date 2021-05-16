import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { withAuth } from '../../context/auth.context'
import {SCButton, SCImage} from './Login.styled'

class Login extends Component {
    render() {
        return (
          <div>
            <LoginForm login={this.props.login} />

            <SCButton
              onClick={() => this.handleClick()}>
              <SCImage src='/img/google.png' />
              Login with Google
            </SCButton>
          </div>
        );
    }
}

export default withAuth(Login)