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
  python,
  git,
  figma,
  docker,
enprogix,

  work1,
  work2,
  work3,
  
  socialLogo1,
  socialLogo2,
  socialLogo3,
  socialLogo4,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
      {
    title: "Engineer",
    icon: creator,
  },
    {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Frontend  Developer",
    icon: mobile,
  },
    {
title: "Designer",
    icon: web,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
title: "Team Lead",
    company_name: " EnprogiX Club ",
icon: enprogix,
    iconBg: "#E6DEDD",
date: "May 2023 - Present",
    points: [
      "Founded and led a student club that supports AI solutions in energy creation and saving.",
      "Recruited and managed a team of 4 students (planned to grow to 30) to arrange and conduct events, workshops, and competitions.",
      "Developed an AI-based solar-powered water desalination system for the Technofest competition.",
      "Aimed to optimize performance and efficiency, provide clean water for remote regions, and overcome challenges such as high costs,environmental impacts.",
    ],
  },
];

const testimonials = [
  {
    image: socialLogo1,
    source_code_link:  "https://www.linkedin.com/in/muhammedhaan/",
  },
    {
    image: socialLogo2,
    source_code_link: "https://twitter.com/Muhammed__Hasan",
  },
    {
    image: socialLogo3,
    source_code_link: "https://github.com/muhammedhasann",
  },
    {
    image: socialLogo4,
    source_code_link: "https://www.youtube.com/channel/UCgEIJnIsBcyLum3ttNowXBg",
  },

];

const projects = [
  {
    name: "Personal Website & Portfolio",
    description:
      "I built responsive web apps using React and Bootstrap, deployed on GitHub Pages. Integrated APIs and libraries for enhanced functionality and user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: work1,
    source_code_link: "https://github.com/muhammedhasann/mamo-ai",
  },
  {
    name: "Cloud-Native Application",
    description:
      "Developed web programs, utilized GitHub actions for building, testing, and deploying applications. Implemented frontend pages, user administration, and database operations. Created backend services, integrated with cloud-native APIs, and established CI/CD pipeline.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: work3,
    source_code_link: "https://github.com/muhammedhasann",
  },
  {
    name: "Code Blog",
    description:
      "I developed a blog using Next.js, Tailwind CSS, and hosted it on Netlify. It documented my 100 Days of Code Challenge journey, with daily updates, project showcases, and discussions on challenges. The blog aimed to inspire and motivate others in coding.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },

      {
        name: "Tawilwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: work2,
    source_code_link: "https://cerulean-tartufo-670f20.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };