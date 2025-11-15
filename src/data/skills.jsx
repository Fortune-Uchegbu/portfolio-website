import { FaGitSquare, FaGithubSquare, FaDatabase } from "react-icons/fa";
import { VscVscode, VscDebug } from "react-icons/vsc";
import { SiVite, SiNpm } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoChrome } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuMonitorSmartphone, LuCloud } from "react-icons/lu";

const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <IoLogoHtml5 /> },
      { name: "CSS3", icon: <IoLogoCss3 /> },
      { name: "JavaScript (ES6+)", icon: <IoLogoJavascript /> },
      { name: "React", icon: <IoLogoReact /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", icon: <FaGitSquare /> },
      { name: "GitHub", icon: <FaGithubSquare /> },
    ],
  },
  {
    category: "Development Tools & Workflow",
    items: [
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "npm", icon: <SiNpm /> },
      { name: "Browser DevTools", icon: <IoLogoChrome /> },
    ],
  },
  {
    category: "Core Frontend Concepts",
    items: [
      { name: "Responsive Design", icon: <LuMonitorSmartphone /> },
      { name: "State Management", icon: <FaDatabase /> },
      { name: "RESTful API Integration", icon: <LuCloud /> },
      { name: "Debugging & Error Handling", icon: <VscDebug /> },
      { name: "Clean, Modular Code Structure", icon: null },
      { name: "Problem Solving", icon: null },
    ],
  },
];

export default skillsData;