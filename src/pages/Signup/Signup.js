import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { withAuth } from '../../context/auth.context'

class Signup extends Component {
    handleClick() {
        this.props.googlelogin();
    }

    render() {
        return (
            <div>
                <SignupForm signup={this.props.signup}/>

                <button onClick={() => this.handleClick()}>Sign up with Google</button>
            </div>
        )
    }
}

export default withAuth(Signup)