import React from 'react'
import { Link } from 'react-router'
import bnrimg from '../image/Adobe Express - file-Photoroom.png'

const Banner = () => {
return (
<>


    <section id='banner' className='py-[100px] bg-prymary'>

        <div className="container">

            <div className="banner_main flex items-center gap-[600px]">

                <div className="bannertexxt pl-[50px]">
                    <h2 className=' font-prymary font-bold text-[48px] text-white '>Hi, I am
                    </h2>
                    <span className=' font-prymary font-bold text-[48px] text-white '>Md.Rakib Hasan</span>
                    <p className='mt-[9px] text-[#828282] font-medium text-[18px] font-prymary mb-[47px]'>Frontend Developer</p>
                    <Link>
                    <button class="button">
                        <span class="button-content font-medium font-prymary text-[16px] text-white">Download CV </span>
                    </button>

                    </Link>
                </div>



                <div className="banner_img ">
                    <img className='bg-cover w-[450px] h-[600px] rounded-full' src={bnrimg} alt="" />
                    </div>


            </div>







        </div>


    </section>












</>
)
}

export default Banner