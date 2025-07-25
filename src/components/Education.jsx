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
    <section id="education" className="flex flex-col md:flex-row w-full bg-main text-black py-28">

      <div className="w-full md:w-[80%] flex flex-col items-start justify-end px-40 text-grey">
        <h1 className="text-9xl pirata-one-regular">{data.name[0]}</h1>
        <p className="mt-5 text-xl font-semibold text-bright-orange texturina-text-bold">{data.date[0]}</p>
      </div>


      <div className="w-full flex flex-col justify-start pt-10 gap-6 -ml-20">

        <div className="space-y-2">
          
          <p className="text-lg font-semibold texturina-text-bold">{data.major[0]}</p>
          <p className="text-lg font-semibold texturina-text-bold">{data.minor[0]}</p>
          <p className="text-lg texturina-text-bold">{data.scholarship[0]}</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-6 pt-10">
          {courses.map(({ title, description }, i) => (
            <div key={i}>
              <ul className="list-disc list-inside">
                <li className="texturina-text text-lg">{title}</li>
              </ul>
              {description && (
                <p className="text-base texturina-text-bold text-grey mt-1 pl-7 ">{description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
