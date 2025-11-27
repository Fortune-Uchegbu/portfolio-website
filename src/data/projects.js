import { edutechImg, ecommerceImg, faqAccordionImg, tipCalculatorImg, calculatorImg, commentsSectionImg, urlShortenerImg } from "../assets/images";

const projectData = [
  // ===== Pre–Vanilla JS Projects =====
  {
    title: "EduTech Landing Page",
    category: "HTML & CSS",
    description:
      "A clean, modern education technology landing page built purely with HTML and CSS. Focused on layout precision, typography, and responsive design.",
    stack: ["HTML5", "CSS3"],
    links: {
      live: 'https://fortune-uchegbu.github.io/Edutech-landing-page-clone/',
      github: 'https://github.com/Fortune-Uchegbu/Edutech-landing-page-clone',
    },
    image: edutechImg, // Add your image path later
  },

  // ===== Vanilla JS Projects =====
  {
    title: "FAQ Accordion",
    category: "JavaScript (Frontend Mentor)",
    description:
      "An interactive FAQ component that reveals answers in an accordion layout with smooth transitions and accessibility considerations.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fortune-uchegbu.github.io/faq-accordion/",
      github: "https://github.com/Fortune-Uchegbu/faq-accordion",
    },
    image: faqAccordionImg,
  },
  {
    title: "E-Commerce Product Page",
    category: "JavaScript (Frontend Mentor)",
    description:
      "A single-product e-commerce page with image gallery switching, cart functionality, and quantity tracking for a realistic shopping experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fortune-uchegbu.github.io/E-commerce-Product-Page/",
      github: "https://github.com/Fortune-Uchegbu/E-commerce-Product-Page",
    },
    image: ecommerceImg,
  },
  {
    title: "Tip Calculator App",
    category: "JavaScript (Frontend Mentor)",
    description:
      "A calculator app that computes total bill and tip per person dynamically, emphasizing real-time DOM updates and input validation.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fortune-uchegbu.github.io/Tip-Calculator-App/",
      github: "https://github.com/Fortune-Uchegbu/Tip-Calculator-App",
    },
    image: tipCalculatorImg,
  },
  {
    title: "Themed Calculator",
    category: "JavaScript (Frontend Mentor)",
    description:
      "A functional calculator featuring full arithmetic logic and a three-theme switcher, showcasing JavaScript logic and CSS theming.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fortune-uchegbu.github.io/Themed-Calculator/",
      github: "https://github.com/Fortune-Uchegbu/Themed-Calculator",
    },
    image: calculatorImg,
  },
  {
    title: "Interactive Comments Section",
    category: "JavaScript (Frontend Mentor)",
    description:
      "A fully functional comment system with voting, replies, editing, and deleting. Implemented modularly with localStorage persistence and clean UI logic.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fortune-uchegbu.github.io/Interactive-Comments-Section/",
      github: "https://github.com/Fortune-Uchegbu/Interactive-Comments-Section",
    },
    image: commentsSectionImg,
  },
  {
    title: "URL Shortener App",
    category: "JavaScript (Frontend Mentor)",
    description:
      "A link shortener app using an API to generate shortened URLs with copy-to-clipboard functionality and responsive UI design.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    links: {
      Live: "https://url-shortener-eta-lemon.vercel.app/",
      Github: "https://github.com/Fortune-Uchegbu/URL-Shortener-App",
    },
    image: urlShortenerImg,
  },

  // ===== React Projects =====
  // {
  //   title: "Grocery List App",
  //   category: "React",
  //   description:
  //     "A CRUD-based list app that lets users add, edit, delete, and search grocery items. Includes a mock API integration for realistic data flow.",
  //   stack: ["React", "CSS", "Mock API", "Vite"],
  //   links: {
  //     live: null,
  //     github: null,
  //   },
  //   image: null,
  // },
  // {
  //   title: "Basic Blog App",
  //   category: "React (In Progress)",
  //   description:
  //     "A simple blog application built with React Router. Implements dynamic routes and post rendering to simulate a real blog environment.",
  //   stack: ["React", "React Router", "Vite"],
  //   links: {
  //     live: null,
  //     github: null,
  //   },
  //   image: null,
  // },
  // {
  //   title: "Data Display App (API Practice)",
  //   category: "React",
  //   description:
  //     "A data-fetching app that loads user, post, and comment data from a mock JSON server. Built to solidify understanding of APIs, async handling, and UI rendering.",
  //   stack: ["React", "REST API", "json-server"],
  //   links: {
  //     live: null,
  //     github: null,
  //   },
  //   image: null,
  // },
];

export default projectData;