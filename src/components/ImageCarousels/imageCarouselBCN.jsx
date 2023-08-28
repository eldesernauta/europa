import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6296_pb7lro.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904033/NEF_6196_z8upze.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904035/NEF_6192_awickx.jpg",
  
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904033/NEF_6197_pedvhd.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6203_ehsk78.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250677/NEF_6209_ajambs.png",
  
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904033/NEF_6219_kdcqmd.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6229_odw7tj.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6278_ltvasn.jpg",
  
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904035/NEF_6186_vzrbyx.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6282_d6zvvo.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904034/NEF_6287_szjjfw.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250134/NEF_6289_zcp2rw.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904035/NEF_6316_xomb8l.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690904036/NEF_6320_cezkio.jpg",
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length;
    gsap.to(".carousel-image", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setCurrentImageIndex(nextIndex);
        gsap.fromTo(
          ".carousel-image",
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 0.1 }
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
