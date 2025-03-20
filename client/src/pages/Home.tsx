import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans flex justify-center ${
        darkMode
          ? "bg-darkBackground text-textDark"
          : "bg-background text-textLight"
      }`}
    >
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row">
        {/* Left Column - Header & Navigation */}
        <aside
          className="p-6 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-normal lg:p-12
"
        >
          <div>
            <h1>
              <a href="/">Mohamed NagyY</a>
            </h1>
            <h4 className="mt-3">Web App Developer</h4>
            <p className="mt-4 max-w-xs leading-normal">
              Crafting pixel-perfect, user-centric web experiences 🚀
            </p>
            {/* Navigation */}
            <nav
              className="mt-16 mb-8 hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul>
                <li>
                  <a
                    className="inline-block py-3 font-bold uppercase tracking-widest hover:text-inherit"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block py-3 font-bold uppercase tracking-widest hover:text-inherit"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block py-3 font-bold uppercase tracking-widest hover:text-inherit"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Social Icons & Theme Toggle */}
          <div className="mt-4 lg:mt-auto  flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-inherit"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-inherit"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none p-0 bg-transparent border-none shadow-none focus:ring-0 active:ring-0 hover:bg-transparent"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
            </button>
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <main
          className="lg:w-3/5 p-6 lg:p-12
"
        >
          <section id="about" className="mb-16">
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
          </section>
          <section id="experience" className="mb-16">
            <h2>Experience</h2>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
          </section>
          <section id="projects" className="mb-16">
            <h2>Projects</h2>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <p className="mt-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
