import { profile_image } from '../utils'

const hobbies = [
  { id: 1, name: "Gaming", description: "Exploring immersive worlds and crafting mechanics in Unity." },
  { id: 2, name: "Poster Design", description: "Layering bold fonts, textures, and visual storytelling." },
  { id: 3, name: "Coding Experiments", description: "Tinkering with layouts, scroll effects, and GSAP motion." },
  { id: 4, name: "Vintage Typography", description: "Researching analog print styles and custom font pairings." },
  { id: 5, name: "Creative Tech", description: "Blending visuals with logic to build expressive interfaces." }
]

const Hobbies = () => {
  return (
    <section id="hobbies" className="bg-main text-grey px-6 py-20">
      <h1 className="text-4xl text-center font-bold mb-16 pirata-one-regular">Hobbies & Inspirations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center">
        {hobbies.slice(0, 3).map((hobby) => (
          <div key={hobby.id} className="w-[220px] h-[340px] bg-skills-grey rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img src={profile_image} alt={hobby.name} className="h-1/2 object-cover" />
            <div className="h-1/2 p-4 flex flex-col justify-center text-center">
              <h2 className="text-xl font-semibold mb-2 text-bright-orange">{hobby.name}</h2>
              <p className="text-sm texturina-text">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 justify-items-center">
        {hobbies.slice(3).map((hobby) => (
          <div key={hobby.id} className="w-[220px] h-[340px] bg-skills-grey rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img src={profile_image} alt={hobby.name} className="h-1/2 object-cover" />
            <div className="h-1/2 p-4 flex flex-col justify-center text-center">
              <h2 className="text-xl font-semibold mb-2 text-bright-orange">{hobby.name}</h2>
              <p className="text-sm texturina-text">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
