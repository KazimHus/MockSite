import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SU } from '../utils'
import { university as universityData } from '../constants'

const data = universityData[0]

const Education = () => {
  const [activeCourse, setActiveCourse] = useState(null)

  useGSAP(() => {
    gsap.to('#edu-header', { opacity: 1, delay: 0.3 })
    gsap.to('.edu-meta', { opacity: 1, delay: 0.6, stagger: 0.2 })
    gsap.to('.edu-course', { opacity: 1, delay: 1, stagger: 0.1 })
  }, [])

  const courses = Object.entries(data)
    .filter(([key]) => key.startsWith('c'))
    .map(([key, value]) => ({ title: value[0], description: value[1], id: key }))

  return (
    <section className="bg-black text-white px-10 py-20 flex flex-col md:flex-row items-center gap-16">
      {/* Image: Left side */}
      <div className="w-full md:w-[45%] flex justify-center">
        <img
          src={SU}
          alt="Seattle University"
          className="w-72 h-72 object-cover shadow-xl opacity-90"
        />
      </div>

      {/* Text: Right side */}
      <div className="w-full md:w-[55%] max-w-4xl flex flex-col gap-6 text-left">
        <h1 id="edu-header" className="text-4xl font-bold mb-2 opacity-0">Education</h1>

        <p className="edu-meta opacity-0 text-lg text-gray-400">{data.major[0]}</p>
        <p className="edu-meta opacity-0 text-md text-gray-400">{data.minor[0]}</p>
        <p className="edu-meta opacity-0 text-md text-gray-400">{data.scholarship[0]}</p>
        <p className="edu-meta opacity-0 text-sm text-gray-500">{data.date[0]}</p>

        <div className="mt-6 flex flex-col gap-4">
          {courses.map((course) => (
            <div key={course.id} className="edu-course opacity-0">
              <button
                onClick={() =>
                  setActiveCourse(activeCourse === course.id ? null : course.id)
                }
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors duration-200"
              >
                <span className="font-semibold text-white">{course.title}</span>
              </button>
              {activeCourse === course.id && (
                <div className="mt-2 bg-gray-900 text-white p-3 rounded-md border border-white/10">
                  {course.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
