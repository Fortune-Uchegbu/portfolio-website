import { MdMenu } from "react-icons/md";
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav 
    className="flex items-center justify-between py-6 fill-cream"
    
    >
      <h1 className="">
        Fortune Uchegbu
      </h1>

      <div className="">
        <ThemeToggle />
        <MdMenu />
      </div>
    </nav>
  )
}

export default Navbar