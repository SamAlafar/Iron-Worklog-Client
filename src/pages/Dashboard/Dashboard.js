import React from 'react';
import SCDashboard from './Dashboard.styled';
import Navbar from '../../components/Navbar/Navbar';
import { withAuth } from '../../context/auth.context';
import UserInfo from '../../components/UserInfo/UserInfo';

function Dashboard(props) {
  return (
    <>
      <Navbar />
      <SCDashboard>
      </SCDashboard>
    </>
  );
}

export default withAuth(Dashboard);
