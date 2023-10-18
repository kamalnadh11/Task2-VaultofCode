import React, { useState } from 'react';
import './slider.css';

const imageFolder = 'simages'; // Replace 'images' with the actual folder name
const imageFiles = [
  'a1.jpg',
  'a2.jpg',
  'a3.jpg',
  'a4.jpg',
  'a5.jpg',
  'a6.jpg',
  'a7.jpg',
  'a8.jpg',
  'a9.jpg',
  'a10.jpg',
  
  // Add more image filenames here
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageFiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageFiles.length) % imageFiles.length);
  };

  return (
    <div className="slider">
      <div className="slider-navigation">
        <span onClick={prevSlide}>&lt;</span>
        <img
          src={require(`./${imageFolder}/${imageFiles[currentIndex]}`)}
          alt={`Slide ${currentIndex}`}
          className="slider-image"
        />
         <span onClick={nextSlide}>&gt;</span>
      </div>
    </div>
  );
}

export default Slider;
