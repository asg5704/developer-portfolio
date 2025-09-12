import type { PortfolioData } from "~/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "John Doe",
  title: "Full Stack Software Engineer",
  bio: "Passionate software engineer with 5+ years of experience building scalable web applications. I love solving complex problems and creating intuitive user experiences.",
  email: "john.doe@example.com",
  location: "San Francisco, CA",
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.dev",
    twitter: "https://twitter.com/johndoe",
  },
  skills: [
    {
      name: "TypeScript",
      category: "Languages",
      logo: "typescript.svg",
    },
    {
      name: "Vue.js",
      category: "Frontend",
      logo: "vue.svg",
    },
    {
      name: "Nuxt.js",
      category: "Frontend",
      logo: "nuxt.svg",
    },
    {
      name: "React",
      category: "Frontend",
      logo: "react.svg",
    },
    {
      name: "Node.js",
      category: "Backend",
      logo: "node.svg",
    },
    {
      name: "JavaScript",
      category: "Languages",
      logo: "javascript.svg",
    },
    {
      name: "Python",
      category: "Languages",
      logo: "python.svg",
    },
    {
      name: "Python",
      category: "Backend",
      logo: "python.svg",
    },
    {
      name: "PostgreSQL",
      category: "Database & DevOps",
      logo: "postgres.svg",
    },
    {
      name: "Docker",
      category: "Database & DevOps",
      logo: "docker.svg",
    },
    {
      name: "AWS",
      category: "Database & DevOps",
      logo: "aws.svg",
    },
    {
      name: "Git",
      category: "Tools",
      logo: "git.svg",
    },
  ],
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with modern technologies",
      longDescription:
        "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with scalability and performance in mind.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "PostgreSQL",
        "Stripe API",
        "AWS",
      ],
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.johndoe.dev",
      imageUrl: "/projects/ecommerce.jpg",
      featured: true,
      status: "Completed",
      startDate: "2023-01-15",
      endDate: "2023-06-30",
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      longDescription:
        "A modern task management application that allows teams to collaborate in real-time. Features include drag-and-drop task organization, real-time updates, team collaboration, and progress tracking.",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "Express.js",
        "MongoDB",
      ],
      githubUrl: "https://github.com/johndoe/task-manager",
      liveUrl: "https://tasks.johndoe.dev",
      imageUrl: "/projects/task-manager.jpg",
      featured: true,
      status: "Completed",
      startDate: "2023-07-01",
      endDate: "2023-10-15",
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts",
      longDescription:
        "An intuitive weather dashboard that provides current weather conditions and forecasts for multiple locations. Features include geolocation support, weather maps, and historical data.",
      technologies: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather.johndoe.dev",
      imageUrl: "/projects/weather.jpg",
      featured: false,
      status: "Completed",
      startDate: "2023-11-01",
      endDate: "2023-12-15",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website Template",
      description: "A customizable portfolio website template for developers",
      longDescription:
        "An open-source portfolio website template built with modern web technologies. Fully customizable with easy data configuration and responsive design.",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS", "Radix UI"],
      githubUrl: "https://github.com/johndoe/portfolio-template",
      imageUrl: "/projects/portfolio.jpg",
      featured: false,
      status: "In Progress",
      startDate: "2024-01-01",
    },
  ],
};
