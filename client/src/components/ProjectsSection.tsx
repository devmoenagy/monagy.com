import React from "react";
import BlogWebappImg from "../assets/BlogWebapp.webp";
import MoNAGYImg from "../assets/MoNAGY.webp";

interface Props {
  projectsRef: React.RefObject<HTMLElement | null>;
}

const ProjectsSection: React.FC<Props> = ({ projectsRef }) => {
  const projectData = [
    {
      title: "Blog Engine · MERN Stack",
      description:
        "A full-stack blogging platform built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. It features user authentication with JWT, responsive design with Tailwind CSS, profile management, and post creation with image uploads & social interactions.",
      link: "https://example.com",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Vercel",
      ],
      image: BlogWebappImg,
    },
    {
      title: "MoNAGY.com · Personal Portfolio",
      description:
        "A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. It showcases projects, experience, and social links with smooth animations using Framer Motion and a clean UI.",
      link: "https://MoNAGY.com",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: MoNAGYImg,
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="mb-16">
      <h3 className="hide text-base">PROJECTS</h3>
      <ol className="list-none">
        {projectData.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 order-1 sm:order-2 sm:col-span-6 flex flex-col items-start">
                <h3 className="font-medium leading-snug text-text flex items-start">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-text hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute inset-0 hidden rounded lg:block"></span>
                    <span className="flex items-start">{project.title}</span>
                  </a>
                </h3>
                <p className="text-sm leading-normal">{project.description}</p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-md bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-2 mt-6 sm:order-1 sm:mt-0 sm:col-span-2 sm:translate-y-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[65%] sm:w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <br />
      <pre className="bg-background dark:bg-darkBackground text-textLight dark:text-textDark text-sm rounded overflow-x-auto text-left font-mono w-full max-w-2xl">
        <code>
          <span className="text-blue-600 dark:text-[#569CD6]">function</span>{" "}
          <span className="text-yellow-700 dark:text-[#DCDCAA]">evolve</span>
          <span className="text-inherit">(</span>
          <span className="text-purple-700 dark:text-[#9CDCFE]">knowledge</span>
          , <span className="text-purple-700 dark:text-[#9CDCFE]">age</span>,{" "}
          <span className="text-purple-700 dark:text-[#9CDCFE]">life</span>
          <span className="text-inherit">)</span>{" "}
          <span className="text-inherit">&#123;</span>
          <br />
          &nbsp;&nbsp;
          <span className="text-green-600 dark:text-[#C586C0]">while</span>{" "}
          <span className="text-inherit">(</span>
          <span className="text-purple-700 dark:text-[#9CDCFE]">age</span>
          <span className="text-inherit">++ &lt; </span>
          <span className="text-purple-700 dark:text-[#9CDCFE]">life</span>.
          <span className="text-yellow-700 dark:text-[#DCDCAA]">length</span>
          <span className="text-inherit">)</span>{" "}
          <span className="text-inherit">&#123;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-inherit">++</span>
          <span className="text-purple-700 dark:text-[#9CDCFE]">knowledge</span>
          <span className="text-inherit">;</span>
          <br />
          &nbsp;&nbsp;<span className="text-inherit">&#125;</span>
          <br />
          &nbsp;&nbsp;
          <span className="text-green-600 dark:text-[#C586C0]">
            return
          </span>{" "}
          <span className="text-purple-700 dark:text-[#9CDCFE]">knowledge</span>
          <span className="text-inherit">;</span>
          <br />
          <span className="text-inherit">&#125;</span>
        </code>
      </pre>
    </section>
  );
};

export default ProjectsSection;
