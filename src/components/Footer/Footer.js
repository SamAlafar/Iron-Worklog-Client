import React, { Component } from 'react'
import {SCFooter, SCFooterList, SCFooterCopyright} from './Footer.styled'
//import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
          <SCFooter>
            <SCFooterList>
                <li>General Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
            </SCFooterList>

            <SCFooterCopyright>
                <p>© Developed by Iron Worklog</p>
            </SCFooterCopyright>
          </SCFooter>
        );
    }
}
