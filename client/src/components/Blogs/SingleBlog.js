import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlog } from '../../actions/blog';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';



const SingleBlog = ({ getBlog, blog: { blog, loading }, match }) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog, match.params.id]);

  return !loading && blog && (
    <div className="main">
      <section class="blog-hero-section set-bg" style={{ backgroundImage: "url('/img/blog/blog-details/blog-details-hero.jpg')" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="bh-text">
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
      <section class="blog-details-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="bd-text">
                <div class="bd-title">
                  <p> {blog.content} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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