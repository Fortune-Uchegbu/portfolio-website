import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const contactData = [
    {
        name: 'Email',
        link: 'mailto:fortuneuchegbu01@gmail.com',
        icon: <MdOutlineEmail />
    },
    {
        name: 'Github',
        link: 'https://github.com/fortune-uchegbu',
        icon: <FaGithubSquare className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/fortune-uchegbu-b25ab8289',
        icon: <FaLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />
    }
]

export default contactData;