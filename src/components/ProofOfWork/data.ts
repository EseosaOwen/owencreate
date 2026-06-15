export const skillCategories = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "CSS-in-JS (Emotion/Styled Components)",
      "Redux",
      "React Query",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "External API integrations",
      "Payment systems & integrations",
      "Authentication & security",
    ],
  },
  {
    label: "Architecture & systems",
    skills: [
      "Full-stack & systems architecture",
      "State management",
      "Backend data modelling",
      "API design",
      "Git & version control",
    ],
  },
  {
    label: "Familiar with",
    skills: ["AWS (cloud infrastructure — currently refreshing)"],
  },
  {
    label: "Others",
    skills: [
      "Sales",
      "Team Leadership",
      "Product Marketing",
      "Critical Thinking",
    ],
  },
];

type Project = {
  team: string;
  title: string;
  desc: string;
  image?: string;
  url?: string;
  gallery?: string[];
  placeholder?: boolean;
  stack: string[];
  type?: string;
};

export const projects: Project[] = [
  {
    team: "Personal project",
    title: "Involey",
    type: "SaaS",
    desc: "I identified a gap in how small businesses track visibility and clarity. And I've built the tool to fix it.",
    image: "New Involey Mockup.jpg",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Payment Integration",
      "Redux and TanStack Query",
      "Email Architecture",
    ],
    url: "https://involey.puissantdev.tech",
  },
  {
    team: "",
    title: "Customer retention system",
    desc: "Built a restaurant customer retention system that helps businesses convert one-time visitors into repeat customers through structured digital engagement, campaign-based QR acquisition, and loyalty tracking. The system enables restaurants to collect customer data, run targeted re-engagement campaigns, and measure what drives repeat visits and revenue growth. Currently in use by over 5 restaurants",
    image: "Chester Fries Restaurant.png",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Messaging (SMS/Email) Integration",
      "Full Admin Dashboard",
      "Payment Integration",
    ],
  },
  {
    team: "",
    title: "Pharmacy e-commerce store",
    image: "Khapsule Pharmacy Mockup.jpg",
    desc: "Built a full e-commerce system for a pharmacy from the ground up — product catalogue, checkout flow, order management, payment integration.",
    url: "https://khapsulepharmacy.org",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Payment Integration",
      "Full Admin Dashboard",
    ],
    type: "E-commerce",
  },
  {
    team: "PuissantDev",
    title: "Construction and Engineering business website",
    type: "Web",
    desc: "Professional web presence built to convert for a construction and engineering company.",
    stack: ["React", "CSS-in-JS"],
    url: "https://centerfieldengineering.com",
  },
  {
    team: "PuissantDev",
    title: "Naturopathy center website",
    desc: "Built a website for Puwi Health to communicate trust and expertise to a health-conscious audience.",
    image: "PuwiHealth Iphone mockup.jpg",
    stack: ["React", "CSS-in-JS"],
  },
];
