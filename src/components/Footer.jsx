import React from 'react';
import { FaInstagram, FaLinkedin, FaPhone, FaRegCopyright, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative h-[50vh] bg-primary py-10">
      <ul className="flex flex-col items-center text-white gap-4 p-6 md:flex-row md:justify-center md:gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>



      <div className="flex justify-center space-x-6 text-3xl mt-4 text-textMain">
  
  <a
    href="tel:+2348142526161"
    className="hover:text-blue-400 transition"
    aria-label="Call"
  >
    <FaPhone />
  </a>

 
  <a
    href="https://instagram.com/ayoadedeji_"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  
  <a
    href="https://linkedin.com/in/ayobami-omotiba-926232239/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition"
    aria-label="LinkedIn"
  >
    <FaLinkedin/>
  </a>

  
  <a
    href="https://youtube.com/@CodeOfSolomon"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500 transition"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>
</div>
      
      <div className="text-center mt-4 text-white text-sm">
        <p className="mt-20 flex justify-center items-center gap-2">
          <FaRegCopyright className="text-lg" />
          CodeOfSolomon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
