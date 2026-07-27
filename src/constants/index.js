import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/a_man_yadav_", icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aman-yadav-799a1b39b/", icon: FaLinkedin },
  { name: "GitHub", href: "https://github.com/a-man-yadav/", icon: FaGithub },
  { name: "LeetCode", href: "https://leetcode.com/u/aman_yadav_7887/", icon: SiLeetcode }
];
const navLinks = ["home", "about", "services", "work", "contact"];

const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"]

const servicesData = [
  {
    title: "Full-Stack Applications",
    description:
      "I enjoy building scalable web applications from concept to deployment, combining intuitive user interfaces with robust backend systems.",
    items: [
      {
        title: "Frontend Development",
        description: "(React, Tailwind CSS, Framer Motion)"
      },
      {
        title: "Backend Development",
        description: "(Node.js, Express.js, REST APIs)"
      },
      {
        title: "Database Design",
        description: "(MongoDB, Redis, Scalable Data Models)"
      }
    ]
  },
  {
    title: "Authentication & Security",
    description:
      "Building secure applications with modern authentication flows and best practices.",
    items: [
      {
        title: "JWT Authentication",
        description: "(Access & Refresh Tokens)"
      },
      {
        title: "OAuth Integration",
        description: "(Google Authentication)"
      },
      {
        title: "Role-Based Access",
        description: "(Admin & User Authorization)"
      }
    ]
  },
  {
    title: "Performance & User Experience",
    description:
      "Creating applications that are responsive, optimized, and enjoyable to use across devices.",
    items: [
      {
        title: "Responsive Design",
        description: "(Desktop, Tablet & Mobile)"
      },
      {
        title: "Animations",
        description: "(GSAP, Framer Motion)"
      },
      {
        title: "Optimized Performance",
        description: "(Lazy Loading, Caching, Debouncing)"
      }
    ]
  },
  {
    title: "Currently Exploring",
    description:
      "Continuously learning new technologies to become a better software engineer.",
    items: [
      {
        title: "React Native",
        description: "(Cross-platform Mobile Apps)"
      },
      {
        title: "Redis",
        description: "(Caching & Performance)"
      },
      {
        title: "System Design",
        description: "(Scalable Architectures)"
      }
    ]
  },
];
const projects = [
  {
    id: 1,
    name: "Restaurant Website",
    description:
      "An online platform for ordering food and making reservations at a restaurant with a user-friendly interface.",
    href: "https://restaurant-frontend-six-steel.vercel.app/",
    image: "/assets/projects/restaurant.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],

  },
  {
    id: 2,
    name: "MyFit gym",
    description:
      "An online platform for gym membership, fitness classes and home workout guide with a user-friendly interface.",
    href: "https://my-fit-gym.vercel.app/",
    image: "/assets/projects/gym.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Framer" },
      { id: 3, name: "" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Mojito Landing Page",
    description:
      "A landing page with a modern and user-friendly interface for a mojito bar.",
    href: "https://cocktails-navy.vercel.app/",
    image: "/assets/projects/mojito.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Zentry",
    description:
      "A heavy amination webpage for adverdisement with bento cards and a user-friendly interface.",
    href: "https://zentry-inspire-six.vercel.app/",
    image: "/assets/projects/zentry.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "GSAP" },
    ],
  },
];

const frontend = [
  {
    id: 1,
    name: "HTML",
    image: "/logos/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/logos/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/logos/java-script.png",
  },
  {
    id: 4,
    name: "React",
    image: "/logos/react.png",
  },
  {
    id: 5,
    name: "Tailwind",
    image: "/logos/tailwind.jpg",
  },
  {
    id: 6,
    name: "Framer",
    image: "/logos/framer.svg",
  },
  {
    id: 7,
    name: "GSAP",
    image: "/logos/gsap.svg",
  },
];
const backend =[
  {
    id: 1,
    name: "Node.js",
    image: "/logos/node.svg",
  },
  {
    id: 2,
    name: "Express.js",
    image: "/logos/express.png",
  },
  {
    id: 3,
    name: "REST APIs",
    image: "/logos/rest.png",
  },
  {
    id: 4,
    name: "Web Socket",
    image: "/logos/websocket.svg",
  },
  {
    id: 5,
    name: "jwt",
    image: "/logos/jwt.svg",
  }
]
const database =[
  {
    id: 1,
    name: "MongoDB",
    image: "/logos/mongodb.svg",
  },
  {
    id: 2,
    name: "Redis",
    image: "/logos/redis.svg",
  }
]
const tools =[
  {
    id: 1,
    name: "Git",
    image: "/logos/git.svg",
  },
  {
    id: 2,
    name: "GitHub",
    image: "/logos/github.svg",
  },
  {
    id: 3,
    name: "Docker",
    image: "/logos/docker.svg",
  },
  {
    id: 4,
    name: "Vercel",
    image: "/logos/vercel.svg",
  },
  {
    id: 5,
    name: "Cloudinary",
    image: "/logos/cloudinary.svg",
  },
  {
    id: 6,
    name: "Postman",
    image: "/logos/postman.svg",
  }
]
const other =[
  {
    id: 1,
    name: "C",
    image: "/logos/c.png",
  },
  {
    id: 2,
    name: "C++",
    image: "/logos/c++.svg",
  },
  {
    id: 3,
    name: "Python",
    image: "/logos/python.svg",
  }
]


export {navLinks, servicesData, projects, socials, items, frontend, backend, database, tools, other};
