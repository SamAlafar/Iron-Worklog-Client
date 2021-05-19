import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterItem from '../../components/RegisterItem/RegisterItem';
import Calendar from 'react-calendar';
import SCRegisters from './Registers.styled';
import { withAuth } from '../../context/auth.context';
import JourneyService from '../../services/journeys.service';

class Registers extends Component {
  //INITIAL STATE OF THE REGISTERS OF EACH USER
  state = {
    registers: [],
  };

  journeyService = new JourneyService();

  deleteRegister(id) {
    this.journeyService
    .deleteOne(id)
    .then((response) => {
      const registersCopy = 
      this.state.registers.filter((register) => {
        if(id !== register.id) {
          return register;
        }
      })
      this.setState({
        registers: registersCopy
      })
    })
  }

  componentDidMount() {
    //CALL API TO GET ALL REGISTERS OF USER AND UPDATE THE INITIAL STATE
    this.journeyService
      .get()
      .then((response) => {
        this.setState({
          registers: response.data,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <Navbar />
        <SCRegisters>
          <h1>Registers</h1>
          <div className='registers-container'>
            <div className='registers-wrapper'>
              {this.state.registers.map((register) => {
                return <RegisterItem key={register.id} register={register} deleteRegister={() => this.deleteRegister(register.id)} />;
              })}
            </div>
            <div className='calendar-wrapper'>
              <Calendar />
            </div>
          </div>
        </SCRegisters>
      </>
    );
  }
}

export default withAuth(Registers);
