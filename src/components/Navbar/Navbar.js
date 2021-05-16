import React, { Component } from 'react';
import SCNavbar from './Navbar.styled';
import { NavLink, Link } from 'react-router-dom';
// import { withAuth } from '../../context/auth.context';

class Navbar extends Component {
  state = {
    showUserMenu: false,
  };

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  render() {
    return (
      <>
        <SCNavbar>
          <img src='/img/navbar-logo2.png' alt='Iron Worklog Logo' />

          <div className='nav-menu'>
            <NavLink to='/dashboard' activeStyle>
              Dashboard
            </NavLink>
            <NavLink to='/registers' activeStyle>
              Registers
            </NavLink>
            <NavLink to='/offdays' activeStyle>
              Off days
            </NavLink>
            <p>
              Welcome
              {/* {this.props.user.email} */}
            </p>
            <a onClick={(e) => this.showMenu(e)}>
              <img src='' alt='User picture' />
            </a>
            {this.state.showUserMenu ? (
              <div className='user-menu'>
                <Link to=''>Edit Profile</Link>
                <Link to=''>Logout</Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default Navbar;
