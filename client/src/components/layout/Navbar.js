import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
          <i className="fa fa-tag"/>{' '}
            LitClub App
          </Link >
          <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/"  >
            <i className="fa fa-tag"/>{' '}

            Events     
            </Link>                         
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/"  >
            <i className="fa fa-tag"/>{' '}

            Blogs     
            </Link>                         
            </li>
            {!loading && isAuthenticated &&(
                <li className="nav-item">
                    <a onClick={logout} className="nav-link" href='#!'>
                        <i className='fa fa-tag' />{' '}Logout
                    </a>                             
                </li>
                )}
            </ul>
            
          </div>
        </div>
      </nav>
          )
};
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);
