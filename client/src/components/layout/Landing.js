import React from 'react';
import { Carousel } from 'react-bootstrap';
const Landing = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="first slide" />
                    <Carousel.Caption>
                    <div class="hero-text">
                        <h2 class="display-4">First Slide</h2>
                        <h4 >This is a description for the First slide.</h4>
                    </div>                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="second slide" />
                    <Carousel.Caption>
                    <div class="hero-text">
                        <h2 class="display-4">Second Slide</h2>
                        <h4 >This is a description for the Second slide.</h4>
                    </div>                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/img/slider.jpeg" alt="third slide" />
                    <Carousel.Caption>
                    <div class="hero-text">
                        <h2 class="display-4">Third Slide</h2>
                        <h4 >This is a description for the Third slide.</h4>
                    </div>                         
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Landing;