import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";
import nodejs from "../assets/nodejs.svg";
import adobe from "../assets/adobe.svg";
import useScrollAnimation from "./useScrollAnimation"; // 👈 Add your hook

const Skills = () => {
  useScrollAnimation(); // 👈 Activate scroll animation

  return (
    <section className="bg-secondary text-textMain py-16 scroll-reveal">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4 scroll-reveal">
        <p className="font-semibold text-sm sm:text-base">Experience</p>
        <h1 className="font-bold text-3xl sm:text-4xl">My Skills</h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto scroll-reveal">
        {[
          { src: html, alt: "html_logo", name: "HTML" },
          { src: css, alt: "css_logo", name: "CSS" },
          { src: js, alt: "JS_logo", name: "JavaScript", className: "w-20" },
          { src: react, alt: "React_logo", name: "ReactJS", className: "w-14" },
          { src: git, alt: "git_logo", name: "Git" },
          { src: git, alt: "github_logo", name: "GitHub" },
          { src: tailwind, alt: "tailwind_logo", name: "TailwindCSS", className: "w-24 h-10" },
          { src: nodejs, alt: "node_logo", name: "NodeJS", className: "w-20" },
          { src: adobe, alt: "AI_logo", name: "Illustrator", className: "w-20" },
        ].map((item, i) => (
          <article
            key={i}
            className="border border-accentSoft hover:border-accent rounded-3xl p-6 sm:p-8 font-semibold text-lg text-center transition duration-300 scroll-reveal"
            style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`${item.className || "w-12"} h-12 mb-4 mx-auto`}
            />
            {item.name}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
