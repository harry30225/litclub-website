import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../../actions/image';
import { getLatestevent } from '../../actions/event';
import { getThreeblogs } from '../../actions/blog';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const Landing = ({ getImages, image, getLatestevent, event, getThreeblogs, blog }) => {
    useEffect(() => {
        getImages();
        getLatestevent();
        getThreeblogs();
    }, [getImages, getLatestevent, getThreeblogs]);

    return !image.loading && !event.loading && !blog.loading && (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={image.images[0].picture.data} alt="first slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{image.images[0].title}</h2>
                            <h4 >{image.images[0].Caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image.images[1].picture.data} alt="second slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{image.images[1].title}</h2>
                            <h4 >{image.images[1].caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image.images[2].picture.data} alt="third slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{image.images[2].title}</h2>
                            <h4 >{image.images[2].caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="home-about-section spad">
                <div className="card card-body mb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ha-pic">
                                    <img src={event.event.picture.data} alt="latest event" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="ha-text">
                                    <h2>{event.event.name}</h2>
                                    <p>{event.event.description}</p>
                                    <ul>
                                        <li><span className="icon_check"></span> {event.event.venue}</li>
                                        <li>
                                            <span className="icon_check"></span>
                                            <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD" > {event.event.eventdate}
                                            </Moment>
                                        </li>
                                    </ul>
                                    <Link to="#" className="ha-btn">Discover Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Latest Blog</h2>
                                <p>Here we have the three latest blogs</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="latest-item set_bg" style={{ backgroundImage: `url('${blog.blogs[0].picture.data}')` }} >
                                <div className="li-tag">{blog.blogs[0].blogtag}</div>
                                <div className="li-text">
                                    <h5><Link to={`/blog/${blog.blogs[0]._id}`}>{blog.blogs[0].title}</Link></h5>
                                    <span><i className="fa fa-clock-o"></i> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {blog.blogs[0].date}
                                    </Moment></span>
                                </div>
                            </div>
                        </div >
                        <div className="col-lg-4">
                            <div className="latest-item set_bg" style={{ backgroundImage: `url('${blog.blogs[1].picture.data}')` }} >
                                <div className="li-tag">{blog.blogs[1].blogtag}</div>
                                <div className="li-text">
                                    <h5><Link to={`/blog/${blog.blogs[1]._id}`}>{blog.blogs[1].title}</Link></h5>
                                    <span><i className="fa fa-clock-o"></i> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {blog.blogs[1].date}
                                    </Moment></span>
                                </div>
                            </div>
                        </div >
                        <div className="col-lg-4">
                            <div className="latest-item set_bg" style={{ backgroundImage: `url('${blog.blogs[2].picture.data}')` }} >
                                <div className="li-tag">{blog.blogs[2].blogtag}</div>
                                <div className="li-text">
                                    <h5><Link to={`/blog/${blog.blogs[2]._id}`}>{blog.blogs[2].title}</Link></h5>
                                    <span><i className="fa fa-clock-o"></i> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {blog.blogs[2].date}
                                    </Moment></span>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </section>

        </div>
    )
};

Landing.propTypes = {
    getImages: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
    getLatestevent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
    getThreeblogs: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    image: state.image,
    event: state.event,
    blog: state.blog,
});

export default connect(
    mapStateToProps,
    { getImages, getLatestevent, getThreeblogs }
)(Landing);
