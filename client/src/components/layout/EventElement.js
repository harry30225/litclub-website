import React from 'react';
import Moment from 'react-moment';

const EventElement = (props) => {
    const {name,date,venue,description} = props
    return (
        <div className="card mb-3">
        <div className="card-header">
            <h5>{name}
            </h5>
        </div>
        <div className="card-body">
            <h6 className="card-text">{venue}</h6>
            <h6>
            <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {date}
            </Moment></h6> 
        </div>
        <div className="card-body">
            <p className="card-text"> {description}</p>
        </div>
    </div>
    )
};


  
export default EventElement;