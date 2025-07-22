const projects = [
  {
    title: "Personal Portfolio",
    description: "A custom-built portfolio featuring GSAP animations, Tailwind layout, and textured visuals.",
    tech: ["React", "Tailwind", "GSAP"],
    link: "https://yourportfolio.com",
  },
  {
    title: "Jaundice Predictor",
    description: "AI tool built at Bilimetrix for neonatal jaundice prediction using clinical input data.",
    tech: ["Flask", "Python", "Azure"],
    link: "https://github.com/yourproject",
  },
  {
    title: "GameJam Survival",
    description: "A 2D survival game built in Unity with pixel assets and custom mechanics.",
    tech: ["Unity", "C#"],
    link: "https://itch.io/gamejam-survival",
  },
  {
    title: "GameJam Survival",
    description: "A 2D survival game built in Unity with pixel assets and custom mechanics.",
    tech: ["Unity", "C#"],
    link: "https://itch.io/gamejam-survival",
  },
  {
    title: "GameJam Survival",
    description: "A 2D survival game built in Unity with pixel assets and custom mechanics.",
    tech: ["Unity", "C#"],
    link: "https://itch.io/gamejam-survival",
  }
]

const Projects = () => {
  return (
<section id="projects" className="bg-main text-grey px-6 py-20">

  <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
    {projects.slice(0, 5).map((proj, index) => (
      <div
        key={index}
        className="w-[500px] h-[400px] bg-skills-grey p-8 rounded-xl shadow-xl flex flex-col justify-between"
      >
      </div>
    ))}
  </div>
</section>


  )
}

export default Projects
