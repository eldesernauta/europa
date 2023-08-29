import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690906926/NEF_6553_pdnypm.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251474/NEF_6534_f69g9b.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690906926/NEF_6536_ocume3.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251475/NEF_6539_re6pbi.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251475/NEF_6576_jtyfzn.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690906927/NEF_6575_ewnlpf.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251476/NEF_6574_z4r4mf.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251475/NEF_6587_uzuunm.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251475/NEF_6592_rfpymt.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693251475/NEF_6584_ayaxwy.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690906926/NEF_6566_d85std.jpg",
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
      img.classList.add("object-contain");
    } else {
      img.classList.add("object-contain");
    }
  };

  return (
    <div className="mt-1 h-[80vh] tall:h-[90vh] sm:h-[calc(100vh-141px)] flex justify-center items-center overflow-hidden px-0 md:px-5">
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
