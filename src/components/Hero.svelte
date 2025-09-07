<script>
  import { onMount } from 'svelte';
  import hljs from 'highlight.js/lib/core';
  import rust from 'highlight.js/lib/languages/rust';
  import 'highlight.js/styles/github-dark.css';
  
  export let portfolio;
  
  let experienceYears = 5; // Default value
  let codeElement;
  
  const rustCode = `fn main() {
  println!("Building the future with Rust!");
}`;
  
  onMount(() => {
    hljs.registerLanguage('rust', rust);
    if (codeElement) {
      hljs.highlightElement(codeElement);
    }
  });
  
  $: if (portfolio) {
    experienceYears = portfolio.calculate_experience_years();
  }
</script>

<section id="hero" class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1>
        <span class="greeting">Hello, I'm</span>
        <span class="name">Your Name</span>
      </h1>
      <h2 class="title">Full-Stack Developer</h2>
      <p class="description">
        Passionate about creating innovative web applications using cutting-edge technologies 
        like Rust, WebAssembly, Svelte, and modern JavaScript frameworks. 
        With {experienceYears} years of experience, I bring ideas to life through clean, 
        efficient, and scalable code.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="code-animation">
        <pre class="left-align"><code bind:this={codeElement} class="language-rust">{rustCode}</code></pre>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <span>Scroll to explore</span>
    <div class="arrow">↓</div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 5% 2rem;
    position: relative;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }

  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .greeting {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
  }

  .name {
    display: block;
    background: linear-gradient(45deg, #646cff, #83a6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 1.5rem 0;
    font-weight: 300;
  }

  .left-align {
    text-align: left;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
    max-width: 500px;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: #646cff;
    color: white;
  }

  .btn-primary:hover {
    background: #535bf2;
    transform: translateY(-2px);
  }

  .btn-secondary {
    color: #646cff;
    border-color: #646cff;
  }

  .btn-secondary:hover {
    background: #646cff;
    color: white;
    transform: translateY(-2px);
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .code-animation {
    background: #1e1e1e;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 2rem;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 1.1rem;
    line-height: 1.5;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .code-animation pre {
    margin: 0;
    background: transparent;
    padding: 0;
    overflow: visible;
  }

  .code-animation code {
    background: transparent;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }


  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    animation: bounce 2s infinite;
  }

  .arrow {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .hero-text h1 {
      font-size: 2.5rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .cta-buttons {
      justify-content: center;
    }

    .code-animation {
      font-size: 0.9rem;
      padding: 1.5rem;
    }
  }

  @media (prefers-color-scheme: light) {
    .hero {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .greeting, .title, .description {
      color: #213547;
    }

    .scroll-indicator {
      color: rgba(33, 53, 71, 0.5);
    }
  }
</style>