import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterItem from '../../components/RegisterItem/RegisterItem';
import Calendar from 'react-calendar';
import SCRegisters from './Registers.styled';
import { withAuth } from '../../context/auth.context';

class Registers extends Component {
  //INITIAL STATE OF THE REGISTERS OF EACH USER
  state = {
    registers: [],
  };

  componentDidMount() {
    //CALL API TO GET ALL REGISTERS OF USER AND UPDATE THE INITIAL STATE
    //this.setState({
    //    registers: ...
    // })
  }

  render() {
    return (
      <>
        <Navbar />
        <SCRegisters>
          <h1>Registers</h1>
          <div className='registers-wrapper'>
            <RegisterItem />
          </div>
          <div className='calendar'>
            <Calendar />
          </div>
        </SCRegisters>
      </>
    );
  }
}

export default withAuth(Registers);
