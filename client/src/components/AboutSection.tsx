import React from "react";

interface Props {
  aboutRef: React.RefObject<HTMLElement | null>;
}

const AboutSection: React.FC<Props> = ({ aboutRef }) => (
  <section id="about" ref={aboutRef} className="mb-16 lg:mb-28">
    <h3 className="hide text-base dark:text-textWhiteOnDark text-textBlackOnLight">
      ABOUT
    </h3>
    <div className="space-y-6 text-base md:text-lg leading-relaxed ">
      <p>
        Hi, I'm a web developer with a passion for building clean, responsive,
        and user-focused applications. I specialize in the{" "}
        <strong className="dark:text-textWhiteOnDark text-textBlackOnLightk">
          MERN stack
        </strong>
        , combining modern front-end tools like{" "}
        <strong className="dark:text-white StrongLightMode">React</strong> and{" "}
        <strong className="dark:text-white StrongLightMode">TypeScript</strong>{" "}
        with robust backend solutions to bring ideas to life. I care deeply
        about design, performance, and creating seamless digital experiences
        that are both intuitive and enjoyable across all devices and platforms.
      </p>

      <p>
        My approach is rooted in writing{" "}
        <strong className="dark:text-white StrongLightMode">
          clean, maintainable code
        </strong>{" "}
        and staying up-to-date with the latest in web technologies, frameworks,
        and development best practices. I enjoy building features that solve
        real problems, whether it's a simple landing page, an interactive
        dashboard, or a full-stack application with complex workflows. Every
        project is an opportunity to learn, improve, and deliver something
        valuable — and I thrive in environments where growth, collaboration, and
        creativity go hand in hand.
      </p>

      <p>
        This portfolio showcases my journey, skill set, and recent work. I'm
        currently open to freelance opportunities, collaborations, or full-time
        roles where I can contribute meaningfully and continue growing as a
        developer. Motivated and detail-oriented, ready to build impactful web
        experiences — let’s connect.
      </p>
    </div>
  </section>
);

export default AboutSection;
