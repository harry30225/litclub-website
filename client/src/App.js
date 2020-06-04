import React,{Fragment,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import AdminLogin from './components/auth/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const  App=()=>{
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return(
  <Provider store={store}>
  <Router>
  <Fragment>
    <Navbar />
    <section className="container">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/blogs" component={Blogs} />
        <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
      </Switch>
    </section>
  </Fragment>
  </Router>
  </Provider>
)};
export default App;
