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
      <section id='MYSkill' className='pt-[130px] bg-prymary'>
        <div className="container">
          <h2 id='about_title' className='text-center text-[48px] font-bold font-prymary text-white'>
            My Skills
          </h2>

          <div
            className="
              skilRow 
              pt-[73px] 
              flex 
              flex-wrap 
              justify-center 
              gap-8 
              sm:gap-6 
              md:gap-10
            "
          >

            {[
              { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'React' },
              { icon: <FaHtml5 style={{ color: '#E34F26' }} />, name: 'HTML5' },
              { icon: <RiTailwindCssFill style={{ color: '#38BDF8' }} />, name: 'Tailwind CSS' },
              { icon: <TiCss3 style={{ color: '#1572B6' }} />, name: 'CSS3' },
              { icon: <FaBootstrap style={{ color: '#fff' }} />, name: 'Bootstrap' },
              { icon: <FaFigma style={{ color: '#F24E1E' }} />, name: 'Figma' },
              { icon: <IoLogoJavascript style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
              { icon: <IoLogoFirebase style={{ color: '#FFCA28' }} />, name: 'Firebase' },
              { icon: <SiRedux style={{ color: '#e44d26' }} />, name: 'Redux' },
              { icon: <FaGithub style={{ color: '#181717' }} />, name: 'Github' },
            ].map((skill, index) => (
              <div
                key={index}
                className="
                  singl_skill 
                  hover:scale-[1.1] duration-[.4s] 
                  flex flex-col gap-2
                  bg-gradient-to-r from-slate-400 to-slate-700 
                  rounded-[10px] justify-center items-center
                  w-[40%] sm:w-[100%] md:w-[22%] lg:w-[13%]
                  h-[200px]
                "
              >
                <div className="text-5xl">{skill.icon}</div>
                <h2 className='py-[10px] w-full text-center text-[20px] font-medium font-prymary text-white'>
                  {skill.name}
                </h2>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default Myskills
