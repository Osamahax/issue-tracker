import React from 'react'

const Conatiner = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className='mx-2 md:mx-5 lg:mx-10 max-w-7xl'>{children}</div>
  )
}

export default Conatiner