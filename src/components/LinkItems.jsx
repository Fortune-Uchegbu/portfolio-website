import React from 'react'

const LinkItems = ({ width }) => {
  return (
    <ul className={`flex ${width < 1024 ? "flex-col items-center space-y-2" : "flex-row space-x-6 "} text-lg lg:text-md font-semibold`}>
      <li>
        <a href="#about">About</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#skills">Skills</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#projects">Projects</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#contact">Contact</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      
    </ul>    
  )
}

export default LinkItems;