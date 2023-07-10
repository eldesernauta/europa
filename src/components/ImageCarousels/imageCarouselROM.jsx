import React, { useState } from "react";
import { gsap } from "gsap";
import image1 from "../../images/_MG_5628-positive-2.jpg";
import image2 from "../../images/_MG_5608-positive-2.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  const images = [image1, image2];

  const handleImageClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    gsap.to(".carousel-image", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentImage(nextImage);
        gsap.fromTo(
          ".carousel-image",
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 0.1 }
        );
      },
    });
  };

  return (
    <div className="h-5/6 overflow-hidden">
      <div className="relative h-full container mx-auto flex justify-center transition-transform duration-500">
        <img
          src={currentImage}
          alt="Carousel Image"
          className="carousel-image cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
