// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-500'>T-28, near sant ji ki kuttiya, <br /> Hemu Kalani, Bairagarh, Bhopal, Madhya Pradesh 462030</p>
//           <p className='text-gray-500'>Tel: +91 9713211600 <br /> Email: daftarbyambica@gmail.com </p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at Daftar</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact




import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* Image */}
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

        {/* Contact Details */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>T-28, near sant ji ki kuttiya, <br /> Hemu Kalani, Bairagarh, Bhopal, Madhya Pradesh 462030</p>
          <p className='text-gray-500'>Tel: +91 9713211600 <br /> Email: daftarbyambica@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Daftar</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />

      {/* "We'd love to hear from you" Form */}
      <div className='fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-lg max-w-sm border border-gray-200'>
        <h3 className='text-xl font-semibold mb-4'>We'd love to hear from you!</h3>
        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <textarea
            placeholder='Your Message'
            rows='4'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;