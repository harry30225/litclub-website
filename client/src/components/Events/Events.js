import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';


import EventElement from "../layout/EventElement"

const Events = ({ getEvents, event: { events, loading } }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return !loading && (
    <div>
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Our Events</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {events.map(event => (
        <EventElement name={event.name} date={event.date} description={event.description} venue={event.venue} eventdate={event.eventdate} key={event._id} id={event._id} />
      ))}
    </div>
  )
}

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Events);