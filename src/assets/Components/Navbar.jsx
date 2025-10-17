import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section id='navbar' className='py-[20px] bg-prymary shadow-md'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          {/* ----------Logo---------- */}
          <Link className='text-white font-bold text-[32px] font-prymary tracking-wide'>
            RHR
          </Link>

          {/* ----------Desktop Menu---------- */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-10 text-white text-[18px] font-normal font-prymary'>
              <li className='p-[10px] hover:scale-110 hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-300'>
                <Link>About me</Link>
              </li>
              <li className='p-[10px] hover:scale-110 hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-300'>
                <Link>Services</Link>
              </li>
              <li className='p-[10px] hover:scale-110 hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-300'>
                <Link>Skills</Link>
              </li>
              <li className='p-[10px] hover:scale-110 hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-300'>
                <Link>Contact me</Link>
              </li>
            </ul>
          </div>

          {/* ----------Mobile Menu Button---------- */}
          <button
            className='md:hidden text-white text-2xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ----------Mobile Dropdown Menu---------- */}
        {menuOpen && (
          <div className='md:hidden bg-prymary border-t border-[#85f99488] mt-2'>
            <ul className='flex flex-col items-center gap-4 py-4 text-white text-[16px] font-prymary'>
              <li
                onClick={() => setMenuOpen(false)}
                className='w-full text-center p-2 hover:bg-[#85f994c5] hover:text-black duration-300'
              >
                <Link>About me</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className='w-full text-center p-2 hover:bg-[#85f994c5] hover:text-black duration-300'
              >
                <Link>Services</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className='w-full text-center p-2 hover:bg-[#85f994c5] hover:text-black duration-300'
              >
                <Link>Skills</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className='w-full text-center p-2 hover:bg-[#85f994c5] hover:text-black duration-300'
              >
                <Link>Contact me</Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  )
}

export default Navbar
