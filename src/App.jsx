import About from './components/About'
import Experience from './components/WorkExperience'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

const App = ( ) => {
  return (
    <main className = "bg-black">
      <Navbar />
      <About />
      <Experience />
      <Skills />
    </main>
  )
}
export default App
