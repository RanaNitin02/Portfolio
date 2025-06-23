// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Project Section Logo's
import virtumate from './assets/virtumate.png';
import caresync from './assets/caresync.png';
import vhwa from './assets/vhwa.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    school: "Chitkara University, Baddi",
    date: "Sept 2022 - Jun 2026",
    grade: "8.77 CGPA",
    desc: "I have completed my Bachelor's degree (B.E.) in Computer Science from Chitkara University, Baddi. During my time at Chitkara, I gained a strong foundation in programming, software development, and computer science principles. My experience at Chitkara University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Engineering in Computer Science - B.E. CSE",
  },
  {
    id: 1,
    school: "Sh. Shakti Senior Secondary School, Sh. Naina Devi Ji",
    date: "Apr 2021 - March 2022",
    grade: "81.6%",
    desc: "I completed my 12th class education from Sh. Shakti Senior Secondary School, Sh. Naina Devi Ji, under the HP board, where I studied Physics, Chemistry, and Mathematics.",
    degree: "HPBOSE(XII) - PCM",
  },
  {
    id: 2,
    school: "Sh. Shakti Senior Secondary School, Sh. Naina Devi Ji",
    date: "Apr 2019 - March 2020",
    grade: "83.7%",
    desc: "I completed my 10th class education from Sh. Shakti Senior Secondary School, Sh. Naina Devi Ji, under the HP board.",
    degree: "HPBOSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "VirtuMate",
    description:
      "An intelligent AI-powered virtual assistant built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This assistant is designed to help users perform tasks, answer questions, and interact through a seamless web interface.",
    image: virtumate,
    tags: ["MongoDB", "Express.js", "React JS", "JWT", "Gemini API"],
    github: "https://github.com/RanaNitin02/VirtuMate",
    webapp: "https://virtumate.onrender.com/signup",
  },
  {
    id: 1,
    title: "CareSync",
    description:
      "A full-stack web application built using the MERN stack that allows patients to book appointments with doctors. It includes authentication, appointment management, Stripe payment integration, and a responsive frontend.",
    image: caresync,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Swiper.js", "Cloudinary", "Stripe API"],
    github: "https://github.com/RanaNitin02/CareSync",
    webapp: "https://caresync-wzki.onrender.com/",
  },
  {
    id: 2,
    title: "Video Hosting WebApp",
    description:
      "A complete backend project with all necessary features for a robust backend. Designed to build a full-featured video hosting website similar to YouTube.",
    image: vhwa,
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "",
  },

  
];  