import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'
import { profile_img } from '../utils'


const Hero = () => {
  useGSAP(() => {
    gsap.to('#about-1', { opacity: 1, delay: 1 })
    gsap.to('#about-2', { opacity: 1, delay: 2 })
    gsap.to('#about-3', { opacity: 1, delay: 3 })
  }, [])

  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-16 min-h-[70vh]">
      <h1 id="title" className="text-4xl font-bold text-center mb-16">About Me</h1>
      {/* Left side: Profile Image */}
      <div className="flex justify-center items-center">
        <img 
          src={profile_img} 
          alt="Kazim's portrait" 
          className="w-64 h-64 rounded-full object-cover shadow-xl"
        />
      </div>

      {/* Right side: About Me */}
      <div className="max-w-lg flex flex-col gap-6 text-left">
        <p id="about-1" className="opacity-0 transition-opacity duration-500">
          I'm Kazim, a front-end developer and digital artisan who loves creating immersive experiences. Clean code and sleek visuals are my jam.
        </p>
        <p id="about-2" className="opacity-0 transition-opacity duration-500">
          I thrive at the intersection of creativity and logic, turning ideas into fluid, intuitive interfaces that delight users and elevate brands.
        </p>
        <p id="about-3" className="opacity-0 transition-opacity duration-500">
          Whether I'm building product pages or portfolios, my mission is simple: blend clarity, emotion, and elegance into every pixel I push.
        </p>
      </div>
    </section>
  )
}

export default Hero
