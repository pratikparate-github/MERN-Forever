import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 bordr-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flec-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestiae necessitatibus aperiam provident, officia quos modi odit nesciunt tempore eligendi?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor nisi sed et dicta numquam, commodi accusantium libero rerum esse velit dolores maiores a incidunt eius voluptas, est sapiente. Incidunt.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nulla minus sunt! Aliquam, dolor dolorem.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <p>Quality Assurance:</p>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos ut quod eaque ducimus obcaecati veritatis dicta corrupti unde ullam. Voluptatem repudiandae dolores molestias soluta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <p>Convience:</p>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos ut quod eaque ducimus obcaecati veritatis dicta corrupti unde ullam. Voluptatem repudiandae dolores molestias soluta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <p>Expectional Customer Service:</p>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos ut quod eaque ducimus obcaecati veritatis dicta corrupti unde ullam. Voluptatem repudiandae dolores molestias soluta.</p>
        </div>

      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
