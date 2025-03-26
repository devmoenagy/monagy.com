import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  activeSection: string;
}

const Sidebar: React.FC<Props> = ({ activeSection }) => {
  return (
    <aside className="asideTop p-6 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-normal lg:p-12">
      <div>
        <h1>
          <a href="/">Mohamed Nagy</a>
        </h1>
        <h2 className="mt-3 text-lg">Web App Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">
          Crafting pixel-perfect, user-centric web experiences 🚀
        </p>

        <nav
          className="mt-16 mb-8 hidden lg:block text-base"
          aria-label="In-page jump links"
        >
          <ul>
            {["about", "experience", "projects"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`relative inline-block py-3 tracking-widest uppercase transition-all duration-200
                    ${
                      activeSection === section
                        ? "font-bold text-black dark:text-white"
                        : "font-medium text-text hover:font-bold hover:text-black dark:hover:text-white"
                    }
                    before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-full 
                    before:origin-left before:scale-x-0 before:bg-indigo-500 
                    before:transition-transform before:duration-300 
                    hover:before:scale-x-100 
                    ${
                      activeSection === section
                        ? "before:scale-x-100"
                        : "before:scale-x-0"
                    }
                  `}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-4 lg:mt-auto flex items-center space-x-5">
        <a
          href="https://github.com/devmonagy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/devmonagy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="https://codepen.io/devmonagy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faCodepen} size="xl" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
