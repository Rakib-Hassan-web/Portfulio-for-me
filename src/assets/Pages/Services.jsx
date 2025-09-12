import React from 'react'

import { FaCode, FaLaptopCode, FaPaintBrush, FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";

const Services = () => {


    const services = [
    {
      icon: <FaCode className="text-4xl text-green-400" />,
      title: "Software Development",
      desc: "Building efficient, scalable, and high-performance software solutions."
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-400" />,
      title: "Web Development",
      desc: "Creating modern, responsive, and secure web applications."
    },
    {
      icon: <FaPaintBrush className="text-4xl text-green-400" />,
      title: "Web Design",
      desc: "Designing user-friendly and attractive website layouts."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-green-400" />,
      title: "Responsive Web Design",
      desc: "Ensuring seamless user experience across all devices."
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "UX Integration",
      desc: "Crafting smooth and engaging user experiences with proper UX design."
    },
    {
      icon: <FaLightbulb className="text-4xl text-green-400" />,
      title: "Creative Solutions",
      desc: "Innovative approaches to solve problems effectively."
    },
  ];
  return (
    <>
    
    

  <section className="bg-prymary  text-white py-26 mb-0 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-green-700 rounded-2xl p-6 text-center 
                       shadow-md hover:shadow-green-600 hover:-translate-y-2 
                       transition duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
 
    
    
    
    
    
    
    
    
    </>
  )
}

export default Services