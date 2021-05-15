import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <img
        className='home-logo'
        src='/img/navbar-logo1.png'
        alt='Iron Worklog Logo'
      />
      <section>
        <div className="text-container">
          <h1>TITULO</h1>
          <h2>SUBTITULO (CATCHPHRASE)</h2>
        </div>
        <img src='/img/img-prueba.png' alt='App screenshot' />
      </section>

      <div className='home-button-container'>
        <Link to='/login'>
          <button className="button-action">Login</button>
        </Link>
        <Link to='/signup'>
          <button className="button-action">Sign up</button>
        </Link>
        <Link to='/offdays'>
          <button className="button-action">offdays</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
