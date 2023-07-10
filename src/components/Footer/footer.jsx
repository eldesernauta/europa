import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = ({ onCityChange, activeCity }) => {
  const cities = ["BCN", "MAD", "TOL", "PAR", "BGS", "XXX", "ROM"];

  const handleCityClick = (city) => {
    onCityChange(city);
  };

  const handleCityHover = (event) => {
    const border = event.target.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCityLeave = (event) => {
    const border = event.target.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <footer className="w-full pb-5 absolute bottom-0 left-0">
      <nav>
        <ul className="container mx-auto flex justify-center items-center gap-7">
          {cities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleCityClick(city)}
              onMouseEnter={handleCityHover}
              onMouseLeave={handleCityLeave}
              className={`cursor-pointer font-Quizma tracking-widest text-neutral-900 dark:text-neutral-100 ${
                activeCity === city
                  ? "border-b border-solid border-neutral-900 dark:border-neutral-100 city-border"
                  : ""
              }`}
            >
              {city}
              <span className="city-border absolute bottom-0 left-0 w-full h-0 border-b border-solid border-neutral-900 dark:border-neutral-100"></span>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
