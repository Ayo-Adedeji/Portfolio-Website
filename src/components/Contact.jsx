import React from "react";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import useScrollAnimation from "./useScrollAnimation"; // ✅ Make sure this path is correct

const Contact = () => {
  useScrollAnimation(); // ✅ Apply scroll animation
  const name = localStorage.getItem("userName") || "there";

  return (
    <section className="bg-secondary text-white px-4 py-20">
      <div className="scroll-reveal flex flex-col text-center mb-14">
        <p className="font-semibold mt-16">Get in touch</p>
        <h1 className="font-bold text-4xl">Contact me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left: Contact Links */}
        <div className="scroll-reveal flex flex-col items-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dasammayo@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Solomon%2C%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 group flex flex-col font-semibold items-center rounded-3xl hover:border hover:border-accentSoft hover:bg-secondary bg-blue-500 text-center py-6 px-4 transition-all duration-300"
            style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
          >
            <SiGmail className="mb-3 text-3xl" />
            <p>Email</p>
            <p className="text-sm">dasammayo@gmail.com</p>
            <p className="mt-2 text-sm group-hover:text-[#aaaaaa]">Send a message</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayobami-omotiba-926232239/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 group flex flex-col font-semibold items-center rounded-3xl hover:border hover:border-accentSoft hover:bg-secondary bg-blue-500 text-center py-6 px-4 transition-all duration-300"
            style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
          >
            <SiLinkedin className="mb-3 text-3xl" />
            <p>LinkedIn</p>
            <p className="text-sm">Ayobami Omotiba</p>
            <p className="mt-2 text-sm group-hover:text-[#aaaaaa]">Send a message</p>
          </a>

          <a
            href="https://wa.me/2349031978634?text=Hi%20there%2C%20I'm%20interested%20in%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 group flex flex-col font-semibold items-center rounded-3xl hover:border hover:border-accentSoft hover:bg-secondary bg-blue-500 text-center py-6 px-4 transition-all duration-300"
            style={{ boxShadow: "0 0 0 3px rgba(100, 255, 218, 0.2)" }}
          >
            <SiWhatsapp className="mb-3 text-3xl" />
            <p>WhatsApp</p>
            <p className="text-sm">09031978634</p>
            <p className="mt-2 text-sm group-hover:text-[#aaaaaa]">Send a message</p>
          </a>
        </div>

        {/* Right: Contact Form */}
        <form
          action="https://formsubmit.co/dasammayo@gmail.com"
          method="POST"
          className="scroll-reveal flex flex-col gap-5 w-full max-w-md mx-auto"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="hidden" name="_subject" value="New Portfolio Message!" />
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I’ll get back to you shortly." />

          <input
            name="name"
            defaultValue={name}
            className="border border-blue-400 bg-secondary rounded-xl p-3 outline-none"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            type="email"
            className="border border-blue-400 bg-secondary rounded-xl p-3 outline-none"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            className="border border-blue-400 bg-secondary rounded-xl p-3 outline-none h-36 resize-none"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-blue-500 text-white font-semibold rounded-2xl p-3 w-40 self-start"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
