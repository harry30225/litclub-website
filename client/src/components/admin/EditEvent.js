import React, { useEffect,useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editEvent,getEvent} from "../../actions/event";
import FileBase64 from 'react-file-base64';


const EditEvent = ({getEvent,editEvent,match,event:{event,loading}}) => {
  useEffect(() => {
    getEvent(match.params.id);
    if(!loading&&event)
    {
      const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      const date=new Date(event.eventdate);

      setFormData({
        name:event.name,
        venue:event.venue,
        description:event.description,
        eventdate:date.getFullYear()+"-"+months[date.getMonth()]+"-"+date.getDate(),
        picture:event.picture
      })
    }
}, [getEvent,loading,event&&event._id]);

  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    description: "",
    eventdate: "",
  });

  const { name, venue, description, eventdate,picture} = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onDone=(uploadimage)=>{
    console.log(uploadimage);
    setFormData({...formData,picture:{
      name:"base-image-"+Date.now(),
      data:uploadimage.base64.toString()
    }});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    editEvent(match.params.id,name, venue, description, eventdate,picture);
  };
  return !loading && event !== null &&(
    <Fragment>
      <div className="container card mb-3 "> 
        <div className="card-header">EDIT EVENT</div>
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
            <FileBase64
              multiple={ false }
              onDone={ (uploadimage)=> onDone(uploadimage)}
            />
            {picture && <img src={picture.data}/>}
            <input
              type="submit"
              value="Edit Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
EditEvent.propTypes = {
  editEvent: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

export default connect(mapStateToProps, { editEvent,getEvent })(EditEvent);
