import { Hero, About, Skills, Projects, Contact } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, ScrollToTop, Footer } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <div className=' bg-mint text-forest dark:bg-forest dark:text-cream'>
      <Hero width = {width} />
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
