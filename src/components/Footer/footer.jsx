import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = ({ onCityChange, activeCity }) => {
  const cities = ["XXX", "BGS", "PAR", "MAD", "TOL", "BCN", "ROM"];

  const handleCityClick = (city) => {
    onCityChange(city);
  };

  const handleCityHover = (event) => {
    const border = event.currentTarget.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCityLeave = (event) => {
    const border = event.currentTarget.querySelector(".city-border");

    gsap.to(border, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const activeCityElement = document.querySelector(
      `.city-border[data-city="${activeCity}"]`
    );

    if (activeCityElement) {
      gsap.set(activeCityElement, { scaleX: 1 });
    }
  }, [activeCity]);

  return (
    <footer className="w-full pt-3 pb-5 absolute bottom-0 left-0 bg-neutral-100 dark:bg-neutral-900">
      <nav>
        <ul className="container mx-auto flex justify-center items-center gap-3 sm:gap-7">
          {cities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleCityClick(city)}
              onMouseEnter={handleCityHover}
              onMouseLeave={handleCityLeave}
              className={`city-border relative cursor-pointer font-Quizma tracking-widest text-neutral-900 dark:text-neutral-100 ${
                activeCity === city
                  ? "border-b border-solid border-neutral-900 dark:border-neutral-100"
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
