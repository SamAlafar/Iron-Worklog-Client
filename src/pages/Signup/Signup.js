import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { withAuth } from '../../context/auth.context'
import {SCButton, SCImage} from './Signup.styled'
//import './Signup.scss'

class Signup extends Component {
    handleClick() {
        this.props.googlelogin();
    }

    render() {
        return (
            <div>
                <SignupForm signup={this.props.signup}/>

                <SCButton onClick={() => this.handleClick()}><SCImage src='/img/google.png'/>Sign up with Google</SCButton>
            </div>
        )
    }
}

export default withAuth(Signup)