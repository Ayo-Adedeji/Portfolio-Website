import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default BackToTopButton;
