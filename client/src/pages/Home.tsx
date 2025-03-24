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
      description:
        "Design, develop, and maintain Power Platform applications while managing SQL Server databases, writing complex queries, integrating data using Microsoft Fabric and Azure, collaborating with stakeholders, providing technical support, maintaining documentation, and driving continuous system improvements.",
      technologies: [
        "PowerPlatform",
        "PowerApps",
        "PowerAutomate",
        "SQLServer",
      ],
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
        "In charge of developing, and maintaining multiple WordPress websites for the organization with a focus on accessibility and user experience. Utilize strong skills in HTML, CSS, JavaScript and PHP backend development to create high-quality, functional websites that meet organizational goals.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
        "API Integration",
        "Responsive Design",
        "SEO",
        "Accessibility",
      ],
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
        "Assisted in designing, developing, and maintaining WordPress websites with a focus on accessibility and user experience. Applied foundational skills in HTML, CSS, and JavaScript to build responsive and functional web pages, while gaining experience in backend development to support website functionality and meet project goals.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "Content Management",
      ],
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
        "Collaborated with local businesses, artists, and entrepreneurs to create custom websites and brand identities. Managed full project lifecycles—from domain and hosting setup to strategic SEO implementation—delivering polished, user-friendly experiences that reflect each client’s unique vision.",
      technologies: [
        "Web Development",
        "Full Stack Development",
        "SEO",
        "Client Collaboration",
        "Responsive Design",
        "Accessibility",
      ],
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
