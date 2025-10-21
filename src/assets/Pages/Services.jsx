import React, { useState } from 'react'
import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaUsers,
  FaLightbulb,
} from 'react-icons/fa'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const services = [
    {
      icon: <FaCode className="text-4xl text-green-400 font-prymary" />,
      title: 'Software Development',
      desc: 'Building efficient, scalable, and high-performance software solutions.',
      details :
        'I build robust applications using Node.js, Python, and databases like MongoDB or PostgreSQL. My focus is on performance and scalability for real-world production.',
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-400" />,
      title: 'Web Development',
      desc: 'Creating modern, responsive, and secure web applications.',
      details:
        'I specialize in React, Tailwind CSS, and RESTful API integration. I ensure responsive layouts, optimized performance, and secure code practices.',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-green-400" />,
      title: 'Web Design',
      desc: 'Designing user-friendly and attractive website layouts.',
      details:
        'From concept to creation, I design clean, minimal, and visually engaging interfaces using Figma and Adobe XD.',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-green-400" />,
      title: 'Responsive Web Design',
      desc: 'Ensuring seamless user experience across all devices.',
      details:
        'Every design I create is fully responsive and optimized for mobile, tablet, and desktop views using modern CSS frameworks.',
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: 'UX Integration',
      desc: 'Crafting smooth and engaging user experiences with proper UX design.',
      details:
        'I use data-driven design decisions and user feedback to craft interfaces that are both intuitive and enjoyable.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-green-400" />,
      title: 'Creative Solutions',
      desc: 'Innovative approaches to solve problems effectively.',
      details:
        'I love solving complex challenges with creative coding, ensuring functionality meets aesthetics.',
    },
  ]

  return (
    <>
      <section id="services" className="bg-prymary text-white py-26 mb-0 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`bg-gray-900 border rounded-2xl p-6 text-center cursor-pointer shadow-md transition duration-300 ease-in-out hover:-translate-y-2 ${
                activeIndex === index
                  ? 'border-green-400 shadow-green-500/30'
                  : 'border-green-700 hover:shadow-green-600'
              }`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>

          
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-sm font-prymary">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
