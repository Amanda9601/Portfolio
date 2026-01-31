import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
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
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Github",
  //   icon: github,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "Canva",
  //   icon: canva,
  // },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  // {
  //   name: "Andriod Studio",
  //   icon: andriodStudio,
  // },
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
    description:"Certificate of Apprecipation",
    image:"",
  },
  { //2023
    name:"Varsity Hackathon 2023",
    position: "Participant",
    description:"Certificate of Participation ",
    image:"",
  },
  { //2023
    name:"Kitahack Hackathon 2023",
    position: "Participant",
    description:"Certificate of Participation ",
    image:"",
  },
  { //2022 I DONT RMB THIS
    name:"Maybank",
    position: "Participant",
    description:"Certificate of Participation ",
  },
  { //2020
    name:"ACE EdVenture",
    position: "Student",
    description:"Certificate of Completion",
    image:"",
  },
  { //2019
    name:"AEVDC 2019 Dance Carnival",
    position: "Pianist",
    description:"Certificate of Participation",
    image:"",
  },
  { //2018
    name:"Trinity College London",
    position: "Student",
    description:"Graded Examination in Music Performance",
    image:"",
  },
  { //2018
    name:"AEVDC 2018 Dance Carnival",
    position: "Dancer",
    description:"Certicate of Participation",
    image:"",
  },
  { //2015
    name:"The Associated Board of the Royal Schools of Music",
    position: "Student",
    description:"Graded Examination in Grade 1 Music Theory",
    image:"",
  },
  { //2011
    name:"Royal Academy of Dance",
    position: "Dancer",
    description:"Graded Examination in Dance",
    image:"",
  },
]

const projects = [
  {
    name: "Rogue-Like Game (School Project)",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Ticket Booking (Haven)",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Order (Haven)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, certifications, projects, educations };