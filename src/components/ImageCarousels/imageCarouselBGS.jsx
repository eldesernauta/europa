import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250136/NEF_6631_c6owqg.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6615_lywl4g.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250135/NEF_6605_uu8ygi.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6606_awoedx.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250136/NEF_6611_aqv6sx.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6613_stegql.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250136/NEF_6619_aaelzj.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6630_kfbmzk.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250135/NEF_6633_kn1rhr.jpg",

  "https://res.cloudinary.com/de9uql5fm/image/upload/v1690907277/NEF_6625_bnmtqv.jpg",
  "https://res.cloudinary.com/de9uql5fm/image/upload/v1693250137/NEF_6628_meqcps.jpg",
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
