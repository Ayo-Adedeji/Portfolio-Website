import React from 'react';
import bgImage from "../assets/bgImage.jpg";
import useScrollAnimation from './useScrollAnimation';
import { Typewriter } from 'react-simple-typewriter';

const Portfolio = () => {
  useScrollAnimation();
  const name = localStorage.getItem("userName") || "there";

  return (
    <main
      className="bg-cover bg-center min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="scroll-reveal flex flex-col items-start sm:items-center w-full max-w-5xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 space-y-6 rounded-md">
        <p className="font-semibold text-textMain text-sm sm:text-base">
          Hello <span className="text-accent font-bold">{name}</span>, I'm
        </p>

        <div className="scroll-reveal space-y-3 text-textMain text-left sm:text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase break-words">
            Ayobami Solomon
          </h1>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase break-words">
            Omotiba
          </h1>

          {/* Typewriter Section */}
          <p className="text-lg sm:text-2xl md:text-3xl font-medium">
            <span className="text-accent inline-block">
              <Typewriter
                words={[
                  'Full-Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                pauseOnHover={true}
              />
            </span>
          </p>

          <div className="pt-4">
            <a 
              href="https://wa.me/2349031978634?text=Hi%20there%2C%20I'm%20interested%20in%20your%20work"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-6 py-3 rounded-md text-base sm:text-lg text-textMain hover:text-accent font-semibold hover:bg-blue-600 transition-all duration-500 ease-in-out"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
