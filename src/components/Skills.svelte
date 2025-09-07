<script>
  export let skills = [];
  export let portfolio;
  
  let selectedCategory = '';
  let filteredSkills = skills;
  
  $: {
    if (selectedCategory && portfolio) {
      filteredSkills = portfolio.get_skills_by_category(selectedCategory);
    } else {
      filteredSkills = skills;
    }
  }
  
  // Extract unique categories for the filter
  $: allCategories = [...new Set(skills.map(s => s.category))].sort();
  
  // Function to get skill level description
  function getSkillLevel(level) {
    if (level >= 9) return 'Expert';
    if (level >= 7) return 'Advanced';
    if (level >= 5) return 'Intermediate';
    if (level >= 3) return 'Beginner';
    return 'Learning';
  }
  
  // Function to get skill level color
  function getSkillColor(level) {
    if (level >= 9) return '#28a745';
    if (level >= 7) return '#17a2b8';
    if (level >= 5) return '#ffc107';
    if (level >= 3) return '#fd7e14';
    return '#6c757d';
  }
</script>

<section id="skills" class="skills">
  <div class="container">
    <h2>Skills & Expertise</h2>
    <p class="section-description">
      Technologies and tools I work with to bring ideas to life.
    </p>
    
    {#if allCategories.length > 0}
      <div class="category-filter">
        <button 
          class="filter-btn" 
          class:active={selectedCategory === ''}
          on:click={() => selectedCategory = ''}
        >
          All Categories
        </button>
        {#each allCategories as category}
          <button 
            class="filter-btn" 
            class:active={selectedCategory === category}
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>
    {/if}
    
    <div class="skills-grid">
      {#each filteredSkills as skill}
        <div class="skill-card">
          <div class="skill-header">
            <h3>{skill.name}</h3>
            <span class="skill-level-text" style="color: {getSkillColor(skill.level)}">
              {getSkillLevel(skill.level)}
            </span>
          </div>
          
          <div class="skill-category">{skill.category}</div>
          
          <div class="skill-progress">
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                style="width: {skill.level * 10}%; background-color: {getSkillColor(skill.level)}"
              ></div>
            </div>
            <span class="skill-level-number">{skill.level}/10</span>
          </div>
        </div>
      {/each}
    </div>
    
    {#if filteredSkills.length === 0}
      <div class="no-skills">
        <p>No skills found for the selected category.</p>
      </div>
    {/if}
    
    <div class="skills-summary">
      <h3>What I Bring to the Table</h3>
      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">🦀</div>
          <h4>Systems Programming</h4>
          <p>Deep expertise in Rust for high-performance, memory-safe applications and WebAssembly modules.</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🌐</div>
          <h4>Modern Web Development</h4>
          <p>Full-stack development with cutting-edge frameworks, focusing on performance and user experience.</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">⚡</div>
          <h4>Performance Optimization</h4>
          <p>Optimizing applications for speed and efficiency using WebAssembly and modern build tools.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 6rem 5%;
    background: var(--bg-primary, #242424);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .section-description {
    text-align: center;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .category-filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.9rem;
  }

  .filter-btn:hover,
  .filter-btn.active {
    background: #646cff;
    color: white;
    border-color: #646cff;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .skill-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s;
  }

  .skill-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 108, 255, 0.3);
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .skill-header h3 {
    margin: 0;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .skill-level-text {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .skill-category {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .skill-progress {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .progress-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.8s ease-out;
  }

  .skill-level-number {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    min-width: 35px;
  }

  .no-skills {
    text-align: center;
    padding: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .skills-summary {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 3rem;
  }

  .skills-summary h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .summary-item {
    text-align: center;
    padding: 1.5rem;
  }

  .summary-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .summary-item h4 {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
    color: rgba(255, 255, 255, 0.9);
  }

  .summary-item p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .skills {
      padding: 4rem 5%;
    }

    h2 {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .summary-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-color-scheme: light) {
    .skills {
      background: white;
    }

    h2,
    .skill-header h3,
    .skills-summary h3,
    .summary-item h4 {
      color: #213547;
    }

    .section-description,
    .skill-category,
    .summary-item p {
      color: #495057;
    }

    .skill-card {
      background: #f8f9fa;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .filter-btn {
      border-color: rgba(0, 0, 0, 0.2);
      color: #495057;
    }

    .progress-bar {
      background: rgba(0, 0, 0, 0.1);
    }

    .skill-level-number {
      color: #495057;
    }

    .skills-summary {
      border-top-color: rgba(0, 0, 0, 0.1);
    }

    .no-skills {
      color: #6c757d;
    }
  }
</style>