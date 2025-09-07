# Developer Portfolio

A modern, high-performance portfolio website built with Rust WebAssembly, Svelte, and Vite. This project demonstrates the power of combining systems programming with modern web technologies.

## 🚀 Features

- **Rust WASM Integration** - Core portfolio logic written in Rust and compiled to WebAssembly
- **Modern Frontend** - Built with Svelte for reactive UI components
- **Fast Development** - Powered by Vite for lightning-fast builds and hot reload
- **Responsive Design** - Mobile-first approach with smooth animations
- **Interactive Components** - Dynamic project filtering and skill visualization
- **Contact Form** - Functional contact form with form validation

## 🏗️ Architecture

```
├── src/
│   ├── components/           # Svelte components
│   │   ├── Header.svelte    # Navigation with mobile menu
│   │   ├── Hero.svelte      # Landing section with animated code
│   │   ├── Projects.svelte  # Project showcase with WASM integration
│   │   ├── Skills.svelte    # Interactive skills display
│   │   └── Contact.svelte   # Contact form and social links
│   ├── wasm/                # Generated WASM files (auto-generated)
│   ├── App.svelte           # Main application component
│   ├── main.js              # Application entry point
│   └── app.css              # Global styles
├── wasm-module/             # Rust WASM source code
│   ├── src/
│   │   └── lib.rs           # Rust portfolio logic
│   └── Cargo.toml           # Rust dependencies
├── public/                  # Static assets
├── build-wasm.js            # WASM build script
├── package.json             # Node.js dependencies and scripts
├── vite.config.js           # Vite configuration
└── svelte.config.js         # Svelte configuration
```

## 🛠️ Major Build Tasks

### 1. Project Initialization

- Set up Vite + Svelte project structure
- Configure WASM plugins (`vite-plugin-wasm`, `vite-plugin-top-level-await`)
- Create basic HTML template with Svelte mount point

### 2. Rust WASM Module Development

- Initialize Rust library with `wasm-bindgen` dependencies
- Implement core portfolio data structures (`Project`, `Skill`)
- Create `Portfolio` class with methods for:
  - Getting projects and skills data
  - Filtering projects by technology
  - Calculating experience years
  - Grouping skills by category
- Configure Cargo.toml for WebAssembly compilation

### 3. WASM Build System

- Create automated build script (`build-wasm.js`)
- Install and configure `wasm-pack` for compilation
- Set up build pipeline that:
  - Checks for wasm-pack installation
  - Compiles Rust to WASM with web target
  - Outputs to `src/wasm/` directory
  - Integrates with Vite dev server

### 4. Frontend Component Development

#### Header Component

- Responsive navigation with hamburger menu
- Smooth scrolling navigation links
- Mobile-first design with backdrop blur

#### Hero Section

- Animated code snippet display
- Gradient text effects
- Call-to-action buttons
- Integration with WASM for dynamic experience calculation

#### Projects Showcase

- Dynamic project loading from WASM
- Technology filtering capabilities
- Responsive card layout
- GitHub and demo links

#### Skills Visualization

- Interactive skill level bars
- Category-based filtering
- Responsive grid layout
- WASM-powered data management

#### Contact Form

- Functional form with validation
- Social media integration
- Responsive design
- Form submission simulation

### 5. Styling and Design System

- CSS custom properties for theming
- Dark/light mode support via `prefers-color-scheme`
- Responsive breakpoints and mobile optimization
- Smooth animations and transitions
- Gradient effects and modern styling

### 6. Build and Development Setup

- Hot reload development server
- WASM integration with Vite
- Optimized production builds
- Cross-platform compatibility

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Rust toolchain with `wasm32-unknown-unknown` target
- `wasm-pack` (will be auto-installed if missing)

