import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvent } from '../../actions/event';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const FormEvent = ({ getEvent, event: { event, loading }, match }) => {
    useEffect(() => {
        getEvent(match.params.id);
    }, [getEvent, match.params.id]);

    return !loading && event && (
        <div className="container">
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Enrollment Form</h2>
                                <div className="bt-option">
                                    <Link to="/">Home</Link>
                                    <span>Form</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <iframe seamless="seamless" scrolling="no" src={event.formurl} style={{ overflow: "hidden" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div >
    )
}

FormEvent.propTypes = {
    getEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    event: state.event,
});

export default connect(
    mapStateToProps,
    { getEvent }
)(FormEvent);