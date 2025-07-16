import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Experience } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const WorkExperience = () => {
  useGSAP(() => {
    Experience.forEach((_, index) => {
      gsap.to(`#job-${index}`, {
        scrollTrigger: {
          trigger: `#job-${index}`,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        scale: 1.05,
        opacity: 1,
        duration: 0.5
      })

      gsap.to(`#job-${index}`, {
        scrollTrigger: {
          trigger: `#job-${index}`,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        },
        scale: 0.95,
        opacity: 0.8,
        duration: 1,
        ease: "power1.out"
      })
    })
  }, [])

  return (
    <section className="bg-black text-white px-6 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-16">Work Experience</h1>

      <div className="flex flex-col items-center gap-16">
        {Experience.map((job, index) => (
          <div key={job.id} id={`job-${index}`} className="transition duration-500 max-w-2xl text-left opacity-0 scale-95">
            <p className="text-sm text-gray-400 mb-2">{job.date[0]}</p>
            <h2 className="text-xl font-semibold">{job.title[0]}</h2>
            <h3 className="text-md italic text-gray-300 mb-4">{job.company[0]}</h3>
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