### Installation

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd portfolio
   npm install
   ```

2. **Install wasm-pack (if not already installed):**

   ```bash
   curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
   ```

3. **Build WASM module:**

   ```bash
   npm run build-wasm
   ```

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with WASM build
- `npm run build-wasm` - Build only the WASM module
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Customization

### Adding/Updating Projects in WASM

Projects are managed in the Rust WASM module. To add or modify projects:

1. **Open the WASM source file:**

   ```
   /wasm-module/src/lib.rs
   ```

2. **Find the projects vector in the `Portfolio::new()` method** (around line 42):

   ```rust
   let projects = vec![
       Project {
           name: "Portfolio Website".to_string(),
           description: "A modern portfolio built with Rust WASM, Svelte, and Vite".to_string(),
           technologies: vec!["Rust".to_string(), "WebAssembly".to_string(), "Svelte".to_string(), "Vite".to_string()],
           github_url: "https://github.com/yourusername/portfolio".to_string(),
           demo_url: Some("https://yourportfolio.dev".to_string()),
       },
       // Add more projects here...
   ];
   ```

3. **Add a new project** by adding another `Project` struct:

   ```rust
   Project {
       name: "Your Project Name".to_string(),
       description: "Brief description of what your project does".to_string(),
       technologies: vec!["React".to_string(), "Node.js".to_string(), "MongoDB".to_string()],
       github_url: "https://github.com/yourusername/your-project".to_string(),
       demo_url: Some("https://your-project.com".to_string()), // Use None if no demo
   },
   ```

4. **Rebuild the WASM module:**
   ```bash
   npm run build-wasm
   ```

### Adding/Updating Skills in WASM

Skills are also managed in the WASM module:

1. **Find the skills vector in the `Portfolio::new()` method** (around line 59):

   ```rust
   let skills = vec![
       Skill {
           name: "Rust".to_string(),
           level: 8,  // Scale of 1-10
           category: "Systems Programming".to_string(),
       },
       // Add more skills here...
   ];
   ```

2. **Add a new skill:**

   ```rust
   Skill {
       name: "Python".to_string(),
       level: 9,
       category: "Backend Development".to_string(),
   },
   ```

3. **Common skill categories you can use:**

   - "Frontend Development"
   - "Backend Development"
   - "Systems Programming"
   - "Web Technologies"
   - "Database"
   - "DevOps"
   - "Mobile Development"

4. **Rebuild the WASM module:**
   ```bash
   npm run build-wasm
   ```

### Updating Personal Information

**Hero Section (Name, Title, Description):**
Edit `src/components/Hero.svelte`:

```svelte
<h1>
  <span class="greeting">Hello, I'm</span>
  <span class="name">Your Actual Name</span> <!-- Update this -->
</h1>
<h2 class="title">Your Job Title</h2> <!-- Update this -->
<p class="description">
  Your personal description here... <!-- Update this -->
</p>
```

**Contact Information:**
Edit `src/components/Contact.svelte`:

- Update email address (lines ~87, ~92)
- Update LinkedIn URL (line ~98)
- Update GitHub URL (line ~106)

**Navigation Brand:**
Edit `src/components/Header.svelte`:

```svelte
<div class="nav-brand">
  <h2>Your Name</h2> <!-- Update this -->
</div>
```

### WASM Development Workflow

When making changes to projects/skills:

1. **Edit** `/wasm-module/src/lib.rs`
2. **Test your Rust syntax** (optional):
   ```bash
   cd wasm-module
   cargo check
   ```
3. **Rebuild WASM:**
   ```bash
   npm run build-wasm
   ```
4. **Refresh your browser** - changes should appear immediately

### Advanced WASM Customization

**Adding new methods to the Portfolio struct:**

```rust
#[wasm_bindgen]
impl Portfolio {
    // Add a method to get projects by year
    #[wasm_bindgen]
    pub fn get_recent_projects(&self, years: u32) -> JsValue {
        // Your implementation here
        serde_wasm_bindgen::to_value(&filtered_projects).unwrap()
    }
}
```

**Using new methods in Svelte components:**

```svelte
<script>
  // In your component
  let recentProjects = [];

  $: if (portfolio) {
    recentProjects = portfolio.get_recent_projects(2);
  }
</script>
```

### Styling Customization

**Global styles:** `src/app.css`
**Component styles:** Within each `.svelte` file's `<style>` section
**Theme colors:** CSS custom properties in component styles

## 🏗️ Production Deployment

1. **Build for production:**

   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting platform of choice:
   - Netlify
   - Vercel
   - GitHub Pages
   - Your own server

## 🤝 Development Workflow

1. **Frontend changes**: Edit Svelte components - hot reload will update automatically
2. **WASM changes**: Modify Rust code, run `npm run build-wasm`, refresh browser
3. **Styling**: CSS changes in components update with hot reload
4. **Testing**: Use `npm run preview` to test production build locally

## 📦 Key Dependencies

### Frontend

- **Svelte** - Reactive UI framework
- **Vite** - Build tool and dev server
- **vite-plugin-wasm** - WASM integration
- **vite-plugin-top-level-await** - Async WASM loading

### WASM/Rust

- **wasm-bindgen** - Rust/JS interop
- **js-sys** - JavaScript API bindings
- **web-sys** - Web API bindings
- **serde** - Serialization framework

## 🎯 Performance Features

- **WebAssembly**: Near-native performance for data processing
- **Code Splitting**: Lazy-loaded WASM modules
- **Modern Build**: Vite's optimized bundling
- **Responsive Images**: Optimized asset loading
- **CSS Optimization**: Scoped styles and purging

## 🐛 Troubleshooting

**WASM build fails:**

- Ensure Rust toolchain is installed: `rustup --version`
- Install WASM target: `rustup target add wasm32-unknown-unknown`
- Reinstall wasm-pack: `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`

**Dev server won't start:**

- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (requires 16+)
- Rebuild WASM: `npm run build-wasm`

**WASM module not loading:**

- Check browser console for errors
- Ensure WASM files exist in `src/wasm/`
- Verify Vite WASM plugins are installed

---

Built with ❤️ using Rust, WebAssembly, Svelte, and modern web technologies.
