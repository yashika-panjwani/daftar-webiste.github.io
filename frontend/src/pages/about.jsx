import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Daftar by Ambica, a brand that celebrates effortless elegance, comfort, and individuality. We believe that fashion should be more than just trends—it should be an extension of your personality, adapting seamlessly to your lifestyle. Whether you're dressing up for a busy day, a casual outing, or a festive occasion, our collection offers versatile, timeless, and thoughtfully designed pieces that make you feel confident and comfortable</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At Daftar by Ambica, we believe that confidence starts with what you wear. Our mission is to redefine everyday fashion by blending sophistication with wearability. We craft clothing that is not only stylish but also designed to keep up with your dynamic life.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHAT'} text2={'WE OFFER'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb:20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✔ Fabric-First Approach</b>
          <p className='text-gray-600'>We prioritize high-quality cotton and linen, offering breathable, skin-friendly, and durable clothing.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✔ Effortless Elegance</b>
          <p className='text-gray-600'>From chic workwear to relaxed casuals and graceful ethnic ensembles, our collections cater to all occasions</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✔ Sustainable Fashion:</b>
          <p className='text-gray-600'>We are committed to eco-friendly practices, ensuring ethical sourcing and responsible production.</p>
        </div>
      </div>



      <div className='text-2xl mt-12'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

<div className="bg-gray-50 py-12 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul className="space-y-6">
      <li className="flex items-start">
        <span className="flex-shrink-0 text-2xl text-indigo-600 mr-4">•</span>
        <div>
          <h3 className="text-xl font-semibold">Designed for Every Occasion</h3>
          <p className="text-gray-600 mt-2">
            Our styles transition effortlessly from work to casual to festive moments.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-2xl text-indigo-600 mr-4">•</span>
        <div>
          <h3 className="text-xl font-semibold">Timeless yet Trendy</h3>
          <p className="text-gray-600 mt-2">
            We blend classic cuts with contemporary details for a fresh, polished look.
          </p>
        </div>
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 text-2xl text-indigo-600 mr-4">•</span>
        <div>
          <h3 className="text-xl font-semibold">Empowering Women</h3>
          <p className="text-gray-600 mt-2">
            Our brand is built on the philosophy of strength, confidence, and individuality.
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

      <NewsletterBox/>
    </div>
  )
}

export default About