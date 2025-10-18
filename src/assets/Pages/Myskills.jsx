import React from 'react'
import { FaBootstrap, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoFirebase } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'

const Myskills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaHtml5 />, name: 'Html5' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind Css' },
    { icon: <TiCss3 />, name: 'Css' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <IoLogoJavascript />, name: 'JavaScript' },
    { icon: <IoLogoFirebase />, name: 'Firebase' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <FaGithub />, name: 'Github' },
  ]

  return (
    <section id="mySkill" className="pt-[130px] bg-prymary">
      <div className="container">
        <h2 className="text-center text-[48px] font-bold font-prymary text-white">
          My Skills
        </h2>

        {/* -------- skill grid -------- */}
        <div
          className="
            pt-[73px]
            grid
            gap-8
            justify-items-center
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
                hover:scale-[1.1]
                duration-300
                bg-gradient-to-r
                from-slate-400
                to-slate-700
                rounded-[10px]
                flex
                flex-col
                justify-center
                items-center
                w-[140px] h-[180px]
                sm:w-[180px] sm:h-[220px]
                lg:w-[200px] lg:h-[250px]
              "
            >
              <div className="text-5xl sm:text-6xl text-white">{skill.icon}</div>
              <h2 className="py-[10px] sm:py-[15px] w-full text-center text-[18px] sm:text-[23px] font-medium font-prymary text-white">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Myskills
