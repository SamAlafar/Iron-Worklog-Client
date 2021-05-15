import { Switch, Route } from 'react-router-dom';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import Home from './pages/Home/Home';
import Signup from  './pages/Signup/Signup'
import Login from './pages/Login/Login'

const App = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <AnonRoute exact path='/signup' component={Signup} />
          <AnonRoute exact path='/login' component={Login} />
        </Switch>
      </div>
    )
}

export default App;
