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
        start: 'top 90%',
        end: 'bottom 10%',  
        onEnter: () => setActiveLink(link),
        onEnterBack: () => setActiveLink(link)
      })
    })

    ScrollTrigger.refresh() 

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-main bg-opacity-100 backdrop-blur-sm py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              id={`navbar-link-${link}`}
              className={`px-5 texturina-text-bold text-base cursor-pointer transition-all duration-200 ${
                activeLink === link
                  ? 'text-brightorange texturina-text-bold glow'
                  : 'hover:text-black'
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
