import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6615_lywl4g.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6606_awoedx.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6613_stegql.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6630_kfbmzk.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6625_bnmtqv.jpg",
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
