import React, { useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEvent } from "../../actions/event";
import FileBase64 from 'react-file-base64';

const AddEvent = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    description: "",
    eventdate: "",
    formurl: "",
    picture: {}
  });

  const { name, venue, description, eventdate, formurl, picture } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onDone = (uploadimage) => {
    console.log(uploadimage);
    setFormData({
      ...formData, picture: {
        name: "base-image-" + Date.now(),
        data: uploadimage.base64.toString()
      }
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addEvent(name, venue, description, eventdate, formurl, picture);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">ADD EVENT</div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <FormElement
              label="Title"
              name="name"
              placeholder="Enter Title"
              type="text"
              value={name}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Venue"
              name="venue"
              placeholder="Enter Venue"
              type="text"
              value={venue}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Description"
              name="description"
              placeholder="Enter Description"
              type="text"
              value={description}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Eventdate"
              name="eventdate"
              placeholder="Enter Eventdate"
              type="date"
              value={eventdate}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Formurl"
              name="formurl"
              placeholder="Enter Formurl"
              type="text"
              value={formurl}
              onChange={(e) => onChange(e)}
            />
            <FileBase64
              multiple={false}
              onDone={(uploadimage) => onDone(uploadimage)}
            />
            {picture && <img src={picture.data} />}
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
