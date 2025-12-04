import React from 'react'

const CTAButton = ({ classes, width, call, action }) => {
  
  return (
    <button 
    onClick={action}
    className={`p-3 hover:cursor-pointer rounded-lg font-semibold lg:font-bold ${width < 640 ? ' w-[80%]' : `w-full max-w-[280px] ${classes}` }`}>
      {call}
    </button>
  )
}

export default CTAButton;