import MenuButton from './MenuButton'
import {ThemeToggle, NameLogo} from '../components'

const Navbar = ({ width, isOpen, setOpen }) => {
  return (
    <nav 
    className="flex items-center justify-between py-2 px-4 fill-cream sm:px-8 lg:px-10  shadow-md"
    >
      <NameLogo />

      <div className="flex justify-between items-center gap-x-2 sm:gap-x-4">
        <ThemeToggle />
        {width < 1024 ? 
        <MenuButton 
        isOpen = {isOpen} 
        setOpen ={setOpen} /> : null}
      </div>
    </nav>
  )
}

export default Navbar