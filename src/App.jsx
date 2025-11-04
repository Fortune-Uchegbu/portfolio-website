import { Hero, About, Skills, Projects, Contact } from './sections';
import { Navbar, SectionTitle ,SkillBadge, ProjectCard, ThemeToggle, ScrollToTop, Footer } from './components';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className='bg-forest text-cream'>
      <Hero />
      <main>
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
