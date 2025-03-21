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
          className="asideTop p-6 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-normal lg:p-12
"
        >
          <div>
            <h1>
              <a href="/">Mohamed Nagy</a>
            </h1>
            <h2 className="mt-3 text-lg">Web App Developer</h2>
            <p className="mt-4 max-w-xs leading-normal">
              Crafting pixel-perfect, user-centric web experiences 🚀
            </p>
            {/* Navigation */}
            <nav
              className="mt-16 mb-8 hidden lg:block text-base"
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
          className="mainTop lg:w-3/5 p-6 lg:p-12
"
        >
          <section id="about" className="mb-16">
            <h3 className="hide text-base">ABOUT</h3>
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
            <h3 className="hide text-base">EXPERIENCE</h3>
            <ol className="list-none">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Background Hover Effect with Increased Padding */}
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Left Section: Ensure Date is at the Top */}
                  <header className="z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
                    2025 — Present
                  </header>

                  {/* Right Section: Ensure Title is Fully Flush */}
                  <div className="z-10 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://www.example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-3 lg:block"></span>

                        {/* Remove inline-block and ensure alignment */}
                        <span className="flex items-start">
                          Frontend Developer · Example Company
                        </span>
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                      Work on building and optimizing web applications with a
                      focus on performance and accessibility. Collaborate with
                      cross-functional teams to develop high-quality UI
                      components.
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Background Hover Effect with Increased Padding */}
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Left Section: Ensure Date is at the Top */}
                  <header className="z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
                    2025 — Present
                  </header>

                  {/* Right Section: Ensure Title is Fully Flush */}
                  <div className="z-10 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://www.example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-3 lg:block"></span>

                        {/* Remove inline-block and ensure alignment */}
                        <span className="flex items-start">
                          Frontend Developer · Example Company
                        </span>
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                      Work on building and optimizing web applications with a
                      focus on performance and accessibility. Collaborate with
                      cross-functional teams to develop high-quality UI
                      components.
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Background Hover Effect with Increased Padding */}
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Left Section: Ensure Date is at the Top */}
                  <header className="z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
                    2025 — Present
                  </header>

                  {/* Right Section: Ensure Title is Fully Flush */}
                  <div className="z-10 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://www.example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-3 lg:block"></span>

                        {/* Remove inline-block and ensure alignment */}
                        <span className="flex items-start">
                          Frontend Developer · Example Company
                        </span>
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                      Work on building and optimizing web applications with a
                      focus on performance and accessibility. Collaborate with
                      cross-functional teams to develop high-quality UI
                      components.
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Background Hover Effect with Increased Padding */}
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Left Section: Ensure Date is at the Top */}
                  <header className="z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
                    2025 — Present
                  </header>

                  {/* Right Section: Ensure Title is Fully Flush */}
                  <div className="z-10 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://www.example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-3 lg:block"></span>

                        {/* Remove inline-block and ensure alignment */}
                        <span className="flex items-start">
                          Frontend Developer · Example Company
                        </span>
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                      Work on building and optimizing web applications with a
                      focus on performance and accessibility. Collaborate with
                      cross-functional teams to develop high-quality UI
                      components.
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </section>
          <section id="projects" className="mb-16">
            <h3 className="hide text-base">PROJECTS</h3>
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
