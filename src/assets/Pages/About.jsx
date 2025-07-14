import React from 'react'
import { FaFacebook, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiNamecheap } from 'react-icons/si'
import { Link } from 'react-router'

const About = () => {
  return (
    <>
    
    
    <section id='About ' className='pt-[40px] bg-prymary'>


<div className="container">

<h2 id='about_title ' className='text-center text-[48px] font-bold font-prymary text-white mb-[48px]'>About</h2>

<p className='w-[745px]  text-[18px] font-normal font-prymary text-white text-center m-auto pb-10'>I am Rakib, a passionate Frontend  Developer to building dynamic and responsive web applications. Skilled in HTML, HTML5, CSS, CSS3, javascript, React and Tailwind CSS. I help you create websites for your business at affordable cost.  My objective is to deliver work within time and budget that meets the client's requirements.</p>

<div className="about_Info flex items-center justify-between">

<div className="single_About1  ">
<Link ><SiNamecheap  className='text-4xl   ml-[60px] text-[#85f994c5]  hover:scale-[1.2] duration-[.4s] '/></Link>
    <h2 className='text-[18px] font-normal font-prymary text-white  ml-[50px] mt-[18px] '>Name</h2>
    <h2 className='text-[22px] font-normal font-prymary text-white  ' >MD.Rakib Hasan</h2>
</div>



<div className="single_About1  ">
<Link ><MdEmail className='text-4xl text-[#85f994c5]  ml-[115px]  hover:scale-[1.2] duration-[.4s] '/></Link>
    <h2 className='text-[18px] font-normal font-prymary text-white  ml-[80px] mt-[18px] '>Email Address</h2>
    <h2 className='text-[22px] font-normal font-prymary text-white  ' >ornilhasanridoy@gmail.com</h2>
</div>




<div className="single_About1  ">
<Link ><FaFacebook  className='text-4xl text-[#85f994c5]  ml-[60px]   hover:scale-[1.2] duration-[.4s] '/></Link>

    <h2 className='text-[18px] font-normal font-prymary text-white  ml-[40px] mt-[18px] '>Facebook </h2>
    <h2 className='text-[22px] font-normal font-prymary text-white  ' >MD.Rakib Hasan</h2>
</div>




<div className="single_About1  ">
<Link ><FaPhone   className='text-4xl text-[#85f994c5] ml-[60px] hover:scale-[1.2] duration-[.4s] '/></Link>
    <h2 className='text-[18px] font-normal font-prymary text-white  ml-[50px] mt-[18px] '>Phone</h2>
    <h2 className='text-[22px] font-normal font-prymary text-white  ' >+8801904522130</h2>
</div>








</div>

</div>






    </section>
    
    

    
    </>
  )
}

export default About