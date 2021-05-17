import { Switch, Route } from 'react-router-dom';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer'
import Offdays from './pages/Offdays/Offdays';
import Registers from './pages/Registers/Registers'
import OffdaysEdit from './pages/OffdaysEdit/OffdaysEdit';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <AnonRoute exact path='/signup' component={Signup} />
        <AnonRoute exact path='/login' component={Login} />
        <Route exact path='/offdays' component={Offdays} />
        <Route exact path='/registers' component={Registers} />
        <Route exact path='/offdays/edit' component={OffdaysEdit} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
