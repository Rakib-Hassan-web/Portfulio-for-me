import React from 'react'
import { Link } from 'react-router'
import bnrimg from '../image/Adobe Express - file-Photoroom.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { TbBrandLinkedinFilled } from 'react-icons/tb'

const Banner = () => {
  return (
    <>
      <section id='banner' className='py-[70px] bg-prymary'>
        <div className='container'>
          <div className='banner_main flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[150px] px-5'>

            {/* ---------- text area ---------- */}
            <div className='bannertexxt lg:pl-[50px] text-center lg:text-left'>
              <div className='w-full lg:w-[400px]'>
                <h2 className='font-prymary font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-tight'>
                  <Typewriter
                    words={['Hi,', 'I', 'am', 'Md.Rakib', 'Hasan']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>

              <p className='mt-[9px] text-[#828282] font-medium text-[16px] sm:text-[18px] font-prymary mb-[30px]'>
                Frontend Developer
              </p>

              <Link>
                <button className='button'>
                  <span className='button-content font-medium font-prymary text-[16px] text-white'>
                    Download CV
                  </span>
                </button>
              </Link>

              {/* ---------- follow me ---------- */}
              <div>
                <h2 className='mt-9 font-prymary text-lg text-[#828282]'>Follow me</h2>

                <div className='mt-5 flex items-center justify-center lg:justify-start gap-4'>
                  <Link to='https://www.facebook.com/rakib.ahmed.216234/'>
                    <FaFacebook className='text-3xl text-white hover:text-[#1877F2] hover:scale-[1.3] duration-300' />
                  </Link>

                  <Link to='https://www.linkedin.com/in/rakib-hasan-wev-44646336a/'>
                    <TbBrandLinkedinFilled className='text-4xl text-white hover:text-[#0077B5] hover:scale-[1.3] duration-300' />
                  </Link>

                  <Link to='https://github.com/Rakib-Hassan-web'>
                    <FaGithub className='text-3xl text-white hover:text-white hover:scale-[1.3] duration-300' />
                  </Link>
                </div>
              </div>
            </div>

            {/* ---------- image area ---------- */}
            <div className='banner_img flex justify-center'>
              <img
                className='bg-cover w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto rounded-full transition-all duration-500 hover:scale-105'
                src={bnrimg}
                alt='Banner'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
