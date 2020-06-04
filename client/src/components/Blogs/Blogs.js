import React ,{ useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blog';


import BlogElement from "../layout/BlogElement"

const Blogs = ({ getBlogs, blog: { blogs, loading }}) => {
    useEffect(() => {
        getBlogs();
      }, [getBlogs]);

    return !loading && (
        <div>
        {blogs.map(blog => (
          <BlogElement title={blog.title} content={blog.content} date={blog.date}  key={blog._id} />
        ))}
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