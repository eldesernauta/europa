import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "../DarkModeButton/darkModeButton";
import { Tooltip } from "react-tooltip";

import NavbarButton from "./NavBarButton/navBarButton";

var phrases = [
  `"Europa no es solo un lugar geográfico, es una idea, un sueño; un sueño de esos que también pueden convertirse en pesadillas"`,
  `"En Europa, los amantes se besan en los trenes mientras las balas pasan volando"`,
  `"El amor y la tragedia están entrelazados en un baile eterno, como las vías del tren que cruzan el continente"`,
  `"La historia de Europa es la historia de los perdedores, de aquellos que luchan y sufren en silencio"`,
  `"En Europa, las fronteras son invisibles pero aún así nos separan, nos dividen y nos enfrentan"`,
  `"El pasado nunca desaparece en Europa, siempre está presente, acechando en las sombras y recordando los errores"`,
  `"En Europa, la belleza y la destrucción coexisten en perfecta armonía - Es un equilibrio frágil que se rompe con facilidad"`,
  `"Europa es un rompecabezas complejo, una amalgama de culturas, idiomas y tradiciones - Pero, al final, todos somos seres humanos en busca de conexión y significado"`,
];

const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};

const NavBar = ({ onCityChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [tooltipContent, setTooltipContent] = useState(getRandomPhrase());

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);

    const menu = menuRef.current;

    if (!showMenu) {
      gsap.to(menu, { x: "0%", duration: 0.3, ease: "circ.out" });
    } else {
      gsap.to(menu, { x: "-100%", duration: 0.3, ease: "circ.out" });
    }
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);

    const dropdown = dropdownRef.current;

    if (!showDropdown) {
      gsap.to(dropdown, {
        maxHeight: "10rem",
        duration: 0.3,
        ease: "bounce.out",
      });
    } else {
      gsap.to(dropdown, { maxHeight: 0, duration: 0.3, ease: "bounce.out" });
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    gsap.set(menu, { x: "-100%", ease: "circ.out" });
  }, [showMenu]);

  const handleCityClick = (city) => {
    onCityChange(city);
    handleToggleMenu();
    console.log(city);
  };

  const handleMouseEnter = () => {
    setTooltipContent(getRandomPhrase());
    gsap.to(".tooltip", { opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(".tooltip", { opacity: 0, duration: 0.3 });
  };

  const cities = [
    { name: "Barcelona", code: "BCN" },
    { name: "Madrid", code: "MAD" },
    { name: "Toledo", code: "TOL" },
    { name: "Paris", code: "PAR" },
    { name: "Brujas", code: "BGS" },
    { name: "Amsterdam", code: "XXX" },
    { name: "Roma", code: "ROM" },
  ];

  const otherSites = [
    { name: "Portafolio", url: "https://eldesernauta.com" },
    { name: "Fotografía", url: "https://ph.eldesernauta.com" },
    { name: "Maremoto", url: "https://maremoto.eldesernauta.com" },
    { name: "Tfish", url: "https://ph.eldesernauta.com/tfish" },
  ];

  return (
    <nav className="container mx-auto pt-3 pb-0 md:mb-3 px-3 flex justify-between gap-3 md:gap-0 items-center text-white px-0 md:px-5 2xl:px-0 z-50">
      <NavbarButton action={handleToggleMenu} showMenu={showMenu} />
      <div
        ref={menuRef}
        className="fixed inset-y-0 left-0 box-border flex flex-col bg-neutral-200 dark:bg-neutral-700 w-[calc(100%-15px)] md:w-64 xl:w-96 p-6 text-white z-50 justify-between items-start transition duration-300"
      >
        <button
          className="text-neutral-900 dark:text-neutral-100 font-bold text-lg mb-4 absolute top-4 right-4"
          onClick={handleToggleMenu}
        >
          &#10005;
        </button>
        <ul className="font-Quizma text-neutral-900 dark:text-neutral-100">
          {cities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleCityClick(city.code)}
              className="mb-2 w-full cursor-pointer tracking-widest"
            >
              {city.name}
            </li>
          ))}
          <li
            onClick={handleToggleDropdown}
            className="mb-2 w-full cursor-pointer tracking-widest flex gap-3 items-center"
          >
            Otros sitios{" "}
            {showDropdown ? (
              <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: 10 }} />
            ) : (
              <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 10 }} />
            )}
          </li>
          <ul
            ref={dropdownRef}
            className="w-60 overflow-hidden transition-max-height duration-300 ease-in-out pl-5"
            style={{ maxHeight: 0 }}
          >
            {otherSites.map((site, index) => (
              <li
                key={index}
                className="mb-2 w-full cursor-pointer tracking-widest"
                onClick={() => window.open(site.url, "_blank")}
              >
                {site.name}
              </li>
            ))}
          </ul>
        </ul>
        <div className="w-full flex flex-col gap-3">
          <ul className="w-full flex justify-center items-center gap-3">
            <li className="mx-2 text-neutral-900 dark:text-neutral-100 cursor-pointer transition duration-500">
              <a href="https://github.com/eldesernauta/" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 15 }} />
              </a>
            </li>
            <li className="mx-2 text-neutral-900 dark:text-neutral-100 cursor-pointer transition duration-500">
              <a href="https://instagram.com/eldesernauta/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15 }} />
              </a>
            </li>
            <li className="mx-2 text-neutral-900 dark:text-neutral-100 cursor-pointer transition duration-500">
              <a
                href="https://www.linkedin.com/in/eldesernauta/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 15 }} />
              </a>
            </li>
          </ul>
          <p className="text-xs text-center font-Quizma text-neutral-900 dark:text-neutral-100">
            {" "}
            2023 <span>©</span> eldesernauta
          </p>
        </div>
      </div>
      <h1
        className="text-6xl text-neutral-500 font-Soligant hover:cursor-context-menu"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Europa
      </h1>
      <Tooltip
        id="my-tooltip"
        className="z-50 font-Quizma tooltip"
        style={{
          fontSize: "12px",
          width: "200px",
          textAlign: "center",
          opacity: 0,
        }}
      >
        {tooltipContent}
      </Tooltip>
      <DarkModeButton />
    </nav>
  );
};

export default NavBar;
