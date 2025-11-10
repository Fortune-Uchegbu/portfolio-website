import { Navbar } from "../components";

const Hero = ({ width, setOpen }) => {
  return (
    <header>
      <Navbar 
      width = {width} 
      setOpen ={setOpen}
      />
    </header>
  )
}

export default Hero;