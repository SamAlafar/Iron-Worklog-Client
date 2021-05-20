import React from 'react';
import SCHome from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <SCHome className='home-wrapper'>
      <img
        className='home-logo'
        src='/img/navbar-logo1.png'
        alt='Iron Worklog Logo'
      />
      <section>
        <div className="text-container">
          <h1>IRON WORKLOG 🦾</h1>
          <h2>The fastest way to track the working hours!!!</h2>
        </div>
        <img src='/img/IronWorklog-Sample.png' alt='App screenshot' />
      </section>

      <div className='home-button-container'>
        <Link to='/login'>
          <button className="button-action">Login</button>
        </Link>
        <Link to='/signup'>
          <button className="button-action">Sign up</button>
        </Link>
      </div>
    </SCHome>
  );
};
export default Home;
