import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { profile_img } from '../utils'
import { About as AboutData } from '../constants'

const data = AboutData[0]

const About = () => {
  useGSAP(() => {
    gsap.to('#about-1', { opacity: 1, delay: 0.5 })
    gsap.to('#about-2', { opacity: 1, delay: 1 })
    gsap.to('#about-3', { opacity: 1, delay: 1.5 })
    gsap.to('#about-quote', { opacity: 1, delay: 2 })
  }, [])

  return (
    <section className="bg-black text-white px-10 py-20 flex flex-col md:flex-row items-center gap-16">

    {/* Image: Left side */}
    <div className="w-full md:w-[45%] flex justify-center">
      <img
        src={profile_img}
        alt="Kazim's portrait"
        className="w-72 h-72 rounded-full object-cover shadow-xl"
      />
    </div>


    {/* Text: Right side */}
    <div className="w-full md:w-[55%] max-w-4xl flex flex-col gap-4 text-left">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <p id="about-1" className="opacity-0 transition-opacity duration-500">{data.paragraph1[0]}</p>
      <p id="about-2" className="opacity-0 transition-opacity duration-500">{data.paragraph2[0]}</p>
      <p id="about-3" className="opacity-0 transition-opacity duration-500">{data.paragraph3[0]}</p>

      <div id="about-quote" className="opacity-0 transition-opacity duration-500 pt-6 border-t border-white/20">
        <p className="italic text-lg text-gray-400">"{data.quote.text}"</p>
        <p className="text-sm text-gray-500 text-right">– {data.quote.author}</p>
      </div>
    </div>
  </section>

  )
}

export default About
