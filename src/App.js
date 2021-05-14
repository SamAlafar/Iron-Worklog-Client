import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Signup from './pages/Signup/Signup';
import Signup from  './pages/Signup/Signup'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/' component={Signup} />
        </Switch>
      </div>
    )
  }
}

export default App;
