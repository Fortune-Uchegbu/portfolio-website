import { CgClose } from "react-icons/cg";

const CloseMenu = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(prev => !prev)
    }
    return (
    <button 
    className="p-3 w-min rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark active:bg-neutral-light  dark:active:bg-neutral-dark "
    onClick={handleClose}>
        <CgClose className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
    )
}

export default CloseMenu