import React from 'react'

const CTAButton = ({ classes, width, call, action }) => {
  
  return (
    <button 
    onClick={action}
    className={`p-3 hover:cursor-pointer text-sec-dark bg-accent-light dark:bg-accent-dark rounded-lg font-semibold  lg:font-bold hover:brightness-90 ${width < 640 ? ' w-[80%]' : `w-full max-w-[280px] text-xl ${classes}` }`}>
      {call}
    </button>
  )
}

export default CTAButton;