import React from 'react';

const Contract = () => {
  return (
    <section id='Contact' className='pt-[120px] bg-prymary'>

      <div className="container mx-auto px-4">

        <h2 id='about_title' className='text-center text-[48px] font-bold font-prymary text-white pb-[82px]'>
          Get in touch
        </h2>

        <div className="Contactinp pb-[200px] space-y-6">

          {/* First Row */}
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-10">
            <input
              type="text"
              className='flex-1 py-[18px] pr-4 md:pr-[200px] border-b-2 border-[#4F4F4F] text-[20px] text-[#d5d5d5] font-prymary font-medium outline-none'
              placeholder='First Name'
            />
            <input
              type="text"
              className='flex-1 py-[18px] pr-4 md:pr-[200px] border-b-2 border-[#4F4F4F] text-[20px] text-[#d5d5d5] font-prymary font-medium outline-none'
              placeholder='Last Name'
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-10">
            <input
              type="text"
              className='flex-1 py-[18px] pr-4 md:pr-[200px] border-b-2 border-[#4F4F4F] text-[20px] text-[#d5d5d5] font-prymary font-medium outline-none'
              placeholder='Email'
            />
            <input
              type="text"
              className='flex-1 py-[18px] pr-4 md:pr-[200px] border-b-2 border-[#4F4F4F] text-[20px] text-[#d5d5d5] font-prymary font-medium outline-none'
              placeholder='Phone number'
            />
          </div>

          {/* Message */}
          <div className="flex justify-center">
            <input
              type="text"
              className='w-full md:w-[965px] py-[18px] h-[109px] pl-[10px] border-2 border-[#4F4F4F] text-[20px] text-[#d5d5d5] font-prymary font-medium outline-none'
              placeholder='Massage'
            />
          </div>

          {/* Submit Button */}
          <div className="submit_btn mt-10 text-center">
            <button className="button">
              <span className="button-content font-medium font-prymary text-[16px] text-white">
                Submit Now
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contract;
