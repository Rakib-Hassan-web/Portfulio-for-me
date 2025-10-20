import React from 'react'

import { FaCode, FaLaptopCode, FaPaintBrush, FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router';

const MyWorks = () => {


    
  return (
    <>
    
    

  <section className="bg-prymary  text-white py-15 mb-0 px-6">
    <div className="container">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>


      <div>


{/* --------------1st cart------- */}

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
      </div>


    </section>
 
    
    
    
    
    
    
    
    
    </>
  )
}

export default MyWorks