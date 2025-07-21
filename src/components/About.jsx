import { profile_image } from '../utils'

const About = () => {
  return (
    <section
      id="about"
      className="text-grey bg-main px-10 min-h-screen flex flex-col items-center justify-center relative -mt-5"
    >
      {/* Name */}
      <h1 className="text-9xl pirata-one-regular text-center z-10 mt-2">
        Mirza Kazim Husain
      </h1>

      {/* Image */}
      <img
        src={profile_image}
        alt="Kazim's portrait"
        className="w-96 h-[650px] object-cover -mt-40 z-20"
      />

      {/* Subtitle */}
      <h1 className="text-9xl pirata-one-regular text-center z-30 -mt-12">
        Recent Computer Science Graduate
      </h1>
    </section>
  )
}

export default About
