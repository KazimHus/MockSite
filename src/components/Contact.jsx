import { github, gmail, instagram, linkedin, phone } from '../utils'

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-grey bg-main py-24 min-h-screen flex flex-col items-center justify-center pb-48" >
      <h1 className="text-5xl text-center font-bold mb-16 pirata-one-regular">
        Get in Touch
      </h1>

      <div className="w-full max-w-3xl bg-container-grey p-10 rounded-2xl shadow-2xl texturina-text space-y-8 text-xl">
        <div className="flex items-center gap-5">
          <img src={gmail} alt="Email" className="w-[35px] h-[35px] object-contain" />
          <a href="mailto:hmirzakazim@gmail.com" className="font-semibold text-bright-orange hover:underline" >
            hmirzakazim@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-5">
          <img src={phone} alt="Phone" className="w-[40px] h-[40px] object-contain" />
          <a href="tel:+12065354056" className="font-semibold text-bright-orange hover:underline">
            (206) 535-4056
          </a>
        </div>

        <div className="flex items-center gap-5">
          <img src={linkedin} alt="LinkedIn" className="w-[40px] h-[40px] object-contain" />
          <a href="https://www.linkedin.com/in/mirza-kazim-husain-" target="_blank" rel="noopener noreferrer" className="font-semibold text-bright-orange hover:underline">
            linkedin.com/in/mirza-kazim-husain
          </a>
        </div>

        <div className="flex items-center gap-5">
          <img src={github} alt="GitHub" className="w-[40px] h-[40px] object-contain" />
          <a href="https://github.com/KazimHus" target="_blank" rel="noopener noreferrer" className="font-semibold text-bright-orange hover:underline">
            github.com/KazimHus
          </a>
        </div>

        <div className="flex items-center gap-5">
          <img src={instagram} alt="Instagram" className="w-[45px] h-[45px] object-contain" />
          <a href="https://www.instagram.com/kaizeeem/" target="_blank" rel="noopener noreferrer" className="font-semibold text-bright-orange hover:underline">
            @kaizeeem
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
