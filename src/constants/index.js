import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  soit,
  rmaict,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  monash,
  sunway,
  andriodStudio,
  canva,
  java,
  python,
  chinese,
  english,
  github,
  soitCert,
  varsityCert,
  kitahackCert,
  maybankCert,
  aceCert,
  danceCert2019,
  pianoPerformanceCert,
  danceCert2018,
  pianoCertG1Theory,
  danceCert2011,
  tetris,
  theFieryDragon,
  webTaskManagement,
  britishCouncil
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const educations = [
  {
    name: "Monash University Malaysia",
    grad: "Mar 2022 - Jun 2025",
    icon: monash,
  },
  {
    name: "Sunway College (MUFY, Monash University Foundation Year)",
    grad: "Jan 2021 - Nov 2021",
    icon: sunway,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    icon: java,
    width: 80,
    height: 80,
  },
  {
    name: "HTML 5",
    icon: html,
    width: 80,
    height: 80,
  },
  {
    name: "CSS 3",
    icon: css,
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    icon: javascript,
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    icon: typescript,
    width: 80,
    height: 80,
  },
  {
    name: "React",
    icon: react,
    width: 80,
    height: 80,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    width: 80,
    height: 80,
  },
  {
    name: "Node JS",
    icon: nodejs,
    width: 80,
    height: 80,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    width: 80,
    height: 80,
  },
  {
    name: "Three JS",
    icon: threejs,
    width: 80,
    height: 80,
  },
  {
    name: "Git",
    icon: git,
    width: 80,
    height: 80,
  },
  {
    name: "Github",
    icon: github,
    width: 80,
    height: 80,
  },
  {
    name: "Figma",
    icon: figma,
    width: 80,
    height: 80,
  },
  {
    name: "Canva",
    icon: canva,
    width: 80,
    height: 80,
  },
  {
    name: "Docker",
    icon: docker,
    width: 80,
    height: 80,
  },
  {
    name: "Andriod Studio",
    icon: andriodStudio,
    width: 80,
    height: 80,
  },
  // {
  //   name: "English",
  //   icon: english,
  // },
  // {
  //   name: "Chinese",
  //   icon: chinese,
  // },

];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "RMAICT",
    icon: rmaict,
    iconBg: "#383E56",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Built and enhanced production-level full-stack web applications using Vue.js, Laravel, PHP, Python, HTML/CSS, and the Yeppy framework.",
      "Improved UI/UX workflows by implementing dynamic validation logic and flexible AND/OR conditional workflows, reducing user errors.",
      "Designed and implemented API integrations and Webhook functionality to fetch, process, and display external data within enterprise systems.",
      "Collaborated with senior developers on system integration, security, and data migration planning, following professional coding standards, Git version control, and QA practices.",
    ],
  },
  {
    title: "Publicity, School of Information Technology",
    company_name: "MUSA SOIT",
    icon: soit,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Spearheaded the design and creation of promotional posters for various events organized by the School of Information Technology.",
      "Managed the dissemination of promotional material through the official Instagram account, ensuring effective reach and engagement.",
      "Collaborated with team members to develop visually appealing and informative content to attract a wider audience.",
    ],
  },
  {
    title: "Invigilator",
    company_name: "British Council (via AXEVENTS SDN BHD)",
    icon: britishCouncil,
    iconBg: "#E6DEDD",
    date: "Dec 2022",
    points: [
      "Served as an invigilator for the British Council Exam, ensuring a fair, structured, and professional examination environment.",
      "Upheld strict examination protocols and confidentiality standards, including non-disclosure of sensitive information in accordance with company policy.",
      "Maintained high standards of punctuality, appropriate conduct, and responsiveness to supervisor directives throughout the engagement.",
      "Collaborated closely with the Event Team (Axevents Sdn Bhd) across a multi-day exam period, demonstrating commitment and reliability in a fast-paced, time-sensitive setting",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const certifications = [
  { //2024
    name:"SOIT Subcommitee",
    position: "Publicity",
    description:"Certificate of Appreciation",
    image: soitCert,
  },
  { //2023
    name:"Varsity Hackathon 2023",
    position: "Participant",
    description:"Certificate of Participation ",
    image: varsityCert,
  },
  { //2023
    name:"Kitahack Hackathon 2023",
    position: "Participant",
    description:"Certificate of Participation ",
    image: kitahackCert,
  },
  // { //2022 I DONT RMB THIS
  //   name:"Maybank",
  //   position: "Participant",
  //   description:"Certificate of Participation ",
  //   image: maybankCert,
  // },
  { //2020
    name:"ACE EdVenture",
    position: "Student",
    description:"Certificate of Completion",
    image: aceCert,
  },
  { //2019
    name:"AEVDC 2019 Dance Carnival",
    position: "Dancer",
    description:"Certificate of Participation",
    image: danceCert2019,
  },
  // { //2018
  //   name:"Trinity College London",
  //   position: "Student",
  //   description:"Graded Examination in Music Performance",
  //   image: pianoPerformanceCert,
  // },
  { //2018
    name:"AEVDC 2018 Dance Carnival",
    position: "Dancer",
    description:"Certicate of Participation",
    image: danceCert2018,
  },
  // { //2015
  //   name:"The Associated Board of the Royal Schools of Music",
  //   position: "Student",
  //   description:"Graded Examination in Grade 1 Music Theory",
  //   image: pianoCertG1Theory,
  // },
  // { //2011 Ballet
  //   name:"Royal Academy of Dance",
  //   position: "Dancer",
  //   description:"Graded Examination in Dance",
  //   image: danceCert2011,
  // },
]

const projects = [
  {
    name: "Task Master",
    description: [
      "Developed a web-based task management platform that allows teams to create, assign, and track tasks efficiency.",
      "Led a team of 6 using Scrum methodology, organizing sprint planning, task delegation, and progress reviews.", 
      "Improved team coordination and workflow transparency through structured Agile practices.",
    ],
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "Trello",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
    ],
    video: webTaskManagement,
    source_code_link: "https://github.com/Amanda9601/Task-Master",
  },
  {
    name: "Tetris",
    description: [
      "Engineered a Tetris game following Functional Reactive Programming (FRP) principles.",
      "Applied immutability and higher-order functions to improve code clarity and maintainability.",
      "Utilized reactive programming techniques to manage game state and user interactions efficiently.",
      "Demonstrated strong understanding of functional programming concepts through structured and scalable design.",
    ], 
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    video: tetris,
    source_code_link: "https://github.com/Amanda9601/Tetris",
  },
  {
    name: "The Fiery Dragon",
    description:[
      "This was a group project of three members, creating dynamic animal-based gameplay where player identities shift based on tiles.",
      "Movement is determined by flipping cards; players advance when the card matches their current animal, with steps based on the number of animals.",
      "Special tiles like Skeleton and Switch introduce backward movement or position swaps, and turns are time-limited for fast-paced play.",
      "Players can save, resume, reset, or quit at any time; victory is achieved by completing a full round and returning to their cave.",
    ], 
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
    ],
    video: theFieryDragon,
    source_code_link: "https://github.com/Amanda9601/The-Fiery-Dragon",
  },
];

export { services, technologies, experiences, testimonials, certifications, projects, educations };