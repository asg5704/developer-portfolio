<script>
  export let projects = [];
  export let portfolio;
  
  let selectedTech = '';
  let filteredProjects = projects;
  
  $: {
    if (selectedTech && portfolio) {
      filteredProjects = portfolio.filter_projects_by_tech(selectedTech);
    } else {
      filteredProjects = projects;
    }
  }
  
  // Extract unique technologies for the filter
  $: allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
</script>

<section id="projects" class="projects">
  <div class="container">
    <h2>Featured Projects</h2>
    <p class="section-description">
      Here are some of the projects I've built using various technologies and frameworks.
    </p>
    
    {#if allTechnologies.length > 0}
      <div class="tech-filter">
        <button 
          class="filter-btn" 
          class:active={selectedTech === ''}
          on:click={() => selectedTech = ''}
        >
          All
        </button>
        {#each allTechnologies as tech}
          <button 
            class="filter-btn" 
            class:active={selectedTech === tech}
            on:click={() => selectedTech = tech}
          >
            {tech}
          </button>
        {/each}
      </div>
    {/if}
    
    <div class="projects-grid">
      {#each filteredProjects as project}
        <div class="project-card">
          <div class="project-header">
            <h3>{project.name}</h3>
            <div class="project-links">
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"/>
                </svg>
              </a>
              {#if project.demo_url}
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
          
          <p class="project-description">{project.description}</p>
          
          <div class="project-tech">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    
    {#if filteredProjects.length === 0}
      <div class="no-projects">
        <p>No projects found for the selected technology.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .projects {
    padding: 6rem 5%;
    background: var(--bg-secondary, #1a1a1a);
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

  .tech-filter {
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

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 108, 255, 0.3);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .project-header h3 {
    margin: 0;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .project-links {
    display: flex;
    gap: 0.5rem;
  }

  .project-links a {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.3s;
  }

  .project-links a:hover {
    color: #646cff;
  }

  .project-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: rgba(100, 108, 255, 0.2);
    color: #646cff;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.85rem;
    border: 1px solid rgba(100, 108, 255, 0.3);
  }

  .no-projects {
    text-align: center;
    padding: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    .projects {
      padding: 4rem 5%;
    }

    h2 {
      font-size: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .project-header {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (prefers-color-scheme: light) {
    .projects {
      background: #f8f9fa;
    }

    h2,
    .project-header h3 {
      color: #213547;
    }

    .section-description,
    .project-description {
      color: #495057;
    }

    .project-card {
      background: white;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .filter-btn {
      border-color: rgba(0, 0, 0, 0.2);
      color: #495057;
    }

    .no-projects {
      color: #6c757d;
    }
  }
</style>