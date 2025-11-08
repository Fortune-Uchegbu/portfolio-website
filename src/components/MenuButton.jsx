import { MdMenu } from "react-icons/md";

const MenuButton = ({ isOpen, setOpen }) => {

  return (
    <button 
    onClick = {() => setOpen(!isOpen)}
    className="p-3 rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark transition-color"
    >
        <MdMenu className="w-6 h-6" />
    </button>
  )
}

export default MenuButton;