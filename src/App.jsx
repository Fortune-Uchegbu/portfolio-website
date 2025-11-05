import { Hero, About, Skills, Projects, Contact } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, ScrollToTop, Footer } from './components';

function App() {

  return (
    <div className=' bg-mint text-forest dark:bg-forest dark:text-cream'>
      <Hero />
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
