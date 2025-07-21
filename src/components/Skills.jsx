import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

import {
  java,
  python,
  javascript,
  react,

} from '../utils'

const Skills = () => {

  useGSAP(() => {
    gsap.to('.skill-icon, .framework-icon', {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut",
      stagger: {
      each: 0.2,
      from: "random"
      }
    })
  },[])

  const languages = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react }
  ]
return (
  <section id="skills" className="bg-main text-grey px-5 flex justify-center pt-36">


    <div className="bg-skills-grey rounded-xl px-10 w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12">Main Skills</h1>

      <div className="flex justify-center pb-10">
        <div className="flex gap-6 flex-wrap justify-center">
          {[
            { icon: java, name: "Java" },
            { icon: python, name: "Python" },
            { icon: javascript, name: "JavaScript" },
            { icon: react, name: "React" }
          ].map(({ icon, name }, i) => (
            <div key={i} className="relative group">
              <img src={icon} alt={name} className="w-14 h-14" />
              <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
}

export default Skills
