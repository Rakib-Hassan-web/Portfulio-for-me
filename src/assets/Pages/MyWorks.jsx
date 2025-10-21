import React from 'react'

import { FaCode, FaLaptopCode, FaPaintBrush, FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router';
import thum1 from '../image/Thumbnail.jpg'
import thum2 from '../image/Thumbnail Post.png'

const MyWorks = () => {


    
  return (
    <>
    
    

  <section className="bg-prymary  text-white py-15 mb-0 px-6">
    <div className="container">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>


      <div className='flex items-center justify-between mb-32'>


{/* --------------1st cart------- */}

        <div  className=' w-70 h-80 bg-[#fff] rounded-2xl '>
          <Link to={'https://e-commarce-project-nexton.vercel.app/'} target=' blank' >
          <img src={thum1} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl  ' />
          <div className='mt-10'>
            <h2 className=' font-prymary text-base text-black font-bold text-center'> NEXTON E-Commerce Project  <span className=' block'> ( React JS)</span></h2>
            

          
          </div>
               </Link>
        </div>




{/* --------------2nd cart------- */}

        <div  className=' w-70 h-80 bg-[#fff] rounded-2xl '>
          <Link to={'https://furniture-e-commarche-project-with.vercel.app/'} target=' blank' >
          <img src={thum2} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl  ' />
          <div className='mt-10'>
            <h2 className=' font-prymary text-base text-black font-bold text-center'> FANITURE E-Commerce Project  <span className=' block'> ( React JS)</span></h2>
            

          
          </div>
               </Link>
        </div>



        <div  className=' w-70 h-100 bg-blue-300 rounded-2xl'>
          <Link>
          <img src="#" alt="image" className='bg-gray-600 w-full h-70 rounded-2xl ' />
          <div>
            <h2>project name</h2>
            <h2>whic elements ar use in this project ( like : html ,css ,react ,js)</h2>
          </div>
               </Link>
        </div>




        <div  className=' w-70 h-100 bg-blue-300 rounded-2xl'>
          <Link>
          <img src="#" alt="image" className='bg-gray-600 w-full h-70 rounded-2xl ' />
          <div>
            <h2>project name</h2>
            <h2>whic elements ar use in this project ( like : html ,css ,react ,js)</h2>
          </div>
               </Link>
        </div>





        <div  className=' w-70 h-100 bg-blue-300 rounded-2xl'>
          <Link>
          <img src="#" alt="image" className='bg-gray-600 w-full h-70 rounded-2xl ' />
          <div>
            <h2>project name</h2>
            <h2>whic elements ar use in this project ( like : html ,css ,react ,js)</h2>
          </div>
               </Link>
        </div>









      </div>






      {/* /-----------------button--------- */}
      <Link className='  font-prymary font-bold text-green-500 flex justify-center text-2xl'>Show More...</Link>
      </div>


    </section>
 
    
    
    
    
    
    
    
    
    </>
  )
}

export default MyWorks