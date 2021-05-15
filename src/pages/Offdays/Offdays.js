import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';

class Offdays extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Offdays</h1>
      </div>
    )
  }
}

export default withAuth(Offdays);
