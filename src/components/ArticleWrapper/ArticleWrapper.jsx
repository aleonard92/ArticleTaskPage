import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const ArticleWrapper = ({ title, head, text, image, btn, i }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:justify-between pr-1`} style={{backgroundColor: i==1 ? '#f3f3f3' : ''}}>
      <div className={`my-auto max-w-md flex-1 ${i % 2 !== 0 ? 'order-2' : 'order-1'}`}>
        <h4 data-aos="fade-up" data-aos-duration="1500" className='mb-4 text-3xl'>{title}</h4>
        <p data-aos="fade-up" data-aos-duration="1500" className='text-lg font-bold text-gray-700'>{head}</p>
        <p data-aos="fade-up" data-aos-duration="1500" className='my-4 text-sm'>{text}</p>
        {btn && <a data-aos="fade-up" data-aos-duration="1500" href="http://fyself.com" target="_blanck"  className=' border border-blue-600 bg-white text-blue-800 rounded-3xl px-4 py-1 my-2 text-sm'>{btn}</a>}
      </div>
      <div
        data-aos={`fade-${i % 2 === 0 ? 'left' : 'right'}`}
        className={`w-full md:max-w-[50%] flex flex-1 py-4 px-6 md:${i % 2 !== 0 ? 'order-1' : 'order-2'}`}
      >
        {image?.type === 'animate'
          ? <Player
            src={image.path}
            className="player"
            loop
            autoplay
          />
          : <img className='my-auto max-h-full rounded-2xl' src={image} alt={title} />}
      </div>
    </div>
  )
}

export default ArticleWrapper