# Developer Portfolio Template

A modern, responsive portfolio website template built with TypeScript, Nuxt.js, Vite, and Radix UI components. Perfect for software engineers looking to showcase their skills and projects.

<img width="1559" height="817" alt="Screenshot 2025-09-11 at 8 51 28 PM" src="https://github.com/user-attachments/assets/637280da-525f-4913-8bda-ceeabe6dbeb6" />


## 🚀 Features

- **Modern Tech Stack**: Built with Nuxt 3, TypeScript, and Vite
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Dark/Light Theme Support**: Built-in theme system with Tailwind CSS
- **Radix UI Components**: Accessible and customizable UI components
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Type Safety**: Full TypeScript support throughout
- **Easy Customization**: Simple data-driven configuration
- **Performance Focused**: Optimized for speed and Core Web Vitals

## 📋 Sections

- **Hero Section**: Personal introduction with social links
- **Skills Section**: Categorized skills with proficiency indicators
- **Projects Section**: Showcase of your work with filtering options
- **Contact Section**: Multiple ways for people to get in touch

## 🛠️ Installation

1. Clone this repository:
```bash
git clone https://github.com/asg5704/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## ⚙️ Configuration

### Personal Information

Edit the `/data/portfolio.ts` file to customize your portfolio:

```typescript
export const portfolioData: PortfolioData = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio description...",
  email: "your.email@example.com",
  location: "Your Location",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    website: "https://yourwebsite.com",
    twitter: "https://twitter.com/yourusername"
  },
  skills: [
    // Add your skills here
  ],
  projects: [
    // Add your projects here
  ]
}
```

### Skills Configuration

Add your skills with categories and proficiency levels:

```typescript
skills: [
  {
    name: "TypeScript",
    category: "Languages", // Frontend, Backend, DevOps, Database, Tools, Languages
    proficiency: "Expert" // Beginner, Intermediate, Advanced, Expert
  }
]
```

### Projects Configuration

Showcase your projects:

```typescript
projects: [
  {
    id: "unique-project-id",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description (optional)",
    technologies: ["Tech1", "Tech2", "Tech3"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    imageUrl: "/projects/image.jpg", // Optional
    featured: true, // Will be shown first
    status: "Completed", // In Progress, Completed, Archived
    startDate: "2023-01-15",
    endDate: "2023-06-30" // Optional
  }
]
```

## 🎨 Styling

The template uses Tailwind CSS with a custom design system. You can customize the colors and styling by editing:

- `/assets/css/main.css` - CSS variables and global styles
- `/tailwind.config.ts` - Tailwind configuration
- Individual component files for specific styling

## 📦 Build and Deployment

### Build for Production

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment Options

This template can be deployed to various platforms:

- **Vercel**: Automatic deployments from Git
- **Netlify**: Static site hosting with forms support
- **GitHub Pages**: Free hosting for open source projects
- **AWS S3 + CloudFront**: Scalable static hosting
- **Any static hosting provider**

## 📁 Project Structure

```
├── assets/          # CSS and static assets
├── components/      # Vue components
├── data/           # Portfolio data configuration
├── layouts/        # Nuxt layouts
├── pages/          # Application pages
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── nuxt.config.ts  # Nuxt configuration
└── package.json    # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💡 Inspiration

Built with modern web development best practices and inspired by the developer community's need for clean, professional portfolio templates.

---

**Happy coding!** 🚀
