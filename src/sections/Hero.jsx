import { Navbar, MainHero } from "./subsections";
import { useState } from "react";

const Hero = ({ width, setOpen, handleResumeDownload, handleSocial }) => {
  const [navHeight, setNavheight] = useState(0);
  return (
    <header>
      <Navbar 
      width = {width} 
      setOpen ={setOpen}
      handleResumeDownload={handleResumeDownload}
      handleSocial = {handleSocial}
      setHeight = {setNavheight}
      />
      <MainHero 
      navHeight = {navHeight}
      />
    </header>
  )
}

export default Hero;