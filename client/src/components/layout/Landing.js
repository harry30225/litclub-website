import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../../actions/image';

const Landing = ({ getImages, image: { images, loading } }) => {
    useEffect(() => {
        getImages();
    }, [getImages]);

    return !loading && (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={images[0].picture.data} alt="first slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{images[0].title}</h2>
                            <h4 >{images[0].Caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={images[1].picture.data} alt="second slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{images[1].title}</h2>
                            <h4 >{images[1].caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={images[2].picture.data} alt="third slide" />
                    <Carousel.Caption>
                        <div class="hero-text">
                            <h2 class="display-4">{images[2].title}</h2>
                            <h4 >{images[2].caption}</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

Landing.propTypes = {
    getImages: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    image: state.image,
});

export default connect(
    mapStateToProps,
    { getImages }
)(Landing);
