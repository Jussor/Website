import React, { useState } from 'react';
import './HeroSlider.css';
import Carousel from 'react-bootstrap/Carousel';
import Homehero from '../../../Components/Saction/Homehero';

const heroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };
  const renderCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < 5; i++) {
      carouselItems.push(
        <Carousel.Item key={i} interval={4000}>
          <div className="container-fluid slider-container p-0">
            <div className="row ">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <Homehero/>
              </div>
            </div>
          </div>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };
  return (
    <div className="container-fluid position-relative" id="headcarousel_container">
      <Carousel controls={false} interval={false} indicators={false} activeIndex={activeIndex} onSelect={handleSelect}>
        {renderCarouselItems()} 
      </Carousel>
      <div className="custom-indicators">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`indicator ${activeIndex === index ? 'active' : ''}`} onClick={() => handleIndicatorClick(index)}></span>
        ))}
      </div>
    </div>
  );
};
export default heroSlider;