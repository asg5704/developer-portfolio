<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav>
    <div class="nav-brand">
      <h2>Your Name</h2>
    </div>
    
    <button class="nav-toggle" on:click={toggleMenu} aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <ul class="nav-menu" class:active={isMenuOpen}>
      <li><a href="#hero" on:click={toggleMenu}>Home</a></li>
      <li><a href="#projects" on:click={toggleMenu}>Projects</a></li>
      <li><a href="#skills" on:click={toggleMenu}>Skills</a></li>
      <li><a href="#contact" on:click={toggleMenu}>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #232323;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-brand h2 {
    margin: 0;
    color: #646cff;
    font-size: 1.5rem;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-menu a {
    color: rgba(255, 255, 255, 0.87);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-menu a:hover {
    color: #646cff;
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    justify-content: space-between;
  }

  .nav-toggle span {
    width: 100%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.87);
    transition: all 0.3s;
    transform-origin: center;
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(36, 36, 36, 0.98);
      padding: 2rem;
      gap: 1rem;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
    }

    .nav-menu.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  @media (prefers-color-scheme: light) {
    header {
      background: rgba(255, 255, 255, 0.95);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .nav-menu a {
      color: #213547;
    }

    .nav-toggle span {
      background-color: #213547;
    }

    .nav-menu {
      background: rgba(255, 255, 255, 0.98);
    }
  }
</style>