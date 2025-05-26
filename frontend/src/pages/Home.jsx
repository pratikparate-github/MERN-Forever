import React from 'react'
import Hero from '../components/Hero'
import LastestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LastestCollection />
      <Bestseller />
      <OurPolicy />
      <NewsLetterBox/>
    </div>
  )
}

export default Home
