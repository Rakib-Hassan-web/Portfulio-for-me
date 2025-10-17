import React, { useEffect } from 'react'
import { FaFacebook, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiNamecheap } from 'react-icons/si'
import { Link } from 'react-router'
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {


useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true,     
        once: false,   
  });
}, []);
  return (
    <>
    
    
   <section id='About ' className='pt-[40px] bg-prymary'>
  <div className="container">
    <h2 
      id='about_title ' 
      className='text-center text-[48px] font-bold font-prymary text-white mb-[48px]'
      data-aos="fade-down"
    >
      About
    </h2>

    <p 
      className='w-[745px]  text-[18px] font-normal font-prymary text-white text-center m-auto pb-10'
      data-aos="fade-up"
      data-aos-delay="200"
    >
      I am Rakib, a passionate Frontend Developer to building dynamic and responsive web applications. Skilled in HTML, HTML5, CSS, CSS3, javascript, React and Tailwind CSS. I help you create websites for your business at affordable cost. My objective is to deliver work within time and budget that meets the client's requirements.
    </p>

    <div className="about_Info flex items-center justify-between flex-wrap gap-6">
      
      <div className="single_About1" data-aos="zoom-in" data-aos-delay="300">
        <Link><SiNamecheap className='text-4xl ml-[60px] text-[#85f994c5] hover:scale-[1.2] duration-[.4s]'/></Link>
        <h2 className='text-[18px] font-normal font-prymary text-white ml-[50px] mt-[18px]'>Name</h2>
        <h2 className='text-[22px] font-normal font-prymary text-white'>MD.Rakib Hasan</h2>
      </div>

      <div className="single_About1" data-aos="zoom-in" data-aos-delay="400">
        <Link><MdEmail className='text-4xl text-[#85f994c5] ml-[115px] hover:scale-[1.2] duration-[.4s]'/></Link>
        <h2 className='text-[18px] font-normal font-prymary text-white ml-[80px] mt-[18px]'>Email Address</h2>
        <h2 className='text-[22px] font-normal font-prymary text-white'>ornilhasanridoy@gmail.com</h2>
      </div>

      <div className="single_About1" data-aos="zoom-in" data-aos-delay="500">
        <Link><FaFacebook className='text-4xl text-[#85f994c5] ml-[60px] hover:scale-[1.2] duration-[.4s]'/></Link>
        <h2 className='text-[18px] font-normal font-prymary text-white ml-[40px] mt-[18px]'>Facebook </h2>
        <h2 className='text-[22px] font-normal font-prymary text-white'>MD.Rakib Hasan</h2>
      </div>

      <div className="single_About1" data-aos="zoom-in" data-aos-delay="600">
        <Link><FaPhone className='text-4xl text-[#85f994c5] ml-[60px] hover:scale-[1.2] duration-[.4s]'/></Link>
        <h2 className='text-[18px] font-normal font-prymary text-white ml-[50px] mt-[18px]'>Phone</h2>
        <h2 className='text-[22px] font-normal font-prymary text-white'>+8801904522130</h2>
      </div>
    </div>
  </div>
</section>

    
    

    
    </>
  )
}

export default About