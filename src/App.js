import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from  './pages/Signup/Signup'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Signup} />
        </Switch>
      </div>
    )
  }
}

export default App;
