import React , { useState, Fragment } from 'react';
import FormElement from '../layout/FormElement';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEvent } from '../../actions/event';

const Dashboard = ({addEvent}) => {
    const [formData, setFormData] = useState({
        name: '',
        venue: '',
        description: ''
      });
    
      const { name, venue,description } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault();
            console.log(formData);
            addEvent(name, venue,description);
        };
    return (
        <Fragment> 
             <div className="container card mb-3 ">
          <div className="card-header">ADD EVENT
          </div>
          <div className="card-body">
              <form onSubmit={e => onSubmit(e)} >
              <FormElement label="Title"  name="name" placeholder="Enter Title" type="text" value={name} onChange={e => onChange(e)}/>
              <FormElement label="Venue"  name="venue" placeholder="Enter Venue" type="text" value={venue} onChange={e => onChange(e)}/>
              <FormElement label="Description"  name="description" placeholder="Enter Description" type="text" value={description} onChange={e => onChange(e)}/>
              <input
                  type="submit"
                  value="Add Event"
                  className="btn btn-light btn-block"
                  />
              </form> 
          </div>
      </div>
      </Fragment>
  )
};
Dashboard.propTypes = {
    addEvent: PropTypes.func.isRequired,
  };

export default connect(
    null,
    { addEvent }
)(Dashboard);