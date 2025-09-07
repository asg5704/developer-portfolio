<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Projects from './components/Projects.svelte';
  import Skills from './components/Skills.svelte';
  import Contact from './components/Contact.svelte';

  let wasmModule;
  let portfolio;
  let projects = [];
  let skills = [];

  onMount(async () => {
    try {
      // Import the WASM module
      wasmModule = await import('./wasm/portfolio_wasm.js');
      await wasmModule.default();
      
      // Initialize the portfolio
      portfolio = new wasmModule.Portfolio();
      
      // Get data from WASM
      projects = portfolio.get_projects();
      skills = portfolio.get_skills();
      
      console.log('WASM module loaded successfully');
    } catch (error) {
      console.error('Failed to load WASM module:', error);
      // Fallback data if WASM fails to load
      projects = [
        {
          name: "Portfolio Website",
          description: "A modern portfolio built with Rust WASM, Svelte, and Vite",
          technologies: ["Rust", "WebAssembly", "Svelte", "Vite"],
          github_url: "https://github.com/yourusername/portfolio",
          demo_url: "https://yourportfolio.dev"
        }
      ];
      skills = [
        { name: "Rust", level: 8, category: "Systems Programming" },
        { name: "JavaScript/TypeScript", level: 9, category: "Web Development" },
        { name: "Svelte", level: 7, category: "Frontend Framework" }
      ];
    }
  });
</script>

<Header />

<main>
  <Hero {portfolio} />
  <Projects {projects} {portfolio} />
  <Skills {skills} {portfolio} />
  <Contact />
</main>

<style>
  main {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }
</style>