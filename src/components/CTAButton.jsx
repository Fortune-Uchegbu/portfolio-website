import React from 'react'

const CTAButton = ({ call, action }) => {
  return (
    <button 
    onClick={action}
    className='p-3 hover:cursor-pointer bg-sec-light text-pri-light dark:bg-sec-dark dark:text-pri-dark rounded-lg font-semibold hover:brightness-90'>
      {call}
    </button>
  )
}

export default CTAButton;