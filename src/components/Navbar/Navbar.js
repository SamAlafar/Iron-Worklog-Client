import React, { Component } from 'react';
import SCNavbar from './Navbar.styled';
import { NavLink, Link } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

class Navbar extends Component {
  state = {
    showUserMenu: false,
  };

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

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
              {`Welcome ${this.props.user.firstName}`}
            </p>
            <a href="/" onClick={(e) => this.showMenu(e)}>
              <img src={this.props.user.profilePic} alt='User' />
            </a>
            {this.state.showUserMenu ? (
              <div className='user-menu'>
                <Link to='/profile-edit'>Edit Profile</Link>
                <Link to='/dashboard' onClick={(e)=>this.logout(e)}>Logout</Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default withAuth(Navbar);
