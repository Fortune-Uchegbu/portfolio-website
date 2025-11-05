import Menu from './Menu'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav 
    className="flex items-center justify-between py-4 px-2 fill-cream"
    >
      <h1 className="font-semibold">
        Fortune Uchegbu
      </h1>

      <div className="flex justify-between items-center">
        <ThemeToggle />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar