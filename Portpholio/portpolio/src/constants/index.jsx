import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import {SiMysql} from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "LUCKY MANIKPURI",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated software developer with expertise in crafting efficient and scalable applications. I thrive on transforming complex ideas into seamless solutions, combining creativity with technical proficiency to deliver impactful user experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Art Gallery",
    description:
      "An e-commerce platform built with Spring Boot microservices to showcase and trade artwork, featuring standard e-commerce functionalities, customer-seller chat, and admin role management for seamless operations.",
    image: projectImage1,
    githubLink: "https://github.com/lucky001118/Art_Gallery_Web_App",
  },
  {
    id: 2,
    name: "Movie Recommandation System",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/lucky001118/MovieRecommendation_System",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management system built with Spring Boot microservices to organize and track tasks, featuring user authentication, task assignment, progress monitoring, and submission tracking for streamlined workflows.",
    image: projectImage3,
    githubLink: "https://github.com/lucky001118/Task_management_system",
  },
  {
    id: 4,
    name: "Smart Contact Manager",
    description:
      "A smart contact manager built with Spring Boot MVC architecture to store and manage contacts, featuring secure authentication, multi-login options, email/SMS integration, and admin role management for efficient contact handling.",
    image: projectImage4,
    githubLink: "https://github.com/lucky001118/Smart_Contact_Manager",
  },
  {
    id: 5,
    name: "Blog Platform 'TechBlog' ",
    description:
      "A blogging platform built with JSP, Servlets, and MySQL to share tech content, featuring user authentication, post creation, commenting, liking, and profile customization for an interactive experience.",
    image: projectImage5,
    githubLink: "https://github.com/lucky001118/Blog_Application",
  },
  {
    id: 6,
    name: "Library Management System",
    description:
      "A library management system built with Java and MySQL and JDBC to manage book inventory, issue/return records, user accounts, and admin functionalities for efficient library operations.",
    image: projectImage6,
    githubLink: "https://github.com/lucky001118/JDBC_Project_LMS",
  },
];

export const BIO = [
  "I am a dedicated and enthusiastic Computer Science Engineering student at CSIT College under CSVTU University, with a strong academic record of 82%. My journey in technology began with a curiosity about how systems work, which has grown into a passion for building innovative solutions. With a solid foundation in programming and a focus on continuous learning, I aim to create impactful applications that solve real-world problems effectively.",
  "Throughout my academic journey, I have worked on several notable projects, including a Smart Contact Manager, a Task Management System, and an ART-GALLERY e-commerce platform. These projects reflect my ability to develop full-stack applications using technologies like Spring Boot, Hibernate, React.js, and microservices architecture. Additionally, my experience in AI and ML-based solutions, such as a movie recommendation system, demonstrates my interest in leveraging data to enhance user experiences.",
  "Beyond academics, I have cultivated a variety of skills by exploring both frontend and backend technologies. My technical toolkit includes proficiency in Java, Python, MySQL, Tailwind CSS, and React.js. I am also well-versed in implementing robust security measures, integrating third-party APIs, and building scalable architectures. My projects often include features like authentication, API integrations, and real-time functionalities, ensuring both usability and security.",
  "When I am not coding, I enjoy traveling, playing sports, and reading poems, which help me maintain a balanced and positive outlook. My goal is to continue growing as a software developer, embracing challenges and opportunities to innovate while contributing meaningfully to the tech industry."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Fresher",
  },
  {
    icon: <FaJava className="text-4xl text-white lg:text-5xl" />,
    name: "Java",
    experience: "1.5+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Fresher",
  },
  {
    icon: <SiHibernate className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Hibernate",
    experience: "0.6 year",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "Fresher",
  },
  {
    icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind css",
    experience: "Fresher",
  },
];

export const EXPERIENCES = [
  {
    title: "Art Gallery Backend",
    company: "Spring Boot, Microservices, Spring Security and JWT token",
    duration: "spetember 2024 - November 2024",
    description:
      "In building the backend for the Art Gallery web application, I worked extensively with Spring Boot microservices architecture, leveraging its modularity to create efficient and scalable services for user authentication, art catalog management, customer-seller interactions, and admin functionalities. I gained hands-on experience in integrating various components like databases, API gateways, and inter-service communication while ensuring high security and reliability. This project allowed me to deepen my understanding of designing RESTful APIs, implementing business logic, and handling transactions efficiently. The experience significantly enhanced my problem-solving and debugging skills, and I learned the importance of maintaining clean, maintainable code to ensure smooth collaboration and scalability in future enhancements.",
  },
  {
    title: "Movie Recommandation System",
    company: "Springboot Microservices, Spring Security, JWT, Python (for ML model), Flask and React.js",
    duration: "December 2024 - January 2025",
    description:
      "In developing the Movie Recommendation System web application, I worked on integrating various technologies to deliver a seamless and secure user experience. Using Spring Boot microservices, I structured the backend into modular and independent services, ensuring scalability and maintainability. With Spring Security and JWT, I implemented robust authentication and authorization mechanisms to secure the application. Python, along with libraries like NumPy, Pandas, and TensorFlow, powered the recommendation algorithm, while React.js provided a dynamic and user-friendly frontend. This project helped me gain proficiency in full-stack development, microservices architecture, and the integration of AI/ML models into web applications. It was a rewarding experience that deepened my understanding of coordinating diverse technologies to create a cohesive and efficient system.",
  },
  {
    title: "Smart Contact Manager",
    company: "Spring Boot, Tailwind css, Spring Security, Google mail, Coludenary API etc.",
    duration: "March 2024",
    description:
      "In building the backend for the Smart Contact Manager application, I utilized technologies like Java, Spring Boot, Hibernate, and MySQL to develop a robust and secure system for managing contacts in a cloud-based environment. The project involved implementing features such as user authentication with Spring Security, email verification, and OTP-based mobile number verification using JWT. I integrated APIs like Google API for login and Twilio for SMS, ensuring enhanced functionality and accessibility. Through this experience, I honed my skills in database management, backend architecture, and API integration while learning to address challenges like encryption, token management, and authorization effectively. This project significantly enhanced my problem-solving abilities and my understanding of creating scalable, secure, and user-focused backend systems.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Chhattishgarh Swami Vivekanand Technichal Univercity",
    duration: "September 2021 - June 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and Spring Boot. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "12th Standard",
    institution: "Higher Secondary school, Anjora Durg",
    duration: "July 2020 - June 2021",
    description:
      "Focused on subjects related to mathematics, physics, and computer science, which helped in developing a strong analytical and problem-solving mindset. Actively participated in academic clubs and competitions, where I honed my programming and algorithm design skills. Graduated with high marks, building a solid foundation for further studies in Computer Science Engineering.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/lucly.manikpuri",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/lucky_manikpuri_18",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/lucky001118",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/lucky-manikpuri-49804927b/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
