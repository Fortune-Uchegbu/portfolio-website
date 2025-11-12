import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ButtonIcons } from "../components";


const Socials = ({ handleSocial }) => {
  return (
    <span className="flex gap-x-1">
        <ButtonIcons 
        handler = {() => handleSocial}
        icon = {<FaGithubSquare className="w-5 h-5 lg:w-6 lg:h-6" />}
        />
        <ButtonIcons 
        handler = {() => handleSocial}
        icon = {<FaLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />}
        />        
    </span>
  )
}

export default Socials