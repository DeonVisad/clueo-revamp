import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VideoBanner from '../../Components/VideoBanner/VideoBanner'
import OurStoryBanner from '../../Components/OurStoryBanner/OurStoryBanner'
import OurStoryInfo from '../../Components/OurStoryInfo/OurStoryInfo'
import Footer from '../../Components/Footer/Footer'

const OurStory = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <VideoBanner />
      <OurStoryBanner />
      <OurStoryInfo />
      <Footer />
    </div>
  )
}

export default OurStory