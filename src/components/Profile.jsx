import React from "react";
import profilePic from "../assets/profilePic.png";
import useScrollAnimation from "./useScrollAnimation";

const Profile = () => {
  useScrollAnimation();

  return (
    <section className="min-h-screen bg-secondary text-textMain overflow-x-hidden">
      <div className="px-4 py-16 sm:px-6 md:px-12 lg:px-28">
        {/* Header */}
        <div className="flex flex-col text-center mb-14 scroll-reveal">
          <p className="font-semibold">Get to Know</p>
          <h1 className="font-bold text-3xl sm:text-4xl">About Me</h1>
        </div>

      {/* Main content */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center scroll-reveal">
  
  {/* Image Wrapper */}
  <div className="flex justify-center">
    <div className="w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 
      rounded-full overflow-hidden border-4 border-primary bg-secondary 
      shadow-[0_0_20px_4px_rgba(0,150,255,0.6)] transition-all duration-500 ease-in-out">
      
      <img
        src={profilePic}
        alt="About me"
        className="w-full h-full object-cover bg-primary"
      />
    </div>
  </div>




          {/* Info */}
          <div className="scroll-reveal">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-semibold mb-8">
              {[
                { title: "Experience", lines: ["2+ Years"] },
                {
                  title: "Clients",
                  lines: ["10+ Satisfied", "Clients Globally"],
                },
                {
                  title: "Projects",
                  lines: ["Multiple Projects", "completed"],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-accentSoft py-6 px-2 space-y-2 rounded-lg hover:border-accent"
                  style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
                >
                  <h1>{item.title}</h1>
                  {item.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <p className="mb-8 text-center font-medium text-base sm:text-lg">
              I’m a full-stack developer with a passion for building functional,
              accessible, and beautiful digital experiences. My core tech stack
              includes React.js for dynamic frontends and Node.js for robust
              backend services — but my real strength is in thinking deeply
              about user needs and translating that into purposeful code.
            </p>

            <div className="flex justify-center md:justify-start scroll-reveal">
              <a
                href="https://wa.me/2349031978634?text=Hi%20there%2C%20I'm%20interested%20in%20your%20work"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-textMain px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-300 hover:text-textMuted hover:bg-blue-600 transition-all duration-500 ease-in-out"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
