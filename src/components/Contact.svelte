<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      formData = { name: '', email: '', message: '' };
      
      setTimeout(() => {
        submitMessage = '';
      }, 5000);
    }, 2000);
  }
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-header">
      <h2>Get In Touch</h2>
      <p>Have a project in mind? Let's discuss how we can work together.</p>
    </div>
    
    <div class="contact-content">
      <div class="contact-info">
        <h3>Let's Connect</h3>
        <p>
          I'm always interested in hearing about new opportunities and exciting projects.
          Whether you're looking for a developer, have a question, or just want to connect,
          I'd love to hear from you.
        </p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4>Email</h4>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="contact-icon">💼</div>
            <div class="contact-details">
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="contact-icon">⚡</div>
            <div class="contact-details">
              <h4>GitHub</h4>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            placeholder="Your Name"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            placeholder="your.email@example.com"
          />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            placeholder="Tell me about your project or just say hello!"
            rows="6"
          ></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
          {#if isSubmitting}
            Sending...
          {:else}
            Send Message
          {/if}
        </button>
        
        {#if submitMessage}
          <div class="submit-message success">
            {submitMessage}
          </div>
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 8rem 0;
    background: linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    min-height: 90vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #646cff, #747bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-header p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .contact-info > p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .contact-icon {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
  }

  .contact-details h4 {
    margin: 0 0 0.5rem 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    text-align: left;
  }

  .contact-details a {
    color: #646cff;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .contact-details a:hover {
    text-decoration: underline;
  }

  .contact-form {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    text-align: left;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    transition: all 0.3s;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #646cff;
    background: rgba(255, 255, 255, 0.15);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
  }

  .btn-primary {
    background: linear-gradient(135deg, #646cff, #747bff);
    color: white;
  }

  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(100, 108, 255, 0.3);
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .submit-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
  }

  .submit-message.success {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
  }

  @media (max-width: 768px) {
    .contact {
      padding: 6rem 0;
    }

    .container {
      padding: 0 1rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .contact-form {
      padding: 1.5rem;
    }

    .contact-method {
      flex-direction: column;
      text-align: center;
    }

    .contact-icon {
      font-size: 2rem;
    }
  }

  @media (prefers-color-scheme: light) {
    .contact {
      background: linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
    }

    .section-header p {
      color: #4a5568;
    }

    .contact-info > p {
      color: #4a5568;
    }

    .contact-info h3 {
      color: #2d3748;
    }

    .contact-method {
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .contact-details h4 {
      color: #2d3748;
    }

    .contact-form {
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .form-group label {
      color: #2d3748;
    }

    .form-group input,
    .form-group textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.2);
      color: #2d3748;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #a0aec0;
    }
  }
</style>