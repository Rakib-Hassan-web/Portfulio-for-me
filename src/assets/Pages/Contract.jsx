import React from 'react';

const Contract = () => {
  return (
    <section id='contact' className='pt-28 bg-primary'>
      <div className="container mx-auto px-4">

        <h2 className='text-center text-4xl md:text-5xl font-bold text-white pb-20'>
          Get in touch
        </h2>

        <div className="contact-form space-y-6">

          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <input
              type="text"
              className='flex-1 py-4 px-3 border-b-2 border-gray-500 text-gray-300 text-lg font-medium bg-transparent outline-none'
              placeholder='First Name'
            />
            <input
              type="text"
              className='flex-1 py-4 px-3 border-b-2 border-gray-500 text-gray-300 text-lg font-medium bg-transparent outline-none'
              placeholder='Last Name'
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <input
              type="email"
              className='flex-1 py-4 px-3 border-b-2 border-gray-500 text-gray-300 text-lg font-medium bg-transparent outline-none'
              placeholder='Email'
            />
            <input
              type="tel"
              className='flex-1 py-4 px-3 border-b-2 border-gray-500 text-gray-300 text-lg font-medium bg-transparent outline-none'
              placeholder='Phone Number'
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              className='w-full py-4 px-3 h-28 border-2 border-gray-500 text-gray-300 text-lg font-medium bg-transparent outline-none resize-none'
              placeholder='Message'
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300">
              Submit Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contract;
