import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navLists = [
  { name: 'About', link: 'about' },
  { name: 'Work Experience', link: 'workexperience' },
  { name: 'Skills', link: 'skills' },
  { name: 'Education', link: 'education' },
  { name: 'Projects', link: 'projects' }
]

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    navLists.forEach(({ link }) => {
      ScrollTrigger.create({
        trigger: `#${link}`,
        start: 'top 80%',   // ensures shorter sections are captured
        end: 'bottom 20%',  // stops when bottom reaches 20% from top
        onEnter: () => setActiveLink(link),
        onEnterBack: () => setActiveLink(link)
      })
    })

    ScrollTrigger.refresh() // ensures triggers are accurate on load

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              id={`navbar-link-${link}`}
              className={`px-5 text-sm cursor-pointer transition-all duration-200 ${
                activeLink === link
                  ? 'text-white glow font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
