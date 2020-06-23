import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Footer = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-text">
                            <div className="ft-logo">
                                <Link to="#" className="footer-logo"><img src="/img/footer-logo.png" alt="" /></Link>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/events">Event</Link></li>
                                {!loading && isAuthenticated && (
                                    <Fragment>
                                        <li><Link to='/admin/addevent'>Add Event</Link></li>
                                        <li><Link to='/admin/addblog'>Add Blog</Link></li>
                                        <li><Link onClick={logout} to='/'>Logout</Link></li>
                                    </Fragment>
                                )
                                }
                            </ul>
                            <div className="copyright-text"><p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This WebApp is made with <i className="fa fa-heart" aria-hidden="true"></i> by Jasshan and Harshit
                            </p></div>
                            <div className="ft-social">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

Footer.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Footer);

