import React from 'react'

const Advantage = ({ advantages }) => {

  return (
    <section id="advantages" className='w-full flex flex-col md:flex-row'>
      {
        advantages.map((item, index) => (
          <div data-aos="zoom-in" className="flex-1 border my-2  border-gray-800 rounded-lg mx-2 p-4" key={index}>
            <div className="">
              <img src={item.image} alt={item.title} />
            </div>
            <h4 className='mb-2 pt-3 text-3xl text-gray-700'>{item.title}</h4>
            <p className='mb-4 mt-2 text-sm text-gray-600'>{item.text}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Advantage