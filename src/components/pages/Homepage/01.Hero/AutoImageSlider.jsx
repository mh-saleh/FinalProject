import React, { useState, useEffect, useRef } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const AutoImageSlider = ({ images = [], interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [transitionDirection, setTransitionDirection] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setTransitionDirection("left");
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [images.length, interval]);

  const nextSlide = () => {
    setTransitionDirection("left");
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setTransitionDirection("right");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTransitionDirection("left");
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swiped right
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="max-w-[1600px] mx-auto relative"
      style={{ height: "650px" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative overflow-hidden h-full">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-5xl z-10"
          onClick={prevSlide}
        >
          <FiArrowLeftCircle className="text-white" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-5xl z-10"
          onClick={nextSlide}
        >
          <FiArrowRightCircle className="text-white" />
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 rounded-none ${
              index === currentImageIndex
                ? "transform-none"
                : transitionDirection === "left"
                ? "translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
