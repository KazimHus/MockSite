import { university as universityData } from '../constants'

const data = universityData[0]

const Education = () => {
  const courses = Object.entries(data)
    .filter(([key]) => key.startsWith('c'))
    .map(([key, value]) => ({
      title: value[0],
      description: value[1] || ''
    }))

  return (
    <section id="education" className="flex flex-col md:flex-row w-full min-h-screen bg-education-grey text-black pt-24">
      {/* Left Side: University Name */}
      <div className="w-full md:w-1/2 flex items-end justify-start px-24 pb-48">
        <h1 className="text-5xl font-bold">{data.name[0]}</h1>
      </div>

      {/* Right Side: Details + Courses */}
      <div className="w-full flex flex-col justify-start px-10 pt-14 pb-10 gap-6">
        {/* Education Details */}
        <div className="space-y-2">
          <p className="text-xl font-semibold text-bright-yellow">{data.date[0]}</p>
          <p className="text-lg font-semibold">{data.major[0]}</p>
          <p className="text-lg font-semibold">{data.minor[0]}</p>
          <p className="text-lg font-semibold">{data.scholarship[0]}</p>
        </div>

        {/* Course List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-6 pt-10">
          {courses.map(({ title, description }, i) => (
            <div key={i}>
              <ul className="list-disc list-inside">
                <li className="font-medium">{title}</li>
              </ul>
              {description && (
                <p className="text-sm text-gray-400 mt-1 pl-4">{description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
