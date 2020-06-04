import React , { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import FormElement from '../layout/FormElement';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const AdminLogin = ({login,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const { username, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault();
            console.log(formData);
            login(username, password);
        };
    if (isAuthenticated) {
            return <Redirect to='/admin/addevent' />;
        };
    return (
        <Fragment> 
             <div className="container card mb-3 ">
          <div className="card-header">Login
          </div>
          <div className="card-body">
              <form onSubmit={e => onSubmit(e)} >
              <FormElement label="Username"  name="username" placeholder="Enter Username" type="text" value={username} onChange={e => onChange(e)}/>
              <FormElement label="Password"  name="password" placeholder="Enter Password" type="password" value={password} onChange={e => onChange(e)}/>
              <input
                  type="submit"
                  value="Login"
                  className="btn btn-light btn-block"
                  />
              </form> 
          </div>
      </div>
      </Fragment>
  )
};
AdminLogin.propTypes = {
    login: PropTypes.func.isRequired,
  };
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
    mapStateToProps,
    { login }
)(AdminLogin);