import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/a_man_yadav_", icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aman-yadav-799a1b39b/", icon: FaLinkedin },
  { name: "GitHub", href: "https://github.com/a-man-yadav/", icon: FaGithub },
];
const navLinks = ["home", "about", "services", "work", "education", "contact"];

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
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];


export {navLinks, servicesData, projects, socials, items};
