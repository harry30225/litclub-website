import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const BlogElement = (props) => {
    const { title, content, date,id} = props
    return (

        <div className="col-lg-4">
            <div className="latest-item set_bg" style={{ backgroundImage: "url('img/blog/latest-b/latest-1.jpg')" }} >
                <div className="li-tag">Blog tag</div>
                <div className="li-text">
                    <h5><Link to={`/blog/${id}`}>{title}</Link></h5>
                    <span><i className="fa fa-clock-o"></i> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {date}
                    </Moment></span>
                </div>
            </div>
        </div>

    )
};



export default BlogElement;