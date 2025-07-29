import React from 'react';
import fix from "../assets/fix.png";
import useScrollAnimation from "./useScrollAnimation";

const Work = () => {
  useScrollAnimation();

  return (
    <section className="bg-secondary py-20 px-4">
      {/* Section header */}
      <div className="flex flex-col text-textMain text-center mb-14 scroll-reveal">
        <p className="font-semibold mt-16">My Recent Work</p>
        <h1 className="font-bold text-4xl">Portfolio</h1>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto scroll-reveal">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="border-emerald-400 p-6 rounded-xl hover:border-accent transition-all duration-300 scroll-reveal"
            style={{ boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.2)' }}
          >
            <img
              className="w-full max-w-[320px] mx-auto rounded-3xl mb-4"
              src={fix}
              alt="project"
            />
            <p className="mb-6 text-textMain text-center">wwwwwww</p>

            <div className="flex justify-center gap-4">
              <a className="bg-primary text-textMain hover:bg-accentSoft hover:cursor-pointer border border-border rounded-xl px-6 py-3 text-center">
                Github
              </a>
              <a className="bg-primary text-textMain hover:bg-accentSoft hover:cursor-pointer border border-border rounded-xl px-6 py-3 text-center">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="mt-12 flex justify-center scroll-reveal">
        <button className="bg-primary text-textMain hover:bg-accentSoft hover:cursor-pointer rounded-2xl px-8 py-4 text-lg font-semibold">
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Work;
