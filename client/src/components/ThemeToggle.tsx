import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface Props {
  darkMode: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<Props> = ({ darkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
    </button>
  );
};

export default ThemeToggle;
