import React, { useEffect } from 'react'
import { FaFacebook, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiNamecheap } from 'react-icons/si'
import { Link } from 'react-router'
import "aos/dist/aos.css"
import AOS from "aos"

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: false,      // allow repeat
      offset: 0,        // trigger immediately when visible
      easing: "ease-in-out",
      mirror: true,     // re-animate when scrolling up
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <section id="about" className="pt-[40px] pb-[60px] bg-prymary">
        <div className="container">
          <h2
            className="text-center text-[48px] font-bold font-prymary text-white mb-[48px]"
            data-aos="fade-down"
          >
            About
          </h2>

          <p
            className="max-w-[745px] text-[18px] font-normal font-prymary text-white text-center mx-auto pb-10 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am Rakib, a passionate Frontend Developer building dynamic and responsive web applications.
            Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. I help you create websites for your business
            at affordable cost. My objective is to deliver work within time and budget that meets client requirements.
          </p>

          <div className="about_Info flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 text-center">
            
            {/* ---------- Name ---------- */}
            <div
              className="single_About1"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              <Link><SiNamecheap className="text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]" /></Link>
              <h2 className="text-[18px] font-normal font-prymary text-white mt-[18px]">Name</h2>
              <h2 className="text-[22px] font-normal font-prymary text-white">MD. Rakib Hasan</h2>
            </div>

            {/* ---------- Email ---------- */}
            <div
              className="single_About1"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-anchor-placement="top-bottom"
            >
              <Link><MdEmail className="text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]" /></Link>
              <h2 className="text-[18px] font-normal font-prymary text-white mt-[18px]">Email Address</h2>
              <h2 className="text-[22px] font-normal font-prymary text-white break-all">ornilhasanridoy@gmail.com</h2>
            </div>

            {/* ---------- Facebook ---------- */}
            <div
              className="single_About1"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-anchor-placement="top-bottom"
            >
              <Link><FaFacebook className="text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]" /></Link>
              <h2 className="text-[18px] font-normal font-prymary text-white mt-[18px]">Facebook</h2>
              <h2 className="text-[22px] font-normal font-prymary text-white">MD. Rakib Hasan</h2>
            </div>

            {/* ---------- Phone ---------- */}
            <div
              className="single_About1"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-anchor-placement="top-bottom"
            >
              <Link><FaPhone className="text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]" /></Link>
              <h2 className="text-[18px] font-normal font-prymary text-white mt-[18px]">Phone</h2>
              <h2 className="text-[22px] font-normal font-prymary text-white">+8801904522130</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
