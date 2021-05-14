import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

const Home = () => {
    return (
        <div className="home-wrapper">
            <img src="" alt="App screenshot"></img>
            <h1>TITULO</h1>
            <h2>SUBTITULO (CATCHPHRASE)</h2>
            <div>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Sign up</button></Link>                
            </div>
        </div>
    )
}
export default withAuth(Home);