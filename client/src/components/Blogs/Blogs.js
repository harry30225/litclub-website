import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blog';
import { Link } from 'react-router-dom';


import BlogElement from "../layout/BlogElement"

const Blogs = ({ getBlogs, blog: { blogs, loading } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return !loading && (
    <div className="container">
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Our Blogs</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>Our Blogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        {blogs.map(blog => (
          <BlogElement blogtag={blog.blogtag} title={blog.title} content={blog.content} author={blog.author} date={blog.date} key={blog._id} id={blog._id} />
        ))}
      </div>
    </div>
  )
}

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapStateToProps,
  { getBlogs }
)(Blogs);