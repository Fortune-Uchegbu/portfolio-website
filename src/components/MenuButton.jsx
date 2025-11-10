import { MdMenu } from "react-icons/md";

const MenuButton = ({ setOpen }) => {

  const handleButtonClick  = (event) => {
    event.stopPropagation(); // stop click event from bubbling up
    setOpen (prev => !prev); 
  }

  return (
    <button 
    onClick = {handleButtonClick}
    className="p-3 rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark active:bg-neutral-light  dark:active:bg-neutral-dark"
    >
        <MdMenu className="w-5 h-5 lg:w-6 lg:h-6 " />
    </button>
  )
}

export default MenuButton;