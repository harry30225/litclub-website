import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        //  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        //      <div className="container">
        //          <Link to="/" className="navbar-brand">
        //              <i className="fa fa-tag" />{' '}
        //      LitClub App
        //    </Link >
        //          <div>
        //              <ul className="navbar-nav mr-auto">
        //                  <li className="nav-item">
        //                      <Link className="nav-link" to="/events"  >
        //                          <i className="fa fa-tag" />{' '}
        //
        //      Events
        //      </Link>
        //                  </li>
        //                  <li className="nav-item">
        //                      <Link className="nav-link" to="/blogs"  >
        //                          <i className="fa fa-tag" />{' '}
        //
        //      Blogs
        //      </Link>
        //                  </li>
        //                  {!loading && isAuthenticated && (
        //                      <li className="nav-item">
        //                          <a onClick={logout} className="nav-link" href='#!'>
        //                              <i className='fa fa-tag' />{' '}Logout
        //              </a>
        //                      </li>
        //                  )}
        //              </ul>
        //
        //          </div>
        //      </div>
        //  </nav>

        //new navbar
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="img/logo.png" alt="" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <nav className="mainmenu mobile-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            {!loading && isAuthenticated && (
                                <li>
                                    <Link onClick={logout} to='/'>
                                        Logout
                     </Link>
                                </li>
                            )}
                            <li><Link to="/admin/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
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
