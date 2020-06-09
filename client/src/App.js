import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import AdminLogin from './components/auth/AdminLogin';
import PrivateRoute from './components/routing/PrivateRoute';

import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import SingleBlog from './components/Blogs/SingleBlog';
import AddEvent from './components/admin/AddEvent';
import EditEvent from './components/admin/EditEvent';
import AddBlog from './components/admin/AddBlog';




// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
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
              <Route exact path="/blog/:id" component={SingleBlog} />
              <PrivateRoute exact path="/admin/addevent" component={AddEvent} />
              <PrivateRoute exact path="/admin/editevent/:id" component={EditEvent} />
              <PrivateRoute exact path="/admin/addblog" component={AddBlog} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
};
export default App;
