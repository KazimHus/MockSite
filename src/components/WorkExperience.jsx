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
        scale: 1.2,
        duration: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `#job-${index}`,
          start: "top 50%", 
          end: "bottom 50%",  
          toggleActions: "play reverse play reverse",
        }
      }
    )
  })
  }, [])

  return (
    <section id="workexperience" className="text-grey bg-main px-5 min-h-screen pt-36">
      <div className="flex flex-col items-center gap-16">
        {Experience.map((job, index) => (
          <div key={job.id} id={`job-${index}`} className="transition duration-500 w-full max-w-2xl text-left">
            <p className="text-sm text-bright-orange font-semibold mb-2 texturina-text-bold">{job.date[0]}</p>
            <h2 className="text-xl pirata-one-regular ">{job.title[0]}</h2>
            <h3 className="text-xl mb-4 pirata-one-regular">{job.company[0]}</h3>
            <ul className="list-disc list-inside space-y-2 texturina-text">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {index < Experience.length - 1 && (
              <div className="w-1 h-8 bg-bright-orange rounded-full mx-auto my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
