import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

import {
  java,
  python,
  javascript,
  kotlin,
  mysql,
  mongodb,
  react,
  spark,
  hadoop,
  ec2,
  s3
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
  { name: "Kotlin", icon: kotlin }
  ]

  const frameworks = [
    { name: "React", icon: react },
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongodb },
    { name: "Spark", icon: spark },
    { name: "Hadoop", icon: hadoop },
    { name: "EC2", icon: ec2 },
    { name: "S3", icon: s3 }
  ]

  return (
    <section id = "skills" className="bg-skills-grey text-white px-5 py-20 pt">
      <h1 className="text-4xl font-bold text-center mb-16">Skills</h1>

      <div className="items-center flex flex-col gap-16">
        {/* Languages */}
        <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-6">
          Languages
          <div className="flex gap-4">
            {[java, python, javascript, kotlin].map((icon, i) => {
              const names = ["Java", "Python", "JavaScript", "Kotlin"]
              return (
                <div key={i} className="relative group">
                  <img src={icon} alt={names[i]} className="skill-icon w-12 h-12" />
                  <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {names[i]}
                  </span>
                </div>
              )
            })}
          </div>
        </h2>
      </div>


        {/* Frameworks & Tools */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex gap-10">Frameworks & Tools
            <div className="flex gap-4">
            {[react, mysql, mongodb, spark, hadoop, ec2, s3].map((icon, i) => {
              const names = ["React", "MySQL", "MongoDB", "Spark", "Hadoop", "EC2", "S3"]
              return (
                <div key={i} className="relative group">
                  <img src={icon} alt={names[i]} className="skill-icon w-12 h-12" />
                  <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {names[i]}
                  </span>
                </div>
              )
            })}
          </div>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Skills
