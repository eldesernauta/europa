import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = ({ onCityChange }) => {
  const cities = [
    "Barcelona",
    "Madrid",
    "Toledo",
    "Paris",
    "Brujas",
    "Amsterdam",
    "Roma",
  ];

  const [activeCity, setActiveCity] = useState("");

  const handleCityClick = (city) => {
    onCityChange(city);
    setActiveCity(city);
  };

  const handleCityHover = (event) => {
    const border = event.target.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 1,
      transformOrigin: "center",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCityLeave = (event) => {
    const border = event.target.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.3,
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
              className={`cursor-pointer font-Arual text-neutral-900 dark:text-neutral-100 ${
                activeCity === city
                  ? "border-b-2 border-solid border-neutral-900 dark:border-neutral-100 city-border"
                  : ""
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
