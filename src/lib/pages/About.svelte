<script>
  import { animate, inView } from 'motion';
  import { onMount } from 'svelte';
  
  const positioning = [
    { label: 'Elite', value: 'Not Elitist', desc: 'Top talent, open mindset', color: '#4EF9BD' },
    { label: 'Technical', value: 'Yet Accessible', desc: 'Deep expertise, clear communication', color: '#EE1701' },
    { label: 'Professional', value: 'Still Raw', desc: 'High standards, authentic energy', color: '#B307EB' },
    { label: 'Collaborative', value: 'Competitive', desc: 'Rise together, win together', color: '#3198F1' }
  ];
  
  const stats = [
    { value: '850+', label: 'Elite Builders', color: '#4EF9BD' },
    { value: '500+', label: 'Hackathon Wins', color: '#EE1701' },
    { value: '30+', label: 'Companies Built', color: '#B307EB' }
  ];
  
  onMount(() => {
    inView('.card', ({ target }) => {
      animate(target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, easing: [0.22, 1, 0.36, 1] }
      );
    });
    
    inView('.stat-card', ({ target }) => {
      animate(target,
        { opacity: [0, 1], scale: [0.9, 1] },
        { duration: 0.5, easing: [0.22, 1, 0.36, 1] }
      );
    });
  });
</script>

<div class="about">
  <div class="container">
    <h1>Brand Identity</h1>
    <p class="subtitle mono">highest signal, zero noise</p>
    
    <!-- Stats -->
    <div class="stats-grid">
      {#each stats as stat}
        <div class="stat-card" style="--accent-color: {stat.color}">
          <div class="stat-value">{stat.value}</div>
          <div class="stat-label mono">{stat.label}</div>
        </div>
      {/each}
    </div>
    
    <!-- Positioning -->
    <div class="card">
      <h2>Positioning</h2>
      <div class="positioning-grid">
        {#each positioning as pos}
          <div class="pos-card" style="--accent-color: {pos.color}">
            <div class="pos-header">
              <span class="pos-label">{pos.label}</span>
              <span class="pos-separator">×</span>
              <span class="pos-value">{pos.value}</span>
            </div>
            <p class="pos-desc mono">{pos.desc}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Voice & Tone -->
    <div class="card">
      <h2>Voice & Tone</h2>
      <div class="tone-grid">
        <div class="tone-item">
          <h3>Confident</h3>
          <p>We're the best builders in London/EU. No question.</p>
        </div>
        <div class="tone-item">
          <h3>Direct</h3>
          <p>No fluff, no corporate speak, no BS.</p>
        </div>
        <div class="tone-item">
          <h3>Technical</h3>
          <p>We speak in code, not buzzwords.</p>
        </div>
        <div class="tone-item">
          <h3>Community</h3>
          <p>Building together, winning together.</p>
        </div>
      </div>
    </div>
    
    <!-- Visual Language -->
    <div class="card visual">
      <h2>Visual Language</h2>
      <p class="visual-desc">High-contrast minimalism meets pixel-art nostalgia. The unicorn represents our technical roots and gaming culture. Four vibrant accents reflect the diversity of skills in our community.</p>
      <div class="color-showcase">
        <div class="color-item">
          <div class="color-swatch" style="background: var(--um-turquoise)"></div>
          <span class="mono">Turquoise</span>
        </div>
        <div class="color-item">
          <div class="color-swatch" style="background: var(--um-red)"></div>
          <span class="mono">Red</span>
        </div>
        <div class="color-item">
          <div class="color-swatch" style="background: var(--um-purple)"></div>
          <span class="mono">Purple</span>
        </div>
        <div class="color-item">
          <div class="color-swatch" style="background: var(--um-blue)"></div>
          <span class="mono">Blue</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .about {
    min-height: calc(100vh - 80px);
    padding: 6rem 0 4rem;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  h1 {
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  
  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .stat-card {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--accent-color, var(--um-turquoise));
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--accent-color, var(--um-turquoise));
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }
  
  .stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  
  /* Cards */
  .card {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  
  .card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .card h2 {
    color: var(--text-primary);
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  /* Positioning */
  .positioning-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .pos-card {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  
  .pos-card:hover {
    background: var(--um-accent-bg);
    transform: translateX(4px);
  }
  
  .pos-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }
  
  .pos-label {
    font-weight: 700;
    color: var(--text-primary);
    font-size: 1.1rem;
  }
  
  .pos-separator {
    color: var(--accent-color, var(--um-turquoise));
    font-weight: 600;
  }
  
  .pos-value {
    font-weight: 600;
    color: var(--accent-color, var(--um-turquoise));
    font-size: 1.1rem;
  }
  
  .pos-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Voice & Tone */
  .tone-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .tone-item h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .tone-item p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
  }
  
  /* Visual Language */
  .visual-desc {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .color-showcase {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  
  .color-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .color-swatch {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .color-swatch:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px currentColor;
  }
  
  .color-item span {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  
  @media (max-width: 768px) {
    .about {
      padding: 4rem 0 3rem;
    }
    
    .container {
      padding: 0 1.5rem;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .stat-card {
      padding: 1.5rem;
    }
    
    .stat-value {
      font-size: 2rem;
    }
    
    .card {
      padding: 1.5rem;
    }
    
    .positioning-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .tone-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .color-showcase {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
