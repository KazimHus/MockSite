import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Experience } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const WorkExperience = () => {
  useGSAP(() => {
  Experience.forEach((_, index) => {
    gsap.fromTo(
      `#job-${index}`,
      { opacity: 0.6, scale: 0.95 },
      {
        opacity: 1,
        scale: 1.1,
        duration: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `#job-${index}`,
          start: "top 50%",   // when top of job hits middle
          end: "bottom 50%",  // when bottom of job leaves middle
          toggleActions: "play reverse play reverse",
        }
      }
    )
  })
  }, [])

  return (
    <section id="workexperience" className="bg-black text-white px-10 py-16 min-h-screen pt-32">
      <h1 className="text-4xl font-bold text-center mb-16 pb-10">Work Experience</h1>

      <div className="flex flex-col items-center gap-16">
        {Experience.map((job, index) => (
          <div key={job.id} id={`job-${index}`} className="transition duration-500 w-full max-w-2xl text-left">
            <p className="text-sm text-bright-yellow mb-2">{job.date[0]}</p>
            <h2 className="text-xl font-semibold">{job.title[0]}</h2>
            <h3 className="text-md italic mb-4">{job.company[0]}</h3>
            <ul className="list-disc list-inside space-y-2">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {index < Experience.length - 1 && (
              <div className="w-1 h-8 bg-white rounded-full mx-auto my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
