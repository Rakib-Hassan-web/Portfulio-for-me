import React from 'react'
import { Link } from 'react-router';
import thum1 from '../image/Thumbnail.jpg'
import thum2 from '../image/Thumbnail Post.png'
import thum3 from '../image/Frame 2.png'
import thum4 from '../image/the-pros-and-cons-of-paper-to-do-lists.jpeg'
import thum5 from '../image/Screenshot 2025-10-22 010345.png'
import thum6 from '../image/Thumbnail.png'

const MyWorks = () => {
  return (
    <section className="bg-prymary text-white py-15 mb-0 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className='flex flex-wrap justify-center gap-6 mb-32'>

          {/* 1st card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://e-commarce-project-nexton.vercel.app/'} target='blank'>
              <img src={thum1} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  NEXTON E-Commerce Project <span className='block'>( React JS)</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* 2nd card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://furniture-e-commarche-project-with.vercel.app/'} target='blank'>
              <img src={thum2} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  FANITURE E-Commerce Project <span className='block'>( React JS)</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* 3rd card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://e-commace-with-next-js.vercel.app/'} target='blank'>
              <img src={thum3} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  E-Commerce Project Design <span className='block'>( NEXT JS)</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* 4th card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://todo-list-for-js-exam.vercel.app/'} target='blank'>
              <img src={thum4} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  TODO LIST <span className='block'>( HTML , CSS , JS)</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* 5th card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://calculator-with-js-plum.vercel.app/'} target='blank'>
              <img src={thum5} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  CALCULATOR <span className='block'>( HTML , CSS , JS)</span>
                </h2>
              </div>
            </Link>
          </div>

               {/* 6th card */}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-80 bg-[#fff] rounded-2xl'>
            <Link to={'https://furniture-project-with-html-and-css.vercel.app/'} target='blank'>
              <img src={thum6} alt="image" className='bg-gray-600 w-full h-50 rounded-2xl' />
              <div className='mt-10'>
                <h2 className='font-prymary text-base text-black font-bold text-center'>
                  LANDING PAGE <span className='block'>( HTML , CSS )</span>
                </h2>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MyWorks
