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

//import Test from './components/Test/Test';

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
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}
