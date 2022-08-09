import React from 'react'
import { Link } from 'react-router-dom';

const Heading = ({ heading }) => {
  const { title, text } = heading;

  return (
    <section id="leht" className='heading mt-2 mb-10 flex rounded-lg py-4 px-6 flex-col md:flex-row lg:max-h-[80vh]'>
      <div className="w-full flex-1">
        <img className='max-h-full' src="/images/heading.png" alt="" />
      </div>
      <div className="w-full flex-1  pl-2 my-auto">
        <h4 className='mb-4 text-3xl text-gray-600'>{title}</h4>
        <p className='my-4 text-sm'>{text}</p>
        <Link to='#' className='bg-white text-blue-800 rounded-3xl px-4 py-1 my-2 text-sm'>Activar Wallet</Link>
      </div>
    </section>
  )
}

export default Heading