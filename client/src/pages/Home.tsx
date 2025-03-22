import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
    );
  });

  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const sectionMap: Record<string, HTMLElement | null> = {
      about: aboutRef.current,
      experience: experienceRef.current,
      projects: projectsRef.current,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionMap).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionMap).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // ✅ Experience data for individual cards
  const experienceList = [
    {
      title: "Software Developer",
      company: "ADAPT Community Network",
      link: "https://www.example.com",
      dateRange: "2025 — Present",
      description:
        "Building responsive UIs and reusable components with a focus on performance and accessibility.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Web Developer",
      company: "ADAPT Community Network",
      link: "https://www.creativestudio.com",
      dateRange: "2023 - 2025",
      description:
        "Led development of marketing sites and landing pages with animated scroll effects and interactive forms.",
      technologies: ["Next.js", "JavaScript", "Framer Motion", "Sass"],
    },
    {
      title: "Junior Web Developer",
      company: "ADAPT Community Network",
      link: "https://www.designify.com",
      dateRange: "2021 — 2023",
      description:
        "Collaborated with designers to implement clean, mobile-first layouts and improved page load by 40%.",
      technologies: ["React", "Styled Components", "GSAP", "HTML5"],
    },
    {
      title: "Founder & Web Developer",
      company: "webDefinitely",
      link: "https://www.devlaunch.io",
      dateRange: "2016 — 2021",
      description:
        "Contributed to a component library and helped refactor legacy code to modern React.",
      technologies: ["React", "Redux", "Bootstrap", "Jest"],
    },
  ];

  return (
    <div
      className={`min-h-screen font-sans flex justify-center ${
        darkMode
          ? "bg-darkBackground text-textDark"
          : "bg-background text-textLight"
      }`}
    >
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row">
        {/* Left Column */}
        <aside className="asideTop p-6 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-normal lg:p-12">
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
                {["about", "experience", "projects"].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`relative inline-block py-3 tracking-widest uppercase transition-all duration-200 
                        ${
                          activeSection === section
                            ? "font-bold text-text"
                            : "font-medium text-text hover:font-bold"
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

          {/* Social Icons */}
          <div className="mt-4 lg:mt-auto flex items-center space-x-4">
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
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-inherit"
            >
              <FontAwesomeIcon icon={faCodepen} size="lg" />
            </a>
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <main className="mainTop lg:w-3/5 p-6 lg:p-12">
          <section id="about" ref={aboutRef} className="mb-16 lg:mb-28">
            <h3 className="hide text-base">ABOUT</h3>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <br />
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <br />
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
          </section>

          <section
            id="experience"
            ref={experienceRef}
            className="mb-16 lg:mb-28"
          >
            <h3 className="hide text-base">EXPERIENCE</h3>
            <ol className="list-none">
              {experienceList.map((exp, index) => (
                <li className="mb-12" key={index}>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
                      {exp.dateRange}
                    </header>
                    <div className="z-10 sm:col-span-6 flex flex-col items-start">
                      <h3 className="font-medium leading-snug text-text flex items-start">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span className="absolute inset-0 hidden rounded lg:block"></span>
                          <span className="flex items-start">
                            {exp.title} · {exp.company}
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {exp.description}
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        {exp.technologies.map((tech) => (
                          <li key={tech} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="font-bold">Download Résumé</p>
          </section>

          <section id="projects" ref={projectsRef} className="mb-16">
            <h3 className="hide text-base">PROJECTS</h3>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <br />
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <br />
            <p>
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

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg transition-all duration-300"
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
      </button>
    </div>
  );
};

export default Home;
