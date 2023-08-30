import React from 'react';
import mountains from '../../Assets/mountains.mp4';

const VideoBanner = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <h1 className='absolute text-2xl text-white font-bold mix-blend-screen'>/klu.e.o:/ Clean, pure, to be spoken of.</h1>
            <video className='' autoPlay muted loop src={mountains} />
        </div>
    </div>
  )
}

export default VideoBanner