import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="/img/logo.png" alt="" />
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
