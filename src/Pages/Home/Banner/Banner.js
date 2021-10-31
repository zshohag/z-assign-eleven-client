import React from 'react';
import {  Carousel, Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div >
         
        <Carousel>

          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://i.ibb.co/Wv9rKn1/slider1.jpg" 
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Order your favorite food from Hungry Takeout</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/kHwkCBQ/slider2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 >Never compromise with the quality of food  </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/CJnDjsJ/slider4.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Fastest Delivery Service </h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>


        </div>
    );
};

export default Banner;