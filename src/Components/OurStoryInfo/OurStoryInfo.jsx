import React from 'react';
import bath from '../../Assets/bath-candles.jpg';
import like from '../../Assets/likeyou.jpg'
import clean from '../../Assets/clean-candle.jpg';

const OurStoryInfo = () => {
  return (
    <div>
        <div className='flex justify-center items-center md:justify-around md:my-10'>
            <img className='max-w-full md:w-1/3 h-auto opacity-50 md:opacity-100' src={bath} alt='something'/>
            <div className='absolute md:relative md:w-1/3'>
              <h2 className='font-bold'>Our Formula</h2>            
              <p className='text-sm font-semibold'>All of our candles are made with 100% Natural Soy Wax, free from carcinogens, mutagens, and reproductive toxins and are formulated without phthalates.</p>
            </div>
        </div>


        <div className=' flex justify-center items-center md:justify-around my-10'>
            {/* DESKTOP ALIGNMENT */}
            <div className='hidden md:flex md:flex-col md:w-1/3'>
              <h2 className='font-bold'>Community & Charity</h2>
              <p className='text-sm font-semibold'>Our mission is to cultivate a world where friendliness flourishes, creating a ripple effect of kindness and warmth in every interaction. We are committed to fostering inclusive and compassionate communities, where individuals feel valued, respected, and supported.</p>
            </div>
            <img className='bg-black/50 opacity-50 md:opacity-100 md:w-1/3' src={like} alt='something 2'/>
            {/* MOBILE ALIGNMENT */}
            <div className='absolute md:hidden '>
              <h2 className='font-bold'>Community & Charity</h2>
              <p className='text-sm font-semibold'>Our mission is to cultivate a world where friendliness flourishes, creating a ripple effect of kindness and warmth in every interaction. We are committed to fostering inclusive and compassionate communities, where individuals feel valued, respected, and supported.</p>
            </div>
        </div>


        <div className='flex justify-center items-center md:justify-around my-10'>
            <img className='max-w-full md:w-1/3 h-auto opacity-50 md:opacity-100' src={clean} alt='something 3'/>
            <div className="absolute md:relative md:w-1/3">
              <h2 className='font-bold'>Our Mission</h2>
              <p className='text-sm font-semibold'>We are committed to crafting candles using sustainable materials and employing environmentally conscious practices throughout our production process. Our dedication to quality ensures that our candles emit clean and non-toxic fragrances, free from harmful chemicals, while maintaining a long-lasting and delightful scent experience. By prioritizing the health and safety of our customers and the environment, we strive to illuminate homes with eco-friendly warmth, creating a harmonious balance between nature, comfort, and tranquility.</p>
            </div>
        </div>


    </div>
  )
}

export default OurStoryInfo