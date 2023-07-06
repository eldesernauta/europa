import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import DarkModeButton from "../DarkModeButton/darkModeButton";

import NavbarButton from "./NavBarButton/navBarButton";
const linkStyles =
  "text-white text-sm font-Josefin uppercase font-semibold tracking-widest cursor-pointer";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    const menu = menuRef.current;
    if (!showMenu) {
      gsap.to(menu, { x: "0%", duration: 0.5, ease: "back.out(1.7)" });
    } else {
      gsap.to(menu, { x: "-100%", duration: 0.5, ease: "back.out(1.7)" });
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    gsap.set(menu, { x: "-100%" });
  }, []);

  return (
    <nav className="container mx-auto py-3 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center text-white px-0 md:px-5 2xl:px-0">
      <NavbarButton action={handleToggleMenu} showMenu={showMenu} />
      <div
        ref={menuRef}
        className="fixed inset-y-0 left-0 box-border flex flex-col bg-neutral-900 dark:bg-neutral-100 w-[calc(100%-15px)] md:w-64 xl:w-96 p-6 text-white z-50 justify-between items-start transition duration-300"
      >
        <button
          className="text-neutral-100 dark:text-neutral-900 font-bold text-lg mb-4 absolute top-4 right-4 block 2xl:hidden"
          onClick={handleToggleMenu}
        >
          &#10005;
        </button>
        <ul className="font-Josefine">
          <li className="mb-2"></li>
        </ul>
      </div>
      <h1 className="text-6xl text-neutral-500 font-Soligant">Europa</h1>
      <DarkModeButton />
    </nav>
  );
};

export default NavBar;
