import { Hero, About, Skills, Projects, Contact, Footer } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, MobileMenu, ScrollToTop } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  // Load time
  useEffect(() => {
    console.log(isOpen);
    const menu = document.getElementById('mobileMenu');

    const handleResize = () => setWidth(window.innerWidth);
    const handleClickOutside = (event) => {
      console.log('clicked')
    //   const menu = document.getElementById('mobileMenu');
    //   console.log(menu)
    //   if (menu && !menu.contains(event.target)) setIsOpen(!isOpen);
    }

    // Event listeners
    // width change
    window.addEventListener('resize', handleResize);
    // click outside mobile menu
    window.addEventListener('click', (event) => {
      if (isOpen) handleClickOutside(event);
    })


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', (event) => handleClickOutside(event));
    }
  }, [])


  return (
    <div className=' bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark'>
      <MobileMenu isOpen = {isOpen} />
      <Hero width = {width} isOpen = {isOpen} setOpen ={setIsOpen}/>
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
