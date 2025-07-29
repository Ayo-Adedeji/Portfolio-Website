import React from "react";
import { FaHome, FaUser, FaCode, FaServicestack, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavbarBottom = () => {
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "services", label: "Services", icon: <FaServicestack /> },
    { id: "portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-3xl bg-white/10 text-white rounded-full shadow-lg backdrop-blur-md px-4 py-2 flex justify-between items-center">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-xs hover:text-primary transition-all duration-300"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-[10px] sm:text-xs">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default NavbarBottom;
