import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    <section id='navbar' className='py-[40px]  bg-prymary'>


 <div className="container flex justify-between items-center ">

<Link className='text-white  font-bold text-[36px] font-prymary'>RHR</Link>
<div id="Navitems " >
<ul className='flex items-center gap-10 text-white text-18px] font-normal font-prymary' >
    <li className='  p-[10px]  hover:scale-[1.2] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s] '><Link>About me</Link></li>

<li className='  p-[10px]  hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s] '><Link>Services</Link></li>



<li className='  p-[10px]  hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s] '><Link>Skills</Link></li>

<li className='  p-[10px]  hover:scale-[1.1] hover:text-black hover:rounded-[15px] hover:bg-[#85f994c5] duration-[.4s] '><Link>Contact me</Link></li>

</ul>
</div>
 </div>

    </section>
    

    
    </>
  )
}

export default Navbar