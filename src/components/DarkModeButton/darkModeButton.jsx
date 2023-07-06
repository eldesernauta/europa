import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeButton = () => {
  const [theme, setTheme] = useState("light");
  const buttonRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      ref={buttonRef}
      className="rounded-full w-9 h-9 flex items-center justify-center"
      onClick={handleThemeSwitch}
    >
      {/* Aquí puedes añadir tus propios íconos o utilizar librerías de íconos como FontAwesome */}
      {theme === "dark" ? (
        <span className={`text-neutral-400`}>
          <FontAwesomeIcon icon={faSun} style={{ fontSize: 15 }} />
        </span>
      ) : (
        <span className={`text-neutral-500`}>
          <FontAwesomeIcon icon={faMoon} style={{ fontSize: 15 }} />
        </span>
      )}
    </button>
  );
};

export default DarkModeButton;
