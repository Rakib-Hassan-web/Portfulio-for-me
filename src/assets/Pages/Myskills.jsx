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
      <section id='skills' className='pt-[130px] bg-prymary'>
        <div className="container">
          <h2 id='about_title' className='text-center text-[48px] font-bold font-prymary text-white'>
            My Skills
          </h2>

          <div
 

            {[
              { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'React' },
 

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
