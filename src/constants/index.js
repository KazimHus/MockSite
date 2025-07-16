export const navLists = ["Home", "Experience", "Skills", "Education", "Projects", "Hobbies", "Contact" ];

export const About = [
  {
    born: {
      birthplace: "Islamabad, Pakistan",
      birthyear: 2003,
      flagIcon: "pakistanFlag", // import in utils/index.js
      university: "Seattle University",
      universityIcon: "SeattleU", // import in utils/index.js
      enrollmentYear: 2021
    },
    paragraph1: [
      "I entered university without any prior exposure to coding, and the field felt overwhelming at first. Many peers warned me about the steep learning curve — and they were right. During my second quarter, I faced one of the toughest instructors in the program. To make things even harder, the course was shifted online for a month. I genuinely thought I would fail, but I managed to pass with a C+. That moment was pivotal; it showed me that effort could overcome doubt. Since then, I’ve taken initiative to explore new directions in tech and challenge myself beyond the classroom."
 
    ],
    paragraph2: [
      "I've consistently sought growth, whether by overloading my academic schedule or applying for work authorization to support myself. I worked early morning shifts at a sandwich shop, often starting at 6am — a job few would volunteer for. Despite the physical demands, I valued staying busy and building discipline. I've also experienced living in a low-income apartment with difficult conditions, which pushed me to develop resilience and appreciate the importance of perseverance."
    ],
    paragraph3: [
      "With earnings from my part-time jobs and tutoring, I saved enough to build my own PC — a step toward realizing my long-held dream of designing video games. During that time, my father's illness required me to take a quarter off and return home. Determined to graduate with my cohort, I took overloaded course schedules and increased my work hours to make up for lost time. These experiences have shaped me into a well-rounded individual, grounded in persistence and empathy. I believe the strength of one’s character far outweighs technical skill — because skills can always be learned."
    ],
    quote: {
      text: "Find what you love and let it kill you.",
      author: "Charles Bukowski"
    }
  }
]


export const Experience = [
  {
    id: 1,
    date: ["July 2025 – Current"],
    title: ["Web Developer - Internship"],
    company: ["Bilimetrix"],
    description: [
      "Built a serum bilirubin vs. postnatal age chart with clinical risk zones to support neonatal jaundice prediction",
      "Plotted patient bilirubin values on the chart for visual diagnosis support",
      "Collaborating in a remote agile team with weekly standups and paired programming",
      "Technologies: C#, Html5, Asp.Net, MySQL, Git"
    ]
  },
  {
    id: 2,
    date: ["Sep 2024 – June 2025"],
    title: ["Software Engineer - Capstone Internship"],
    company: ["F5 (Seattle University)"],
    description: [
      "Collaborated with classmates and F5 engineer mentors to develop an AI-driven system that generates LUA diagnostic scripts for known bugs, cutting manual effort by 50%",
      "Parsed bug data from the knowledge base and generated scripts via F5-GPT using structured prompts (~85% match)",
      "Designed reusable prompt templates with embedded examples to generalize across bug categories",
      "Developed a full stack React + Flask app for engineers to search bugs and download scripts",
      "Added a validation layer for syntax/structure (~95% issue catch rate) and integrated CI/CD with Azure DevOps",
      "Held weekly sprint reviews with F5 mentors and maintained clear technical documentation",
      "Curated a version-controlled bug database linked to active heuristics for reliable script generation",
      "Technologies: F5 GPT-4o, Python, Flask, React.js, Azure DevOps, Postman, pandas, openpyxl, requests, urllib3, axios"
    ]
  },
  {
    id: 3,
    date: ["Oct 2023 – June 2025"],
    title: ["Learning Facilitator"],
    company: ["Seattle World School"],
    description: [
      "Supported Grade 9–12 students in Math, Physics, Chemistry, Astrology, and Computer Science during class sessions",
      "Collaborated with teachers and Microsoft TEALS volunteers to assist instruction and clarify assignments",
      "Skills: Communication, peer collaboration, initiative, student mentorship, visual explanation, adaptability"
    ]
  },
  {
    id: 4,
    date: ["Jan 2023 – May 2023"],
    title: ["Restaurant Team Member"],
    company: ["The Homegrown Group"],
    description: [
      "Worked full-day shifts from opening to closing, rotating between roles including cook, prep, and dishwasher",
      "Prepared sandwiches and salads while maintaining food safety standards",
      "Collaborated with team members to ensure smooth kitchen operations and supported others as needed during peak hours",
      "Maintained a clean and organized work environment under time pressure",
      "Skills: Time management, teamwork, multitasking, food safety, adaptability, attention to detail"
    ]
  }
]

