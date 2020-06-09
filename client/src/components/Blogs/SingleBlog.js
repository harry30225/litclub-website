import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlog } from '../../actions/blog';
import { Link } from 'react-router-dom';



const SingleBlog = ({ getBlog, blog: { blog, loading } ,match}) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog,match.params.id]);

  return !loading &&blog&& (
      <Fragment>
        <h1>{blog.title}</h1>
        <h1>{blog.content}</h1>
        <h1>{blog.date}</h1>
      </Fragment>
  )
}

SingleBlog.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapStateToProps,
  { getBlog }
)(SingleBlog);