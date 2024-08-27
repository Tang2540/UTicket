import { useState, useEffect } from 'react';
import arrow from "../assets/vector.png"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images=['banner.png','2','3','4']
  //const autoSlideInterval = 3000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(images.length)
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative w-screen mb-11 mt-4">
      <div className="overflow-hidden relative h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="max-w-full w-full h-full object-contain xl:object-fill" />
          </div>
        ))}
      </div>
      <div
        onClick={prevSlide}
        className="carousel-arrow left-11"
      >
        <img src={arrow} alt="" className='h-full cursor-pointer'/>
      </div>
      <div
        onClick={nextSlide}
        className="carousel-arrow right-11"
      >
        <img src={arrow} alt="" className='h-full rotate-180 cursor-pointer'/>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-pink' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;