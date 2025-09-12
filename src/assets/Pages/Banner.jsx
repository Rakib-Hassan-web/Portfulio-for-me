import React from 'react'
import { Link } from 'react-router'
import bnrimg from '../image/Adobe Express - file-Photoroom.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { TbBrandLinkedinFilled } from 'react-icons/tb';


const Banner = () => {
return (
<>


    <section id='banner' className='py-[70px] bg-prymary'>

        <div className="container">

            <div className="banner_main flex items-center gap-[500px]">

                <div className="bannertexxt pl-[50px]">
                    <div className='w-[400px]'>
                        <h2 className="font-prymary font-bold text-[48px] text-white">
                            <Typewriter words={['Hi,', 'I' , 'am' , 'Md.Rakib' , 'Hasan' ]} loop={0} // 0=infinite loop
                                cursor cursorStyle="|" typeSpeed={100} deleteSpeed={50} delaySpeed={1000} />
                        </h2>
                    </div>
                    <span className=' font-prymary font-bold text-[48px] text-white '></span>
                    <p className='mt-[9px] text-[#828282] font-medium text-[18px] font-prymary mb-[47px]'>Frontend
                        Developer</p>
                    <Link>
                    <button class="button">
                        <span class="button-content font-medium font-prymary text-[16px] text-white">Download CV </span>
                    </button>

                    </Link>
                {/* -----------------foloow me--------- */}


                <div>
                    <h2 className='text-white mt-9'>Follow me</h2>


                    <div className='mt-5 flex items-center gap-3'>
                        <Link to={'https://www.facebook.com/rakib.ahmed.216234/'}>
                        <FaFacebook  className='text-3xl text-white'/>
                        </Link>

                        <Link to={'https://www.linkedin.com/in/rakib-hasan-wev-44646336a/'}>
                        <TbBrandLinkedinFilled   className='text-4xl text-white' />
                        </Link>
                        <FaGithub  className='text-3xl text-white' />


                    </div>


                </div>
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