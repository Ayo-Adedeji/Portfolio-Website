import React from "react";
import furniture from "../assets/furniture.png";
import weather from "../assets/weather.png";
import resume from "../assets/resume.png";
import useScrollAnimation from "./useScrollAnimation";

const Work = () => {
  useScrollAnimation();

  const projects = [
      {
      img: furniture,
      text: "Step-Up Summit",
      // github: "https://github.com/Ayo-Adedeji/Furniture-Store.git",
      live: "https://stepupsummit.org",
    },
    {
      img: furniture,
      text: "Shine Furniture App",
      github: "https://github.com/Ayo-Adedeji/Furniture-Store.git",
      live: "https://shine-luxury-store.onrender.com",
    },
    {
      img: weather,
      text: "Weather App",
      github: "https://github.com/Ayo-Adedeji/Weather.git",
      live: "https://ayo-adedeji.github.io/Weather/",
    },
    {
      img: resume,
      text: "Online Resume",
      github: "https://github.com/Ayo-Adedeji/Id.git",
      live: "https://idowuodumosu.onrender.com/",
    },
  ];

  return (
    <section className="bg-secondary py-20 px-4">
      <div className="flex flex-col text-textMain text-center mb-14 scroll-reveal">
        <p className="font-semibold mt-16">My Recent Work</p>
        <h1 className="font-bold text-4xl">Portfolio</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto scroll-reveal">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-emerald-400 p-6 rounded-xl hover:border-accent transition-all duration-300 scroll-reveal"
            style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
          >
            <img
              className="w-full max-w-[320px] mx-auto rounded-3xl mb-4"
              src={project.img}
              alt={`project-${index}`}
            />
            <p className="mb-6 text-textMain text-center">{project.text}</p>

            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-textMain  hover:bg-blue-600 hover:bg-accentSoft hover:cursor-pointer border border-border rounded-xl px-6 py-3 text-center"
              >
                Github
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-textMain hover:bg-accentSoft hover:bg-blue-600 hover:cursor-pointer border border-border rounded-xl px-6 py-3 text-center"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center scroll-reveal">
        <button className="bg-primary text-textMain hover:bg-accentSoft  hover:bg-blue-600 hover:cursor-pointer rounded-2xl px-8 py-4 text-lg font-semibold">
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Work;
