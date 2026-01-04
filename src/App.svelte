<script>
  import { onMount } from 'svelte';
  import { theme } from './lib/stores.js';
  import Nav from './lib/components/Nav.svelte';
  import Overview from './lib/pages/Overview.svelte';
  import About from './lib/pages/About.svelte';
  import Colors from './lib/pages/Colors.svelte';
  import Typography from './lib/pages/Typography.svelte';
  import Logo from './lib/pages/Logo.svelte';
  
  let currentPage = $state('overview');
  
  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme);
  });
</script>

<div class="app">
  {#if currentPage !== 'overview'}
    <Nav bind:currentPage />
  {/if}
  
  <main class:home={currentPage === 'overview'}>
    {#if currentPage === 'overview'}
      <Overview onNavigate={(page) => currentPage = page} />
    {:else if currentPage === 'about'}
      <About />
    {:else if currentPage === 'colors'}
      <Colors />
    {:else if currentPage === 'typography'}
      <Typography />
    {:else if currentPage === 'logo'}
      <Logo />
    {/if}
  </main>
  
  <footer>
    <div class="container">
      {#if currentPage !== 'overview'}
        <button class="back-home" onclick={() => currentPage = 'overview'}>
          ← Back to Home
        </button>
      {/if}
      <p class="mono" class:centered={currentPage === 'overview'}>
        <a href="https://www.unicrnmafia.com" target="_blank" rel="noopener">unicrnmafia.com</a>
        {' • '}
        <a href="mailto:stable@unicrnmafia.com">stable@unicrnmafia.com</a>
      </p>
    </div>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
  
  main:not(.home) {
    padding-top: 80px;
  }
  
  footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: 1.5rem 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  
  .back-home {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .back-home:hover {
    color: var(--um-turquoise);
  }
  
  footer p {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
  
  footer p.centered {
    margin: 0 auto;
  }
  
  footer a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: var(--text-primary);
  }
  
  @media (max-width: 768px) {
    footer {
      padding: 1.5rem 0;
    }
    
    .container {
      flex-direction: column;
      text-align: center;
      padding: 0 1.5rem;
      gap: 1rem;
    }
    
    footer p {
      font-size: 0.8rem;
    }
  }
</style>

