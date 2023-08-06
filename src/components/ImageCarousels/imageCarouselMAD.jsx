import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905879/NEF_6335_ul6oqv.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6362_vmsciu.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6405_jmaiep.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6403_hkim6z.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6406-2_abasvz.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6346_gqhtae.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905879/NEF_6330_csaoxf.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905878/NEF_6407_xg9f04.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690905879/NEF_6513_az4ogj.jpg",
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length;
    gsap.to(".carousel-image", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentImageIndex(nextIndex);
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
          src={imageUrls[currentImageIndex]}
          alt="Carousel Image"
          className="carousel-image cursor-pointer"
          onClick={handleImageClick}
          onLoad={handleImageLoad}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default Carousel;
