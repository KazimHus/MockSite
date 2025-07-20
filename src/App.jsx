import About from './components/About'
import Experience from './components/WorkExperience'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

const App = ( ) => {
  return (
    <main className = "bg-black">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
    </main>
  )
}
export default App
