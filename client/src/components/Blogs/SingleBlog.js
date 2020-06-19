import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlog } from '../../actions/blog';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteBlog } from '../../actions/blog'


const SingleBlog = ({ deleteBlog, getBlog, blog: { blog, loading }, match, auth: { isAuthenticated } }) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog, match.params.id]);

  return !loading && blog && (
    <div className="main">
      <section className="blog-hero-section set-bg" style={{ backgroundImage: "url('/img/blog/blog-details/blog-details-hero.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bh-text">
                <h2>{blog.title}</h2>
                <ul>
                  <li><span>By <strong>{blog.author}</strong></span></li>
                  <li> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD" > {blog.date}
                  </Moment></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="bd-text">
                <div className="bd-title">
                  <p> {blog.content} </p>
                </div>
              </div>
            </div>
            {isAuthenticated && (
              <div className="col-lg-2 m-auto">
                <button style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={e => deleteBlog(blog._id)} className="btn btn-light btn-lg">
                  <i className="fa fa-trash" />
                </button>
                <Link style={{ cursor: 'pointer', float: 'right', color: 'black' }} to={`/admin/editblog/${blog._id}`} className="btn btn-light btn-lg">
                  <i className="fa fa-pencil" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

SingleBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getBlog, deleteBlog }
)(SingleBlog);