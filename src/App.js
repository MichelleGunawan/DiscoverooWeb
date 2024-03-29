import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Components Import
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Discover from './components/Discover/Discover';
import NotFound from './components/NotFound';
import Profile from './components/Profile/Profile';
import Appointments from './components/Appointments/Appointments'

export default class App extends Component {

  render() {
    return(
      <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/Signin" component={Signin} />
            <Route path = "/Signup" component={Signup} />
            <Route path = "/Discover" component={Discover} />
            <Route path = "/Profile" component={Profile} />
            <Route path = "/Appointments" component={Appointments} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}
