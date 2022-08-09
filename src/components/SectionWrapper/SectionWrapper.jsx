import React from 'react'

const SectionWrapper = ({ children, id }) => {
  return (
    <section id={id} className='my-10 py-5 w-full'>{children}</section>
  )
}

export default SectionWrapper;
