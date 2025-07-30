import React, { useEffect, useRef, useState } from "react";
import img from "../assets/img.png";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {

  // const [name, setName] = useState("")
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()

  // const proceed = () => {
  //   if(!name.trim()) return;

  //   setLoading(true);
  //   setTimeout(() => {
  //       navigate("/contact",  {state: {name} })
  //   navigate("/portfolio",  {state: {name} })
  //   }, 5000);
  //   };

    const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const handleProceed = () => {
    if (name.trim() === "") return;

    localStorage.setItem("userName", name);
    setLoading(true);

    timeoutRef.current = setTimeout(() => {
      navigate("/home");
    }, 5000);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);
  

  return (
    <section className="min-h-screen bg-[#1f1f38] flex flex-col lg:flex-row items-center justify-center px-6 py-16 gap-16 overflow-hidden">
      
      {/* Left Side */}
      <div className="w-full lg:w-1/2 px-4">
        <h1 className="text-white mb-10 text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left font-bold leading-tight">
          What's Your Name?
        </h1>
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <input
            className="w-full rounded-2xl outline-none py-3 px-6 pr-36 text-lg"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            
          />
          
          <button 
          onClick={handleProceed}
          disabled={loading}
          className="absolute required right-0 top-0 bottom-0 text-white font-semibold border-l-2 rounded-r-2xl px-6 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-base lg:text-lg">
            {loading ? (
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            ) : (
              "Proceed"
            )}
          </button>
          
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center px-4">
        <img
          className="w-60 sm:w-2/3 md:w-1/2 lg:w-full max-w-xl"
          src={img}
          alt="question_mark"
        />
      </div>
    </section>
  );
};

export default Main;
