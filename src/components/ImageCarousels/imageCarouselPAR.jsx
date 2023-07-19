import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import image1 from "../../images/par_1.jpg";
import image2 from "../../images/par_2.jpg";
import image3 from "../../images/par_3.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const imageRef = useRef(null);

  const images = [image1, image2, image3];

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

  const handleImageLoad = () => {
    const img = imageRef.current;

    if (img.naturalWidth > img.naturalHeight) {
      img.classList.remove("object-contain");
      img.classList.add("object-cover");
    } else {
      img.classList.remove("object-cover");
      img.classList.add("object-contain");
    }
  };

  return (
    <div className="h-[calc(100vh-141px)] flex justify-center items-center overflow-hidden px-0 md:px-5">
      <div className="relative h-auto lg:h-full container mx-auto flex justify-center items-stretch transition-transform duration-500">
        <img
          src={currentImage}
          alt="Carousel Image"
          className="carousel-image cursor-pointer "
          onClick={handleImageClick}
          onLoad={handleImageLoad}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default Carousel;
