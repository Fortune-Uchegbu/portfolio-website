import { MdMenu } from "react-icons/md";

const Menu = () => {
  return (
    <button className="p-2 rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark transition-color">
        <MdMenu className="w-6 h-6" />
    </button>
  )
}

export default Menu