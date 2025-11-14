import { Hero, About, Skills, Projects, Contact, Footer } from './sections';
import { Navbar, MobileMenu } from './sections/subsections';
import { SectionTitle, ProjectCard, ThemeToggle,  ScrollToTop, Overlay, Wrapper } from './components';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);

  // Load time
  // store dynamic state
  useEffect (() => {
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

  // helper functions
  const handleResumeDownload = () => {
    console.log('Downloaded!');
  }
  const handleSocial = () => {
    console.log('linked!');
  }

  return (
    <div className=' bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark w-full'>
      <MobileMenu 
      isOpen = {isOpen} 
      setOpen={setIsOpen} 
      width={width} 
      handleResumeDownload={handleResumeDownload}
      handleSocial = {handleSocial}
      />
      <Overlay isOpen={isOpen} />
      <Hero 
      width = {width} 
      setOpen ={setIsOpen}
      handleResumeDownload={handleResumeDownload}
      handleSocial = {handleSocial}
      />
      <main>
        <About />
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
