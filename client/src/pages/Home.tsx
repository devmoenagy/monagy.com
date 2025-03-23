import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import MoNAGYImg from "../assets/MoNAGY.webp";
import BlogWebappImg from "../assets/BlogWebapp.webp";

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
              ? "font-bold text-text dark:text-white"
              : "font-medium text-text hover:font-bold dark:text-gray-300 dark:hover:text-white"
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
          <div className="mt-4 lg:mt-auto flex items-center space-x-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faCodepen} size="xl" />
            </a>
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <main className="mainTop lg:w-3/5 p-6 lg:p-12">
          <section id="about" ref={aboutRef} className="mb-16 lg:mb-28">
            <h3 className="hide text-base">ABOUT</h3>
            <div className="space-y-6 text-base md:text-lg leading-relaxed ">
              <p>
                Hi, I'm a web developer with a passion for building clean,
                responsive, and user-focused applications. I specialize in the{" "}
                <strong className="font-semibold">MERN stack</strong>, combining
                modern front-end tools like{" "}
                <strong className="font-semibold">React</strong> and{" "}
                <strong className="font-semibold">TypeScript</strong> with
                robust backend solutions to bring ideas to life. I care deeply
                about design, performance, and creating seamless digital
                experiences that are both intuitive and enjoyable.
              </p>

              <p>
                My approach is rooted in writing{" "}
                <strong className="font-semibold">
                  clean, maintainable code
                </strong>{" "}
                and staying up-to-date with the latest in web technologies. I
                enjoy building features that solve real problems, whether it's a
                simple landing page or a full-stack application. Every project
                is an opportunity to learn, improve, and deliver something
                valuable — and I thrive in environments where growth and
                creativity go hand in hand.
              </p>

              <p>
                This portfolio showcases my journey, skills, and recent work.
                I'm currently open to freelance opportunities , collaborations,
                or full-time roles where I can contribute and continue growing.
                If you're looking for a developer who’s motivated,
                detail-oriented, and excited to build meaningful web
                experiences.
              </p>
            </div>
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
            <ol className="list-none">
              {/* Project 1 */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Content */}
                  <div className="z-10 order-1 sm:order-2 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute inset-0 hidden rounded lg:block"></span>
                        <span className="flex items-start">
                          Blog Engine · MERN Stack
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A full-stack blogging platform built with the MERN stack
                      (MongoDB, Express, React, Node.js) and TypeScript. It
                      features user authentication with JWT, responsive design
                      with Tailwind CSS, profile management, and post creation
                      with image uploads & social interactions.
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Tailwind CSS",
                        "JWT",
                        "Vercel",
                      ].map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image at bottom on mobile */}
                  <div className="order-2 mt-6 sm:order-1 sm:mt-0 sm:col-span-2 sm:translate-y-1">
                    <img
                      src={BlogWebappImg}
                      alt="Project One Thumbnail"
                      className="w-[65%] sm:w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                    />
                  </div>
                </div>
              </li>

              {/* Project 2 */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Content */}
                  <div className="z-10 order-1 sm:order-2 sm:col-span-6 flex flex-col items-start">
                    <h3 className="font-medium leading-snug text-text flex items-start">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute inset-0 hidden rounded lg:block"></span>
                        <span className="flex items-start">
                          MoNAGY.com · Personal Portfolio
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A modern, responsive personal portfolio built with React,
                      TypeScript, and Tailwind CSS. It showcases projects,
                      experience, and social links with smooth animations using
                      Framer Motion and a clean UI.
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {["React", "TypeScript", "Tailwind CSS", "Vercel"].map(
                        (tech) => (
                          <li key={tech} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                              {tech}
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Image at bottom on mobile */}
                  <div className="order-2 mt-6 sm:order-1 sm:mt-0 sm:col-span-2 sm:translate-y-1">
                    <img
                      src={MoNAGYImg}
                      alt="Project One Thumbnail"
                      className="w-[65%] sm:w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                    />
                  </div>
                </div>
              </li>
            </ol>

            <br />
            <pre className="bg-background dark:bg-darkBackground text-textLight dark:text-textDark text-sm rounded p-4 overflow-x-auto text-left font-mono w-full max-w-2xl">
              <code>
                <span className="text-blue-600 dark:text-[#569CD6]">
                  function
                </span>{" "}
                <span className="text-yellow-700 dark:text-[#DCDCAA]">
                  evolve
                </span>
                <span className="text-inherit">(</span>
                <span className="text-purple-700 dark:text-[#9CDCFE]">
                  knowledge
                </span>
                ,{" "}
                <span className="text-purple-700 dark:text-[#9CDCFE]">age</span>
                ,{" "}
                <span className="text-purple-700 dark:text-[#9CDCFE]">
                  life
                </span>
                <span className="text-inherit">)</span>{" "}
                <span className="text-inherit">&#123;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-green-600 dark:text-[#C586C0]">
                  while
                </span>{" "}
                <span className="text-inherit">(</span>
                <span className="text-purple-700 dark:text-[#9CDCFE]">age</span>
                <span className="text-inherit">++ &lt; </span>
                <span className="text-purple-700 dark:text-[#9CDCFE]">
                  life
                </span>
                .
                <span className="text-yellow-700 dark:text-[#DCDCAA]">
                  length
                </span>
                <span className="text-inherit">)</span>{" "}
                <span className="text-inherit">&#123;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-inherit">++</span>
                <span className="text-purple-700 dark:text-[#9CDCFE]">
                  knowledge
                </span>
                <span className="text-inherit">;</span>
                <br />
                &nbsp;&nbsp;<span className="text-inherit">&#125;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-green-600 dark:text-[#C586C0]">
                  return
                </span>{" "}
                <span className="text-purple-700 dark:text-[#9CDCFE]">
                  knowledge
                </span>
                <span className="text-inherit">;</span>
                <br />
                <span className="text-inherit">&#125;</span>
              </code>
            </pre>
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
