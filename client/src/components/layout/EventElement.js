import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const EventElement = (props) => {
    const { name, date, venue, description, eventdate } = props
    return (
        <div className="main">
            <div className="card card-body mb-2">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ha-pic">
                            <img src="img/recentEventPoster.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
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
                </div>
            </div>
        </div>
    )
};



export default EventElement;