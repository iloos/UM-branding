<script>
  import { animate } from 'motion';
  import { onMount } from 'svelte';
  import { theme } from '../stores.js';
  
  let { onNavigate } = $props();
  let scrollY = $state(0);
  let logoTransform = $state(0);
  
  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }
  
  function scrollToQuadrants() {
    const overview = document.querySelector('.overview');
    if (overview) {
      overview.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }
  
  const quadrants = [
    { id: 'about', title: 'About', color: '#4EF9BD' },
    { id: 'colors', title: 'Colors', color: '#EE1701' },
    { id: 'typography', title: 'Typography', color: '#B307EB' },
    { id: 'logo', title: 'Logo', color: '#3198F1' }
  ];
  
  function handleScroll(e) {
    // Get scroll position from the .overview element
    const target = e.target;
    scrollY = target.scrollTop;
    // Logo moves 1.5x faster (parallax effect)
    logoTransform = scrollY * 1.5;
  }
  
  onMount(() => {
    const overviewEl = document.querySelector('.overview');
    if (overviewEl) {
      overviewEl.addEventListener('scroll', handleScroll);
    }
    
    animate('.hero-logo',
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );
    
    animate('.hero-title',
      { opacity: [0, 1], y: [-20, 0] },
      { delay: 0.2, duration: 1, easing: [0.16, 1, 0.3, 1] }
    );
    
    animate('.hero-link',
      { opacity: [0, 1] },
      { delay: 0.5, duration: 0.8 }
    );
    
    animate('.scroll-indicator',
      { opacity: [0, 1] },
      { delay: 1, duration: 0.8 }
    );
    
    animate('.quadrant',
      { opacity: [0, 1], y: [20, 0] },
      { delay: (i) => 0.8 + (i * 0.08), duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );
    
    return () => {
      if (overviewEl) {
        overviewEl.removeEventListener('scroll', handleScroll);
      }
    };
  });
</script>

<div class="overview">
  <button class="theme-toggle" onclick={toggleTheme} title="Toggle theme">
    {#if $theme === 'light'}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3V1M10 19V17M17 10H19M1 10H3M15.66 15.66L17.07 17.07M2.93 2.93L4.34 4.34M15.66 4.34L17.07 2.93M2.93 17.07L4.34 15.66" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2"/>
      </svg>
    {:else}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
      </svg>
    {/if}
  </button>
  
  <div class="hero">
    <div class="hero-content">
      <img 
        src={$theme === 'dark' ? `${import.meta.env.BASE_URL}images/UnicornMafia_logo_inverse.svg` : `${import.meta.env.BASE_URL}images/UnicornMafia_logo.svg`} 
        alt="Unicorn Mafia"
        class="hero-logo"
        style="transform: translateY(-{logoTransform}px);"
      />
      <h1 class="hero-title">
        <span class="primary">Unicorn Mafia</span>
        <span class="separator">/</span>
        <span class="secondary">Brand Style Guide</span>
      </h1>
      <p class="hero-subtitle mono">Select a section below to explore</p>
      <a href="https://www.unicrnmafia.com" target="_blank" rel="noopener" class="hero-link mono">
        Visit Community Site →
      </a>
    </div>
    <button class="scroll-indicator" onclick={scrollToQuadrants} aria-label="Scroll to sections">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </button>
  </div>
  
  <div class="quadrants-wrapper">
    <div 
      class="central-logo" 
      class:dark={$theme === 'dark'}
      style="background-image: url('{$theme === 'dark' ? `${import.meta.env.BASE_URL}images/UnicornMafia_logo_inverse.svg` : `${import.meta.env.BASE_URL}images/UnicornMafia_logo.svg`}')"
    ></div>
    <div class="quadrants">
      {#each quadrants as quad, i}
      <button 
        class="quadrant"
        onclick={() => onNavigate(quad.id)}
        style="--accent-color: {quad.color}; --delay: {i * 0.1}s"
        aria-label="Navigate to {quad.title}"
      >
        <div class="quad-overlay"></div>
        <h2 class="quad-title mono">{quad.title}</h2>
        <div class="quad-arrow mono">→</div>
      </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .overview {
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
  
  .theme-toggle {
    position: fixed;
    top: 2.5rem;
    right: 2.5rem;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 50%;
    cursor: pointer;
    color: var(--text-primary);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 100;
    box-shadow: var(--shadow-sm);
  }
  
  .theme-toggle:hover {
    background: var(--um-turquoise);
    color: #1A1A1A;
    border-color: var(--um-turquoise);
    transform: rotate(180deg);
    box-shadow: 0 6px 20px rgba(78, 249, 189, 0.3);
  }
  
  .hero {
    flex-shrink: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border-color);
    overflow: hidden;
    scroll-snap-align: start;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-logo {
    width: clamp(120px, 15vw, 180px);
    height: auto;
    margin: 0 auto 2rem;
    opacity: 0;
    transition: transform 0.1s ease-out;
    will-change: transform;
  }
  
  .hero-title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.4;
    margin-bottom: 1.5rem;
    opacity: 0;
    font-weight: 400;
    letter-spacing: 0;
  }
  
  .hero-title .primary {
    font-weight: 800;
    color: var(--text-primary);
  }
  
  .hero-title .secondary {
    font-weight: 400;
    color: var(--text-secondary);
    font-size: 0.8em;
  }
  
  .separator {
    color: var(--text-secondary);
    font-weight: 300;
    padding: 0 0.6rem;
    opacity: 0.5;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards 0.6s;
    font-weight: 500;
  }
  
  .hero-link {
    display: inline-block;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    opacity: 0;
    transition: all 0.3s ease;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    border: 1px solid var(--border-color);
  }
  
  .hero-link:hover {
    color: var(--um-turquoise);
    background: var(--bg-secondary);
    border-color: var(--um-turquoise);
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: 2px solid var(--text-secondary);
    color: var(--text-secondary);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: bounce 2s infinite;
    opacity: 0;
    animation-delay: 1s;
  }
  
  .scroll-indicator:hover {
    border-color: var(--um-turquoise);
    color: var(--um-turquoise);
    transform: translateX(-50%) scale(1.1);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
      opacity: 1;
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
      opacity: 1;
    }
  }
  
  .quadrants-wrapper {
    flex-shrink: 0;
    position: relative;
    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem clamp(1rem, 3vw, 3rem);
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
  
  .central-logo {
    position: absolute;
    inset: 2rem;
    background-size: 45%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
    pointer-events: none;
    z-index: 0;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .central-logo.dark {
    opacity: 0.15;
  }
  
  .quadrants-wrapper:hover .central-logo {
    opacity: 0.12;
    transform: scale(1.03);
  }
  
  .quadrants-wrapper:hover .central-logo.dark {
    opacity: 0.2;
  }
  
  .quadrants {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    height: clamp(500px, 70vh, 700px);
    border-radius: 0;
    overflow: hidden;
  }
  
  .quadrant {
    position: relative;
    background: transparent;
    border: none;
    padding: 3rem;
    cursor: pointer;
    opacity: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.4s ease;
  }
  
  .quad-overlay {
    position: absolute;
    inset: 0;
    background: var(--accent-color);
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .quadrant:hover .quad-overlay {
    opacity: 0.92;
  }
  
  .quad-title {
    position: relative;
    z-index: 2;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 600;
    letter-spacing: 0;
    color: var(--text-primary);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    text-align: center;
  }
  
  .quadrant:hover .quad-title {
    color: #1A1A1A;
    transform: scale(1.05) translateY(-10px);
  }
  
  .quad-arrow {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 2rem;
    color: var(--text-secondary);
    opacity: 0;
    z-index: 2;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateX(-20px);
  }
  
  .quadrant:hover .quad-arrow {
    opacity: 1;
    color: #1A1A1A;
    transform: translateX(0);
  }
  
  
  @media (max-width: 1024px) {
    .quadrants-wrapper {
      max-width: 100%;
    }
    
    .central-logo {
      background-size: 50%;
    }
  }
  
  @media (max-width: 768px) {
    .theme-toggle {
      top: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
    }
    
    .hero-logo {
      width: 100px;
      margin-bottom: 1.5rem;
    }
    
    .hero-title {
      font-size: 1.15rem;
    }
    
    .hero-title .secondary {
      font-size: 0.75em;
    }
    
    .separator {
      padding: 0 0.4rem;
    }
    
    .hero-subtitle {
      font-size: 0.95rem;
    }
    
    .hero-link {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
    
    .scroll-indicator {
      bottom: 2rem;
      width: 40px;
      height: 40px;
    }
    
    .quadrants-wrapper {
      padding: 2rem 1rem;
    }
    
    .central-logo {
      background-size: 70%;
      inset: 1rem;
      opacity: 0.06;
    }
    
    .central-logo.dark {
      opacity: 0.12;
    }
    
    .quadrants {
      grid-template-columns: 1fr;
      gap: 0;
      height: auto;
      min-height: 600px;
    }
    
    .quadrant {
      padding: 2rem;
    }
    
    .quad-title {
      font-size: clamp(1.5rem, 5vw, 2rem);
    }
    
    .quad-arrow {
      font-size: 1.5rem;
      bottom: 1.5rem;
      right: 1.5rem;
    }
  }
</style>

