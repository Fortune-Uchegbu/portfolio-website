import React from 'react'

const CTAButton = ({ classOne, classTwo, width, call, action }) => {
  
  return (
    <button 
    onClick={action}
    className={`p-3 xl:text-xl hover:cursor-pointer rounded-lg font-semibold lg:font-bold ${classTwo} ${width < 640 ? ' w-[80%]' : `w-full max-w-[280px] ${classOne}` }`}>
      {call}
    </button>
  )
}

export default CTAButton;