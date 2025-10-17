import React, { useEffect } from 'react'
import { FaFacebook, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiNamecheap } from 'react-icons/si'
import { Link } from 'react-router'
import 'aos/dist/aos.css'
import AOS from 'aos'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <>
      <section id='About' className='pt-[40px] pb-[60px] bg-prymary'>
        <div className='container px-4 md:px-10'>
          {/* ---------- Title ---------- */}
          <h2
            id='about_title'
            className='text-center text-[32px] sm:text-[40px] md:text-[48px] font-bold font-prymary text-white mb-[30px]'
            data-aos='fade-down'
          >
            About
          </h2>

          {/* ---------- Description ---------- */}
          <p
            className='max-w-[745px] text-[16px] sm:text-[18px] font-normal font-prymary text-white text-center m-auto pb-10 leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            I am Rakib, a passionate Frontend Developer building dynamic and responsive web
            applications. Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. I help you create
            websites for your business at an affordable cost. My objective is to deliver work within
            time and budget that meets the client's requirements.
          </p>

          {/* ---------- Info Cards ---------- */}
          <div className='about_Info flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20'>
            {/* --- Name --- */}
            <div
              className='single_About1 text-center'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <Link>
                <SiNamecheap className='text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]' />
              </Link>
              <h2 className='text-[18px] font-normal font-prymary text-white mt-[18px]'>
                Name
              </h2>
              <h2 className='text-[20px] sm:text-[22px] font-normal font-prymary text-white'>
                MD. Rakib Hasan
              </h2>
            </div>

            {/* --- Email --- */}
            <div
              className='single_About1 text-center'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <Link>
                <MdEmail className='text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]' />
              </Link>
              <h2 className='text-[18px] font-normal font-prymary text-white mt-[18px]'>
                Email Address
              </h2>
              <h2 className='text-[20px] sm:text-[22px] font-normal font-prymary text-white break-words px-2'>
                ornilhasanridoy@gmail.com
              </h2>
            </div>

            {/* --- Facebook --- */}
            <div
              className='single_About1 text-center'
              data-aos='zoom-in'
              data-aos-delay='500'
            >
              <Link>
                <FaFacebook className='text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]' />
              </Link>
              <h2 className='text-[18px] font-normal font-prymary text-white mt-[18px]'>
                Facebook
              </h2>
              <h2 className='text-[20px] sm:text-[22px] font-normal font-prymary text-white'>
                MD. Rakib Hasan
              </h2>
            </div>

            {/* --- Phone --- */}
            <div
              className='single_About1 text-center'
              data-aos='zoom-in'
              data-aos-delay='600'
            >
              <Link>
                <FaPhone className='text-4xl text-[#85f994c5] mx-auto hover:scale-[1.2] duration-[.4s]' />
              </Link>
              <h2 className='text-[18px] font-normal font-prymary text-white mt-[18px]'>
                Phone
              </h2>
              <h2 className='text-[20px] sm:text-[22px] font-normal font-prymary text-white'>
                +8801904522130
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
