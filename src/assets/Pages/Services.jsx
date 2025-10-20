import React, { useState } from "react";
import { FaCode, FaLaptopCode, FaPenNib, FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Software Development",
    icon: <FaCode />,
    desc: "Building scalable software with modern technologies.",
    details: "I work with Node.js, Python, and cloud deployment for production-ready systems."
  },
  {
    id: 2,
    title: "Web Development",
    icon: <FaLaptopCode />,
    desc: "Modern, secure, and responsive websites.",
    details: "I create web apps using React, Tailwind, and backend APIs."
  },
  {
    id: 3,
    title: "Web Design",
    icon: <FaPenNib />,
    desc: "User-friendly and attractive website layouts.",
    details: "Focus on UI/UX, color theory, and layout balance."
  },
];

const WhatIDo = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`p-8 rounded-2xl bg-[#081229] border transition duration-300 cursor-pointer ${
                active === item.id ? "border-green-400 shadow-lg shadow-green-400/20" : "border-transparent"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-green-400 text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {active === item.id && (
                  <p className="mt-3 text-gray-300 text-sm">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
