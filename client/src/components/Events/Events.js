import React ,{ useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';


import EventElement from "../layout/EventElement"

const Events = ({ getEvents, event: { events, loading }}) => {
    useEffect(() => {
        getEvents();
      }, [getEvents]);

    return !loading && (
        <div>
        {events.map(event => (
          <EventElement name={event.name} date={event.date} description={event.description} venue={event.venue}  key={event._id} />
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