import { Hero, About, Skills, Projects, Contact } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, ScrollToTop, Footer } from './components';

function App() {

  return (
    <div className='bg-forest text-cream'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Floating */}
      <ThemeToggle />
      <ScrollToTop />
    </div>
  )
}

export default App
