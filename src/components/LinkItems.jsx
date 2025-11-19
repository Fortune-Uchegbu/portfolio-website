import React from 'react'

const LinkItems = ({ width, setOpen }) => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleLinkTo = (e, id) => {
    e.preventDefault();
    if (setOpen) setOpen(prev => !prev);
    scrollTo(id);
  }

  return (
    <ul className={`flex ${width < 1024 ? "flex-col items-center space-y-2" : "flex-row space-x-6 "} text-lg lg:text-md font-semibold`}>
      <li>
        <a href="#about" onClick={(e) => handleLinkTo(e, "#about")}>About</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#skills" onClick={(e) => handleLinkTo(e, "#skills")}>Skills</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#projects" onClick={(e) => handleLinkTo(e, "#projects")}>Projects</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      <li>
        <a href="#contact" onClick={(e) => handleLinkTo(e, "#contact")}>Contact</a>
        <span className="underline bg-sec-light dark:bg-sec-dark"></span>
      </li>
      
    </ul>    
  )
}

export default LinkItems;