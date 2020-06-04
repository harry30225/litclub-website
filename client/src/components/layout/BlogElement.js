import React from 'react';
import Moment from 'react-moment';

const BlogElement = (props) => {
    const {title,content,date} = props
    return (
        <div className="card mb-3">
        <div className="card-header">
            <h5>{title}
            </h5>
        </div>
        <div className="card-body">
            <h6>Post date : 
            <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {date}
            </Moment></h6> 
        </div>
        <div className="card-body">
            <p className="card-text"> {content}</p>
        </div>
    </div>
    )
};


  
export default BlogElement;