import React from 'react'

const NameLogo = () => {
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
    scrollTo(id);
  }
  return (
    <button 
    onClick={(e) => handleLinkTo(e, "#hero")}
    className=" hover:cursor-pointer" 
    aria-label='Home'>
        <span className="font-bold text-2xl">
        Fortune Uchegbu
      </span>
    </button>
  )
}

export default NameLogo