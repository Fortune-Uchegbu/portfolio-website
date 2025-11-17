import React from 'react'

const CTAButton = ({ call, action }) => {
  return (
    <button 
    onClick={action}
    className='p-3 hover:cursor-pointer bg-accent rounded-lg font-semibold  lg:font-bold hover:brightness-90'>
      {call}
    </button>
  )
}

export default CTAButton;