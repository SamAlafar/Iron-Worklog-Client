import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';

function Dashboard(props) {
  return (
    <div>
      <Navbar />
      {props.user.firstName}
      {props.user.lastName}
    </div>
  );
}

export default withAuth(Dashboard);
