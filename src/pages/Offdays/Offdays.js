import React, { Component } from 'react';
import SCOffdays from './Offdays.styled';
import Navbar from '../../components/Navbar/Navbar';
import AddOffdayForm from '../../components/AddOffdayForm/AddOffdayForm';
import OffdayItem from '../../components/OffdayItem/OffdayItem';
import { withAuth } from '../../context/auth.context';

class Offdays extends Component {
  // STATE WITH OFFDAYS LIST TO SEND BY PROPS TO THE COMPONENTS
  state = {
    offdays: [],
    showAddForm: false,
  };

  componentDidMount() {
    // CALL API TO GET ALL OFFDAYS OF THE USER
    // this.setState({
    //   offdays: blablabla
    // })
  }

  handleShowAdd = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <SCOffdays>
          <h1>Off days</h1>
          {/* ADD OFFDAY COMPONENT */}
          <div className="add-wrapper">
            <button className='btn-submit' onClick={() => this.handleShowAdd()}>
            {!this.state.showAddForm ? 'Add offdays' : 'Close'}
            </button>
          </div>
            {this.state.showAddForm ? <AddOffdayForm /> : ''}
            <div className="lists-wrapper">
              {/* HOLIDAYS COMPONENT */}
              <div className="holidays-wrapper">
                <h2>Holidays</h2>
                <p>Remaining days: XXX</p>
              <OffdayItem />
              </div>
              {/* ILLNESS / OFFDAYS COMPONENT */}
              <div className="offdays-wrapper">
              <h2>Off days and Sick days</h2>
              <p>Absence days: XXX</p>
              <OffdayItem />
              </div>
            </div>
        </SCOffdays>
      </>
    );
  }
}

export default withAuth(Offdays);
