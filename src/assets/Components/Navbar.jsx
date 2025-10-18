import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false) // mobile menu auto close
  }

  return (
    <section id='navbar' className='py-[30px] bg-prymary fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-0'>
        {/* Logo */}
        <ScrollLink to='banner' className='text-white font-bold text-[36px] font-prymary cursor-pointer'>RHR</ScrollLink>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-10 text-white text-[18px] font-normal font-prymary'>
            <li><ScrollLink to="about" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300  hover:scale-105'>About me</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300  hover:scale-105'>Services</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300  hover:scale-105'>Skills</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300  hover:scale-105'>Contact me</ScrollLink></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col items-center gap-4 py-4 text-white font-prymary'>
          <li><ScrollLink to="banner" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300' onClick={handleLinkClick}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300' onClick={handleLinkClick}>About me</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300' onClick={handleLinkClick}>Services</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300' onClick={handleLinkClick}>Skills</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={700} offset={-80} className='cursor-pointer hover:text-[#85f994c5] duration-300' onClick={handleLinkClick}>Contact me</ScrollLink></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
