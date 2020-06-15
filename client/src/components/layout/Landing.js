import React from 'react';
import { Carousel } from 'react-bootstrap';
const Landing = () => {
    return (
        <div>
            <h3>Landing page</h3>
            <Carousel>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="first slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h3>This is The Carousel</h3>
        </div>
    )
};

export default Landing;