import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section id='navbar' className='py-[40px] bg-prymary'>
        <div className='container flex justify-between items-center'>
          <Link className='text-white font-bold text-[36px] font-prymary'>RHR</Link>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-10 text-white text-[18px] font-normal font-prymary'>
              <li className='p-[10px] hover:scale-[1.2] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s]'><Link>About me</Link></li>
              <li className='p-[10px] hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s]'><Link>Services</Link></li>
              <li className='p-[10px] hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s]'><Link>Skills</Link></li>
              <li className='p-[10px] hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s]'><Link>Contact me</Link></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu (Smooth Animation) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='flex flex-col items-center gap-4 py-4 text-white font-prymary'>
            <li className='p-[10px] hover:bg-[#85f994c5] hover:text-black duration-500 w-full text-center'><Link>About me</Link></li>
            <li className='p-[10px] hover:bg-[#85f994c5] hover:text-black duration-500 w-full text-center'><Link>Services</Link></li>
            <li className='p-[10px] hover:bg-[#85f994c5] hover:text-black duration-500 w-full text-center'><Link>Skills</Link></li>
            <li className='p-[10px] hover:bg-[#85f994c5] hover:text-black duration-500 w-full text-center'><Link>Contact me</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
