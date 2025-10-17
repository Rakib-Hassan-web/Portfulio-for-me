import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section id='navbar' className='py-[20px] bg-prymary shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          {/* ----------Logo---------- */}
          <Link className='text-white font-bold text-[32px] font-prymary tracking-wide'>
            RHR
          </Link>

          {/* ----------Desktop Menu---------- */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-10 text-white text-[18px] font-normal font-prymary transition-all duration-500 ease-in-out'>
              {['About me', 'Services', 'Skills', 'Contact me'].map((item, i) => (
                <li
                  key={i}
                  className='p-[10px] hover:scale-110 hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] transition-all duration-500 ease-in-out cursor-pointer'
                >
                  <Link>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------Mobile Menu Button---------- */}
          <button
            className='md:hidden text-white text-2xl transition-transform duration-500 ease-in-out'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ----------Mobile Dropdown Menu (Animated)---------- */}
        <div
          className={`md:hidden bg-prymary border-t border-[#85f99488] overflow-hidden transition-all duration-700 ease-in-out ${
            menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='flex flex-col items-center gap-4 py-4 text-white text-[16px] font-prymary'>
            {['About me', 'Services', 'Skills', 'Contact me'].map((item, i) => (
              <li
                key={i}
                onClick={() => setMenuOpen(false)}
                className='w-full text-center p-2 hover:bg-[#85f994c5] hover:text-black transition-all duration-500 ease-in-out cursor-pointer'
              >
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
