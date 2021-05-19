import React, { Component } from 'react';
import SCNavbar from './Navbar.styled';
import { NavLink } from 'react-router-dom';
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
  };

  render() {
    return (
      <>
        <SCNavbar>
          <NavLink to='/dashboard' activeStyle>
            <img src='/img/navbar-logo2.png' alt='Iron Worklog Logo' />
          </NavLink>

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
            <p>{`Welcome ${this.props.user.firstName}`}</p>
            <a href='/' onClick={(e) => this.showMenu(e)}>
              <img src={this.props.user.profilePic} alt='User' />
            </a>
            {this.state.showUserMenu ? (
              <div className='user-menu'>
                <NavLink to='/profile' activeClassName='active'>
                  Profile
                </NavLink>
                <NavLink to='/profile-edit' activeClassName='active'>
                  Edit Profile
                </NavLink>
                <NavLink to='/dashboard' onClick={(e) => this.logout(e)}>
                  Logout
                </NavLink>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default withAuth(Navbar);
