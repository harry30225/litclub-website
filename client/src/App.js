import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import AdminLogin from './components/auth/AdminLogin';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const  App=()=>(
  <Router>
  <Fragment>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className="container">
      <Switch>
        <Route exact path="/admin/login" component={AdminLogin} />
      </Switch>
    </section>
  </Fragment>
  </Router>
);
export default App;
