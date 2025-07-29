import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

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

      <div className="text-center mt-4 text-white text-sm">
        <p className="flex justify-center items-center gap-2">
          <FaRegCopyright className="text-lg" />
          CodeOfSolomon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
