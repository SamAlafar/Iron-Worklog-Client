import React, { Component } from 'react';
import AuthService from '../services/auth.service';

const { Consumer, Provider } = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    user: null,
  };

  authService = new AuthService();

  componentDidMount = () => {
    this.authService
      .loggedin()
      .then((response) =>
        this.setState({
          isLoggedIn: true,
          user: response.data,
          isLoading: false,
        })
      )
      .catch((err) =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  };

  signup = (data) => {
    this.authService
      .signup(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch((err) => this.setState({ isLoggedIn: false, user: null }));
  };

  login = (data) => {
    this.authService
      .login(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedIn: false, user: null }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  edit = (data) => {
    this.authService
      .edit(data)
      .then((response) => this.setState({ ...this.state, user: response.data }))
      .catch((error) => console.error(error));
  };

  delete = () => {
    this.authService
      .delete()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  render = () => {
    const { isLoggedIn, isLoading, user } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <Provider
        value={{
          isLoading,
          isLoggedIn,
          user,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          edit: this.edit,
          remove: this.delete,
        }}>
        {this.props.children}
      </Provider>
    );
  };
}

const withAuth = (WrappedComponent) => {
  return (props) => {
    return (
      <Consumer>
        {(value) => {
          const { isLoading, isLoggedIn, user, signup, login, logout, edit, remove } =
            value;

          return (
            <WrappedComponent
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              user={user}
              signup={signup}
              login={login}
              logout={logout}
              edit={edit}
              delete={remove}
              {...props}
            />
          );
        }}
      </Consumer>
    );
  };
};

export { AuthProvider, withAuth };
