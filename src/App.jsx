import { Hero, About, Skills, Projects, Contact, Footer } from './sections';
import { Navbar, MobileMenu } from './sections/subsections';
import { SectionTitle, ProjectCard, ThemeToggle,  ScrollToTop, Overlay, Wrapper } from './components';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);
  const prevScrollY = useRef(0);
  const timeOutId = useRef(null);

  // Load time
  // store dynamic state
  useEffect (() => {
    //stop background scroll when menu is open
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {document.body.classList.remove("overflow-y-hidden");}
    isOpenRef.current = isOpen;
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const handleOutsideClick = (event) => {
    const menu = document.getElementById('mobileMenu');
      if (isOpenRef.current && menu && !(menu.contains(event.target))) {
        setIsOpen(false);
      }
    }
    // Event listeners
    // width change
    window.addEventListener('resize', handleResize);
    // click outside mobile menu
    window.addEventListener('click', handleOutsideClick)


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  // handle nav sliding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = document.querySelector('nav');
      const scrollingDown = currentScrollY > (prevScrollY.current);
      const scrollingUp   = currentScrollY < (prevScrollY.current);

      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
        timeOutId.current = null;
      }
      if (scrollingDown) {
        // handle scroll down
        timeOutId.current = setTimeout(() => {
          nav.classList.remove('nav-visible');
          nav.classList.add('nav-hidden');
        }, 1500);
      }
      if (scrollingUp) {
        //handle scroll up
        nav.classList.remove('nav-hidden');
        nav.classList.add('nav-visible')
      }
      prevScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className=' bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark w-full'>
      <MobileMenu 
      isOpen = {isOpen} 
      setOpen={setIsOpen} 
      width={width}
      />
      <Overlay isOpen={isOpen} />
      <Hero 
      width = {width} 
      setOpen ={setIsOpen}
      />
      <main>
        <About width={width} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Floating */}

    </div>
  )
}

export default App
