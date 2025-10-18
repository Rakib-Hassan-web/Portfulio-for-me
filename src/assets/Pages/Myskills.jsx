import React from 'react'
import { FaBootstrap, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoFirebase } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'

const Myskills = () => {
  return (
    <>
      <section id='MYSkill' className='pt-[130px] mt-0 bg-prymary'>
        <div className="container">

          <h2 id='about_title' className='text-center text-[48px] font-bold font-prymary text-white'>My Skills</h2>

          <div className="skilRow pt-[73px] flex gap-[70px] sm:gap-[40px] items-center flex-wrap justify-center pl-[26px]">

            {/* React */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px] 
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <FaReact className='text-6xl' style={{ color: "#61DBFB" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>React</h2>
            </div>

            {/* HTML */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <FaHtml5 className='text-6xl' style={{ color: "#E44D26" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Html5</h2>
            </div>

            {/* Tailwind */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <RiTailwindCssFill className='text-6xl' style={{ color: "#38BDF8" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Tailwind Css</h2>
            </div>

            {/* CSS */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <TiCss3 className='text-6xl' style={{ color: "#264DE4" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Css</h2>
            </div>

            {/* Bootstrap */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <FaBootstrap className='text-6xl' style={{ color: "#7952B3" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Bootstrap</h2>
            </div>

            {/* Figma */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <FaFigma className='text-6xl' style={{ color: "#A259FF" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Figma</h2>
            </div>

            {/* JavaScript */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <IoLogoJavascript className='text-6xl' style={{ color: "#F7DF1E" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>JavaScript</h2>
            </div>

            {/* Firebase */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <IoLogoFirebase className='text-6xl' style={{ color: "#FFCA28" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Firebase</h2>
            </div>

            {/* Redux */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <SiRedux className='text-6xl' style={{ color: "#764ABC" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Redux</h2>
            </div>

            {/* Github */}
            <div className="singl_skill hover:scale-[1.1] duration-[.4s] flex-col gap-2 
              w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]
              bg-gradient-to-r from-slate-400 to-slate-700 rounded-[10px] flex justify-center items-center">
              <FaGithub className='text-6xl' style={{ color: "#171515" }} />
              <h2 className='py-[15px] w-full text-center text-[23px] sm:text-[18px] font-medium font-prymary text-white'>Github</h2>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Myskills
