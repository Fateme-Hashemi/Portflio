import { StaticImageData } from "next/image";
import { ProjectType, ProjectTypeWithAll } from "@/lib/types";

// Icons
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// Education images
import iau from "@/public/edu-logo/iau.png";

// Project images
import televika from "@/public/project-imgs/televika2.png";
import narengi2 from "@/public/project-imgs/narengi2.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const eduData = [
  {
    place: "IA University",
    degree: "Bachelor of Computer Science",
    logo: iau,
    date: "2016 - 2020",
    description: ``,
  },
];

export const experiencesData = [
  {
    title: "Front End Developer",
    location: 'SabaIdea',
    description: `I’ve had the opportunity to work on several projects, including Narengi and Televika.
     used my skills in front-end technologies like Reactjs, JavaScript, and CSS to develop responsive (mobile friendly) and high-performance applications.
      My focus has always been on building user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility.`,
    icon: faBriefcase,
    date: "Sep 2021 – Aug 2024",
  },
  {
    title: "Responsibilities as a Front End Developer",
    location: 'SabaIdea',
    description: `Developed Single-Page Applications using Reactjs, Nextjs, TypeScript and ES6.  Created over 50 reusable UI components in the design system, reducing development time for future
projects by 30%. Styled web pages utilizing Sass, Styled Components and CSS. Provided Redux state management for large-scale projects, enhancing data consistency and
reducing errors by 25%.  Developed efficient API interactions through React query; improved data retrieval speed processing
over 500 simultaneous requests without performance degradation while maintaining a robust state
management system using Redux.  Created fully responsive and mobile-friendly pages, resulting in a 20% increase in mobile user
engagement and accessibility. Collaborated closely with the design team and product owners, bridging the gap between design
and development.  Debugged and resolved 150+ errors and issues, improving application performance and stability.
Refactored outdated code, improving clarity and boosting overall performance by 15%.  implemented website layouts based on design systems, ensuring faster implementation of new UI
features. Deployed and managed web applications on AWS and integrated Nodejs-based services,
ensuring seamless cloud integration and optimizing performance.

`,
    icon: faBriefcase,
    date: "Sep 2021 – Aug 2024",
  },
  
] as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  githubLink: string;
  deployLink: string;
  types: ProjectType[];
}

export const DEFAULT_PROJECT_TYPE: ProjectTypeWithAll = "Feature";

export const projectsData: Project[] = [
  {
    title: "Televika Project",
    description: `Televika is a registered trademark of Ereele GmbH. A company incorporated under the Austrian Law (FN474778d) and Regulated by the Austrian Telecom Authority.


Televika, as the first European regulated Persian Video-on-Demand platfrom, offers the latest Persian Movies and Series to its wide range of audiences across the world.`,
    tags: ["HTML", "CSS", "JavaScript", "React","Redux", "TypeScript", "Next.js", "SEO", "Git", "Responsive Design","Sass",],
    imageUrl: televika,
    githubLink: "",
    deployLink:
      "https://televika.com/asparagus",
    types: ["Data", "Feature"],
  },
  {
    title: "Narengi Project",
    description: `Narengi is an online VOD service on which users can stream videos online. The available pool of videos ranges from new releases to old library of movies, from Iranian to international movies & TV series.
`,
    tags: ["HTML", "CSS", "JavaScript", "React","Redux", "TypeScript", "Next.js", "SEO", "Git", "Responsive Design", "Styles-components", "Jest"],
    imageUrl: narengi2,
    githubLink: "",
    deployLink:
      "https://www.narengi.com/asparagus",
    types: ["Data", "Feature"],
  },
] as const;

export const skillsData = [
  "CSS",
  "HTML",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Rest API",
  "GraphQl",
  "Redux",
  "React Query",
  "Sass",
  "Styled-components",
  "Git",
  "GitHub",
  "GitLab",
  "AWS",
  "Jest",
    "Figma"
] as const;

export const socials = {
  linkedin: {
    // color: "#145ab5",
    // color: "linkedin",
    url: "https://www.linkedin.com/in/fatemeh-hashemi-586784225/",
    icon: faLinkedin,
  },
  github: {
    // color: "#662a8c",
    // color: "github",
    url: "https://github.com/Fateme-Hashemi",
    icon: faSquareGithub,
  },
  email: {
    // color: "#3179b5",
    // color: "#fb923c",
    // color: "email",
    url: "fatemehashemi481@gmail.com ",
    icon: faEnvelope,
  },
};
