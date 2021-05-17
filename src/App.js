import { Switch, Route } from 'react-router-dom';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer'
import Offdays from './pages/Offdays/Offdays';
import OffdaysEdit from './pages/OffdaysEdit/OffdaysEdit';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <AnonRoute exact path='/signup' component={Signup} />
        <AnonRoute exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/profile-edit' component={ProfileEdit} />
        <PrivateRoute exact path='/offdays' component={Offdays} />
        <PrivateRoute exact path='/offdays/edit' component={OffdaysEdit} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
