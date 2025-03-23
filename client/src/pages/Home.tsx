import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";
import ExperienceModal from "../components/ExperienceModal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const openModal = (experience: any) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

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

  const experienceList = [
    {
      title: "Software Developer",
      company: "ADAPT Community Network",
      link: "#",
      dateRange: "2025 — Present",
      description: "Building responsive UIs and reusable components...",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      modalContent: (
        <>
          <p>
            Led architecture and frontend development for multiple web apps
            focused on internal productivity and accessibility tools.
          </p>
          <p>
            Designed a reusable component library and introduced testing
            workflows using Playwright and Jest.
          </p>
        </>
      ),
    },
    {
      title: "Web Developer",
      company: "ADAPT Community Network",
      link: "#",
      dateRange: "2023 - 2025",
      description:
        "Led development of marketing sites and landing pages with animation.",
      technologies: ["Next.js", "JavaScript", "Framer Motion", "Sass"],
      modalContent: (
        <>
          <p>
            Designed interactive pages using animation libraries like Framer
            Motion. Integrated CMS systems and improved SEO.
          </p>
          <p>
            Collaborated with designers and marketing to launch products faster
            and improve engagement.
          </p>
        </>
      ),
    },
    {
      title: "Junior Web Developer",
      company: "ADAPT Community Network",
      link: "#",
      dateRange: "2021 — 2023",
      description:
        "Collaborated with designers to implement clean, mobile-first layouts.",
      technologies: ["React", "Styled Components", "GSAP", "HTML5"],
      modalContent: (
        <>
          <p>
            Worked closely with senior developers and designers to create
            mobile-first, accessible pages.
          </p>
          <p>Helped refactor legacy code and improve build performance.</p>
        </>
      ),
    },
    {
      title: "Founder & Web Developer",
      company: "webDefinitely",
      link: "#",
      dateRange: "2016 — 2021",
      description:
        "Contributed to a component library and helped refactor legacy code.",
      technologies: ["React", "Redux", "Bootstrap", "Jest"],
      modalContent: (
        <>
          <p>
            Ran a solo dev studio where I built websites and admin dashboards
            for small businesses.
          </p>
          <p>
            Developed and maintained a custom CMS for content-heavy clients.
          </p>
        </>
      ),
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
        <Sidebar activeSection={activeSection} />

        <main className="mainTop lg:w-3/5 p-6 lg:p-12">
          <AboutSection aboutRef={aboutRef} />
          <ExperienceSection
            experienceRef={experienceRef}
            experienceList={experienceList}
            onOpenModal={openModal}
          />
          <ProjectsSection projectsRef={projectsRef} />
        </main>
      </div>

      <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />

      {isModalOpen && selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={closeModal}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default Home;
