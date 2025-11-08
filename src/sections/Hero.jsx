import { Navbar } from "../components";

const Hero = ({ width, isOpen, setOpen }) => {
  return (
    <header>
      <Navbar 
      width = {width} 
      isOpen = {isOpen} 
      setOpen ={setOpen}
      />
    </header>
  )
}

export default Hero;