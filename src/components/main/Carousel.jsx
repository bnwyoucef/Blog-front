import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/nice1.jpg';
import image2 from '../../images/nice2.jpg';
import image3 from '../../images/nice7.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselPage = () => {
  return (
    <Carousel variant="dark" >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        height="500px"
        style={{aspectRatio: '16/9'}}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        height="500px"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3}
        height="500px"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}

export default CarouselPage