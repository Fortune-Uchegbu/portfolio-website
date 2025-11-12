import { CgClose } from "react-icons/cg";
import { ButtonIcons } from "../components";

const CloseMenu = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(prev => !prev)
    }
    return (
    <ButtonIcons 
    handler = {handleClose}
    icon = {<CgClose className="w-5 h-5 lg:w-6 lg:h-6" />}
    />
    
    )
}

export default CloseMenu