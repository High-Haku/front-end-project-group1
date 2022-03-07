import React from "react";
import {Carousel} from 'react-bootstrap'

function CategoryCarousel() {
  return (
    <>
      <Carousel className="mx-auto">
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1300x600"
            alt="First slide"
            height="400px"
            style={{objectFit:"cover"}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1300x600"
            alt="Second slide"
            height="400px"
            style={{objectFit:"cover"}}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1300x600"
            alt="Third slide"
            height="400px"
            style={{objectFit:"cover"}}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CategoryCarousel;
