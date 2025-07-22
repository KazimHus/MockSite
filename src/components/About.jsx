import { profile_img } from '../utils'

const About = () => {
  return (
    <section
      id="about"
      className="text-grey bg-main px-10 min-h-screen flex flex-col items-center justify-center relative -mt-5"
    >
      <h1 className="text-9xl pirata-one-regular text-center z-10 mt-10">
        Mirza Kazim Husain
      </h1>

      <img
        src={profile_img}
        alt="Kazim's portrait"
        className="w-96 h-[650px] object-cover -mt-32 z-20"
      />

      <h1 className="text-9xl pirata-one-regular text-center z-30 -mt-28">
        Recent Computer Science Graduate
      </h1>
    </section>
  )
}

export default About
