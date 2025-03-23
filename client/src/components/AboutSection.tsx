import React from "react";

interface Props {
  aboutRef: React.RefObject<HTMLElement | null>;
}

const AboutSection: React.FC<Props> = ({ aboutRef }) => (
  <section id="about" ref={aboutRef} className="mb-16 lg:mb-28">
    <h3 className="hide text-base">ABOUT</h3>
    <div className="space-y-6 text-base md:text-lg leading-relaxed ">
      <p>
        Hi, I'm <strong className="font-semibold">Mohamed Nagy</strong> — a web
        developer with a passion for building clean, responsive, and
        user-focused applications. I specialize in the{" "}
        <strong className="font-semibold">MERN stack</strong>, combining modern
        front-end tools like <strong className="font-semibold">React</strong>{" "}
        and <strong className="font-semibold">TypeScript</strong> with robust
        backend solutions to bring ideas to life. I care deeply about design,
        performance, and creating seamless digital experiences that are both
        intuitive and enjoyable.
      </p>

      <p>
        My approach is rooted in writing{" "}
        <strong className="font-semibold">clean, maintainable code</strong> and
        staying up-to-date with the latest in web technologies. I enjoy building
        features that solve real problems, whether it's a simple landing page or
        a full-stack application. Every project is an opportunity to learn,
        improve, and deliver something valuable — and I thrive in environments
        where growth and creativity go hand in hand.
      </p>

      <p>
        This portfolio showcases my journey, skills, and recent work. I'm
        currently open to{" "}
        <strong className="font-semibold">freelance opportunities</strong>,
        collaborations, or full-time roles where I can contribute and continue
        growing. If you're looking for a developer who’s motivated,
        detail-oriented, and excited to build meaningful web experiences — let’s
        connect.
      </p>
    </div>
  </section>
);

export default AboutSection;
