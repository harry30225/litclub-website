import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/event'

const EventElement = (props) => {
    const { deleteEvent, name, date, venue, description, eventdate, picture,auth: { isAuthenticated }, id } = props
    return (
        <div className="main">
            <div className="card card-body mb-2">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ha-pic">
                            <img src={picture.data} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ha-text">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <ul>
                                <li><span className="icon_check"></span> {venue}</li>
                                <li>
                                    <span className="icon_check"></span>
                                    <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD" > {eventdate}
                                    </Moment>
                                </li>
                            </ul>
                            <Link to="#" className="ha-btn">Discover Now</Link>
                        </div>
                    </div>
                    {isAuthenticated && (
                        <div className="col-lg-2" >
                            <button style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={e => deleteEvent(id)} className="btn btn-light btn-lg">
                                <i className="fa fa-trash" />
                            </button>
                            <Link style={{ cursor: 'pointer', float: 'right', color: 'black' }} to={`/admin/editevent/${id}`} className="btn btn-light btn-lg">
                                <i className="fa fa-pencil" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};


EventElement.propTypes = {
    auth: PropTypes.object.isRequired,
    deleteEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteEvent })(EventElement);