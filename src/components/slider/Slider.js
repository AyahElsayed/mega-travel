import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="./assets/slider1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            The lowest flight ticket ..
            in Egypt
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/slider2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>
            The best tourist offers
            .. at the lowest prices
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider