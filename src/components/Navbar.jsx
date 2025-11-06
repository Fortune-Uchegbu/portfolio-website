import Menu from './Menu'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ width }) => {
  return (
    <nav 
    className="flex items-center justify-between py-2 px-4 fill-cream sm:px-8 lg:px-10"
    >
      <h1 className="font-semibold">
        Fortune Uchegbu
      </h1>
    
      <div className="flex justify-between items-center gap-x-2 sm:gap-x-4">
        <ThemeToggle />
        {width < 1024 ? <Menu /> : null}
      </div>
    </nav>
  )
}

export default Navbar