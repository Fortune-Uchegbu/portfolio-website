import { Hero, About, Skills, Projects, Contact } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, MobileMenu, ScrollToTop, Footer } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  // Load time
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  

  // Helper functions
  // const pullMenu = (openState) => {

  // }

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
      <ScrollToTop />
    </div>
  )
}

export default App
