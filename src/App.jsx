import About from './components/About'
import Experience from './components/WorkExperience'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

const App = ( ) => {
  return (
    <main className = "bg-black">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  )
}
export default App
