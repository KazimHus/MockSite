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
  }
]

const Projects = () => {
  return (
    <section id="projects" className="bg-main text-grey px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 pirata-one-regular">
          Personal Projects
        </h1>

        <div className="space-y-10">
          {projects.map((proj, index) => (
            <div key={index} className="bg-skills-grey p-6 rounded-xl shadow-md group">
              <h2 className="text-2xl font-semibold pirata-one-regular text-bright-orange mb-2">
                {proj.title}
              </h2>
              <p className="texturina-text mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-sm bg-black bg-opacity-30 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bright-orange hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
