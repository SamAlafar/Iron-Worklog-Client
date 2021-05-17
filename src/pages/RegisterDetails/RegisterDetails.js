import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterDetailItem from '../../components/RegisterDetailItem/RegisterDetailItem';
import Calendar from 'react-calendar';
import SCRegisterDetails from './RegisterDetails.styled';
import { withAuth } from '../../context/auth.context';
import { Link } from 'react-router-dom' 

class RegisterDetails extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SCRegisterDetails>
          <h1>My Register Details</h1>
          <div className='action-button'>
            <Link to='/registers/edit/:id'>
              <button>
                <p>Edit</p>
              </button>
            </Link>
          </div>
          <RegisterDetailItem />
        </SCRegisterDetails>
      </>
    );
  }
}
export default withAuth(RegisterDetails);
