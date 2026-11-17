// change the text
// Everything on the site (except LinkedIn posts) comes from here.

export const profile = {
  name: "Muhammad Adib bin Adnan",
  shortName: "Muhammad Adib",
  title: "Software Engineering Student at UKM",
  status: "Open to internships",
  tagline:
    "Cybersecurity, systems programming and machine learning. I build full-stack web tools, data dashboards and games.",
  location: "Bandar Baru Bangi, Selangor, Malaysia",
  photo: "/profile.png",
};

// Follows the About section on LinkedIn.
export const about = {
  paragraphs: [
    "I am an 18-year-old Bachelor of Software Engineering student at Universiti Kebangsaan Malaysia (UKM), having entered directly from high school through an accelerated pathway in software engineering.",
    "My background in computing started at age 12 at Kolej PERMATA@Pintar Negara, Malaysia's national school for gifted students. After completing the Junior Certificate in the Digital Innovator Programme (3.74 CGPA), I was selected for a one-year, MDEC-sponsored Applied Software Engineering collaboration with Forward College in Penang, completing degree-level coursework with a 3.80 CGPA before sitting for SPM (9As).",
    "Currently, I focus on cybersecurity, systems programming, and machine learning. Outside of coursework, I build full-stack web tools, data dashboards, and Unity simulations, and I stay active in student governance on campus.",
  ],
  technical: [
    {
      label: "Languages",
      items: [
        "Python (PCEP Certified)",
        "Java",
        "JavaScript",
        "C#",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      label: "Frameworks & Tools",
      items: ["React", "Next.js", "Node.js", "Firebase", "Unity", "Power BI"],
    },
    {
      label: "Systems & Hardware",
      items: [
        "Windows environments",
        "Raspberry Pi",
        "Arduino",
        "QNX Neutrino RTOS",
      ],
    },
  ],
  closing:
    "I am looking for software engineering internships at startups or small engineering teams, as well as tech community and volunteering opportunities.",
};

// Leave a link as "" to hide its button. Add more socials here if you want.
export const links = {
  email: "adibdb1003@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-adib-bin-adnan-95b76a2aa/",
  github: "https://github.com/Adibb1",
  instagram: "",
  x: "",
};

// Newest first. Leave href and label as "" to hide the link button.
export const projects = [
  {
    title: "AwakeGary (2D Game)",
    period: "Nov 2026",
    description:
      "A 2D physics-based charge-jump platformer built in 48 hours at Microsoft Malaysia during the Haven KL game jam.",
    tags: ["Godot 4", "GDScript", "Game jam"],
    href: "https://github.com/Adibb1/AwakeGary",
    label: "View on GitHub",
  },
  {
    title: "Algeterra (3D Game)",
    period: "Jul 2026 - Present",
    description:
      "A 3D game designed and developed in Unity with C#, built for high-school students.",
    tags: ["Unity", "C#", "Game dev"],
    href: "",
    label: "",
  },
  {
    title: "Forward College Aptitude Test Website",
    period: "Oct 2024 - Jul 2025",
    description:
      "Built and deployed the official aptitude test web platform for Forward College as part of a development team.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Team project"],
    href: "https://ready.forward.edu.my/",
    label: "Visit site",
  },
  {
    title: "Spotify Emotion Detector",
    period: "Nov 2024 - Jul 2025",
    description:
      "A machine learning web app that classifies the mood of Spotify playlists, using Selenium web scraping to collect the data.",
    tags: ["Machine Learning", "Python", "Next.js", "Selenium"],
    href: "https://tinyurl.com/ytbdd8pj",
    label: "View project",
  },
];

export const experience = [
  {
    role: "Participant, Haven KL Game Jam",
    org: "Hack Club at Microsoft Malaysia, Menara Shell",
    period: "Nov 2026",
    points: [
      "Two-day game jam organized by Hack Club.",
      "Built AwakeGary, a 2D physics-based arcade platformer, in 48 hours with Godot 4 and GDScript.",
    ],
  },
  {
    role: "Developer, Aptitude Test Website",
    org: "Forward College of Technology & Future Skills",
    period: "Oct 2024 - Jul 2025",
    points: [
      "Worked in a development team to build and deploy the official aptitude test web platform.",
      "Worked on the backend with Next.js.",
    ],
  },
  {
    role: "Participant, Forward School Hackathon x Lintramax",
    org: "Forward School",
    period: "2024",
    points: ["Built a solution with a team under hackathon time pressure."],
  },
];

export const education = [
  {
    title:
      "Bachelor of Software Engineering with Honours (Computer Software Engineering)",
    school: "Universiti Kebangsaan Malaysia (UKM)",
    period: "Sep 2026 - Present",
    detail:
      "Direct undergraduate entry via the High School Diploma in Applied Software Engineering",
  },
  {
    title: "High School Diploma, Applied Software Engineering",
    school: "Forward College",
    period: "Mar 2024 - Mar 2025",
    detail: "Grade 3.80 · MDEC-sponsored joint programme in Penang",
  },
  {
    title: "SPM & Permata Pintar Junior Certificate",
    school: "Kolej PERMATA@Pintar Negara",
    period: "Feb 2021 - Dec 2025",
    detail: "SPM 9As · Junior Certificate CGPA 3.76",
  },
];

// Short list of the biggest awards.
export const highlights = [
  {
    title:
      "Selected for the MDEC-sponsored Applied Software Engineering programme",
    year: "2024",
  },
  { title: "Dean's List (CGPA 3.67 and above)", year: "2021 - 2025" },
  { title: "Certified Entry-Level Python Programmer (PCEP)", year: "2023" },
  {
    title: "STEM Invention & Innovation Competition, Silver Medal",
    year: "2023",
  },
];

export const leadership = [
  {
    role: "MTP (Student Council), EXCO Academic / Personal Conduct",
    orgs: ["Majlis Tertinggi Pelajar"],
    note: "Served on the highest student council, looking after academic and personal conduct matters.",
  },
  {
    role: "Secretary",
    orgs: [
      "Digital Makers Club",
      "Scout Association",
      "Sport House",
      "Rugby Club",
    ],
    note: "Handled records, communication and coordination for four student bodies.",
  },
  {
    role: "Treasurer",
    orgs: ["Badar Association"],
    note: "Managed the association's funds and budgeting.",
  },
  {
    role: "Lead Volunteer",
    orgs: ["Noble Week for DIP"],
    note: "Led the volunteer team for the Noble Week programme.",
  },
];
