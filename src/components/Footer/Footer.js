import React, { Component } from 'react'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
          <div className='footer'>
            <div className='footer-list'>
                <li>General Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
            </div>

            <div className="footer-copyright">
                <p>© Developed by Iron Worklog</p>
            </div>
          </div>
        );
    }
}
