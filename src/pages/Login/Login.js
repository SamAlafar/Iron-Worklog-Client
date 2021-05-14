import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { withAuth } from '../../context/auth.context'

class Login extends Component {
    render() {
        return (
            <div>
                <LoginForm login={this.props.login} />
            </div>
        )
    }
}

export default withAuth(Login)