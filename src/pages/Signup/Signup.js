import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { withAuth } from '../../context/auth.context'
import './Signup.scss'

class Signup extends Component {
    handleClick() {
        this.props.googlelogin();
    }

    render() {
        return (
            <div>
                <SignupForm signup={this.props.signup}/>

                <button className='google-button' onClick={() => this.handleClick()}><img className='google-logo' src='/img/google.png'/>Sign up with Google</button>
            </div>
        )
    }
}

export default withAuth(Signup)