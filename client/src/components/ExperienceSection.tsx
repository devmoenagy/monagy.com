import React, { ReactNode } from "react";

interface Experience {
  title: string;
  company: string;
  link: string;
  dateRange: string;
  description: string;
  technologies: string[];
  modalContent: ReactNode;
}

interface Props {
  experienceRef: React.RefObject<HTMLElement | null>;
  experienceList: Experience[];
  onOpenModal: (experience: Experience) => void;
}

const ExperienceSection: React.FC<Props> = ({
  experienceRef,
  experienceList,
  onOpenModal,
}) => (
  <section id="experience" ref={experienceRef} className="mb-16 lg:mb-28">
    <h3 className="hide text-base dark:text-textWhiteOnDark text-textBlackOnLight">
      EXPERIENCE
    </h3>
    <ol className="list-none">
      {experienceList.map((exp, index) => (
        <li className="mb-12" key={index}>
          <div
            role="button"
            onClick={() => onOpenModal(exp)}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 cursor-pointer lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-5 z-0 hidden rounded-md lg:block transition lg:-inset-x-6 lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header className="dark:text-textDark text-textLight z-10 mt-0.5 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 flex items-start">
              {exp.dateRange}
            </header>
            <div className="z-10 sm:col-span-6 flex flex-col items-start">
              <h3 className="font-medium leading-snug text-text flex items-start">
                <span className="inline-flex items-baseline font-medium leading-tight text-text group-hover:text-indigo-300 focus-visible:text-indigo-300 group/link text-base relative">
                  <span className="absolute inset-0 hidden rounded lg:block" />
                  <span className="flex items-start dark:text-textWhiteOnDark text-textBlackOnLight">
                    {exp.title} · {exp.company}
                  </span>
                </span>
              </h3>
              <p className="text-sm leading-normal">{exp.description}</p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                {exp.technologies.map((tech) => (
                  <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-md bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
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
    <a
      href="/assets/Resume-MohamedNAGY.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-textBlackOnLight hover:text-indigo-500 transition-colors duration-500 dark:text-textWhiteOnDark dark:hover:text-indigo-500"
    >
      Download Résumé
    </a>
  </section>
);

export default ExperienceSection;
