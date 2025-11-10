import MenuButton from './MenuButton'
import {ThemeToggle, NameLogo, LinkItems} from '../components'

const Navbar = ({ width, setOpen }) => {
  return (
    <nav 
    className="flex items-center justify-between py-3 px-4 sm:py-4 md:py-5 fill-cream sm:px-8 lg:px-10  shadow-md"
    >
      <NameLogo />

      {width >= 1024 ? 
      <LinkItems /> :
      null
      }

      <div className="flex justify-between items-center gap-x-2 sm:gap-x-4">
        <ThemeToggle />
        {width < 1024 ? 
        <MenuButton 
        setOpen ={setOpen} /> : null}
      </div>
    </nav>
  )
}

export default Navbar