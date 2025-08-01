import React from 'react';
import { Code2, Server, Cloud } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const Services = () => {
  useScrollAnimation();

  return (
    <section className="bg-secondary scroll-reveal">
      <div>
        {/* Heading */}
        <div className="flex flex-col text-textMain text-center mb-14 scroll-reveal">
          <p className="font-semibold mt-24">What I offer</p>
          <h1 className="font-bold text-4xl">Services</h1>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-10 text-textMain px-4 scroll-reveal">
          {/* Frontend */}
          <div className="w-full scroll-reveal">
            <div className="text-center text-lg font-semibold bg-primary p-6 rounded-b-3xl shadow-lg mb-6 flex justify-center items-center gap-2">
              <Code2 className="w-5 h-5" />
              <h1>Frontend</h1>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Captivating UI Design: Create engaging interfaces.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Flawless Frontend Development: Implement designs seamlessly.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Lightning-Fast Performance: Optimize for speed and responsiveness.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Inclusive Accessibility: Ensure accessibility for all users.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Collaborative Excellence: Drive success through teamwork and communication.</p>
            </div>
          </div>

          {/* Backend */}
          <div className="w-full scroll-reveal">
            <div className="text-center text-lg font-semibold bg-primary p-6 rounded-b-3xl shadow-lg mb-6 flex justify-center items-center gap-2">
              <Server className="w-5 h-5" />
              <h1>Backend</h1>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Database Management: Efficiently handle data storage and retrieval.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />API Development: Build scalable and secure APIs.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Performance Optimization: Fine-tune for speed and reliability.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Security Implementation: Protect sensitive data.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Automated Testing: Ensure reliable software delivery.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Cloud Integration: Seamlessly integrate with cloud services for scalability and flexibility.</p>
            </div>
          </div>

          {/* Hosting */}
          <div className="w-full scroll-reveal">
            <div className="text-center text-lg font-semibold bg-primary p-6 rounded-b-3xl shadow-lg mb-6 flex justify-center items-center gap-2">
              <Cloud className="w-5 h-5" />
              <h1>Hosting</h1>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Reliable Hosting: Secure and dependable website hosting.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Scalable Infrastructure: Flexible resources for changing demands.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Performance Monitoring: Constantly optimize for speed and uptime.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Security Measures: Strong protection against cyber threats.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />Automated Testing: Ensure reliable software delivery.</p>
              <p className="flex items-start gap-2"><IoCheckmarkDoneSharp className="mt-1 text-gray-500" />24/7 Support: Always available for assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
