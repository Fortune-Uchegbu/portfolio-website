import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ButtonIcons } from "../components";


const Socials = () => {
  return (
    <span className="flex">
        <a href="https://github.com/fortune-uchegbu" target="_blank" rel="noreferrer">
        <ButtonIcons
        icon = {<FaGithubSquare className="w-5 h-5 lg:w-6 lg:h-6" />}
        />
      </a>
        
      <a href="https://www.linkedin.com/in/fortune-uchegbu/" target="_blank" rel="noreferrer">
         <ButtonIcons
        icon = {<FaLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />}
        />
      </a>   
    </span>
  )
}

export default Socials