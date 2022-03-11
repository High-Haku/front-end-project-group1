import React from "react";
import {Carousel} from 'react-bootstrap'

function CategoryCarousel() {
  return (
    <>
      <Carousel className="mx-auto">
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/cheerful-mother-and-son-cuddling-and-reading-book-picture-id1300038464?b=1&k=20&m=1300038464&s=170667a&w=0&h=8XFpbjHP83tnhJJyxZa8i5xqD0aDQN79QY9w6ro9Z1Y="
            alt="First slide"
            height="400px"
            style={{objectFit:"cover"}}
          />
          <Carousel.Caption>
            <h5 className="fst-italic"> "Kuasailah semua buku, tapi jangan biarkan buku menguasai Anda. Membacalah untuk hidup, bukan hidup untuk membaca." </h5>
            <h6>-Owen Meredith-</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZCUyMHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
            height="400px"
            style={{objectFit:"cover"}}
          />

          <Carousel.Caption>
            <h5 className="fst-italic">"Dua pendidikan yang memengaruhi pendidikan manusia: seni dan sains. Keduanya bertemu dalam buku"</h5>
            <h6>-Bj. Habibi-</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHJlYWRpbmclMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            alt="Third slide"
            height="400px"
            style={{objectFit:"cover"}}
          />

          <Carousel.Caption>
            <h3 className="fst-italic">Third slide label</h3>
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
