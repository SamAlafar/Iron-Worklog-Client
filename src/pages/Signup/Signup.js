import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { withAuth } from '../../context/auth.context'


class Signup extends Component {
    render() {
        return (
            <div>
                <SignupForm signup={this.props.signup}/>
            </div>
        )
    }
}

export default withAuth(Signup)