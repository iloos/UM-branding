<script>
  import { animate, inView } from 'motion';
  import { onMount } from 'svelte';
  import { copyToClipboard } from '../utils.js';
  
  const primaryColors = [
    { name: 'Off-Black', hex: '#1A1A1A', rgb: 'rgb(26, 26, 26)', var: '--um-black' },
    { name: 'Off-White', hex: '#F8F8F8', rgb: 'rgb(248, 248, 248)', var: '--um-white' }
  ];
  
  const accentColors = [
    { name: 'Turquoise', hex: '#4EF9BD', rgb: 'rgb(78, 249, 189)', var: '--um-turquoise', desc: 'Energy, innovation' },
    { name: 'Red', hex: '#EE1701', rgb: 'rgb(238, 23, 1)', var: '--um-red', desc: 'Urgency, passion' },
    { name: 'Purple', hex: '#B307EB', rgb: 'rgb(179, 7, 235)', var: '--um-purple', desc: 'Creativity, premium' },
    { name: 'Blue', hex: '#3198F1', rgb: 'rgb(49, 152, 241)', var: '--um-blue', desc: 'Trust, technical' }
  ];
  
  let copiedColor = $state(null);
  
  async function handleCopy(hex) {
    const success = await copyToClipboard(hex);
    if (success) {
      copiedColor = hex;
      setTimeout(() => copiedColor = null, 1500);
    }
  }
  
  onMount(() => {
    inView('.color-card', ({ target }) => {
      animate(target,
        { opacity: [0, 1], scale: [0.9, 1], rotateY: [10, 0] },
        { duration: 0.6, easing: [0.22, 1, 0.36, 1] }
      );
    });
    
    inView('.code-block', ({ target }) => {
      animate(target,
        { opacity: [0, 1], x: [-30, 0] },
        { duration: 0.6 }
      );
    });
  });
</script>

<div class="colors-page">
  <div class="container">
    <h1>Color Palette</h1>
    <p class="subtitle mono">click any swatch to copy hex code</p>
    <!-- Primary Colors -->
    <section class="section">
      <h2>Primary Foundation</h2>
      <p class="mono desc">off-black and off-white form the core</p>
      
      <div class="color-grid">
        {#each primaryColors as color}
          <button 
            class="color-card"
            onclick={() => handleCopy(color.hex)}
            style="--color: {color.hex}"
          >
            <div class="color-swatch" style="background: {color.hex}"></div>
            <div class="color-info">
              <div class="color-name">{color.name}</div>
              <div class="color-hex mono">{color.hex}</div>
              <div class="color-rgb mono">{color.rgb}</div>
              {#if copiedColor === color.hex}
                <div class="copied-badge mono">Copied!</div>
              {/if}
            </div>
          </button>
        {/each}
      </div>
    </section>
    
    <!-- Accent Colors -->
    <section class="section">
      <h2>Vibrant Accents</h2>
      <p class="mono desc">from the pixel-art unicorn • use sparingly</p>
      
      <div class="color-grid accent-grid">
        {#each accentColors as color}
          <button 
            class="color-card accent"
            onclick={() => handleCopy(color.hex)}
            style="--color: {color.hex}"
          >
            <div class="color-swatch" style="background: {color.hex}"></div>
            <div class="color-info">
              <div class="color-name">{color.name}</div>
              <div class="color-desc mono">{color.desc}</div>
              <div class="color-hex mono">{color.hex}</div>
              <div class="color-rgb mono">{color.rgb}</div>
              {#if copiedColor === color.hex}
                <div class="copied-badge mono">Copied!</div>
              {/if}
            </div>
          </button>
        {/each}
      </div>
    </section>
    
    <!-- Usage Guidelines -->
    <section class="section usage">
      <h2>Usage Philosophy</h2>
      <div class="usage-grid">
        <div class="usage-card">
          <div class="usage-icon">🎨</div>
          <h3>Foundation</h3>
          <p class="mono">Off-Black + Off-White → 90% of design</p>
        </div>
        <div class="usage-card">
          <div class="usage-icon">✨</div>
          <h3>Accents</h3>
          <p class="mono">All 4 colors → strategic emphasis</p>
        </div>
        <div class="usage-card">
          <div class="usage-icon">🎯</div>
          <h3>Balance</h3>
          <p class="mono">Mix colors → maintain visual harmony</p>
        </div>
        <div class="usage-card">
          <div class="usage-icon">⚡</div>
          <h3>Contrast</h3>
          <p class="mono">High contrast → always</p>
        </div>
      </div>
    </section>
    
    <!-- CSS Variables -->
    <section class="section">
      <h2>Implementation</h2>
      <div class="code-block">
        <pre><code>{`:root {
  --um-black: #1A1A1A;
  --um-white: #F8F8F8;
  --um-turquoise: #4EF9BD;
  --um-red: #EE1701;
  --um-purple: #B307EB;
  --um-blue: #3198F1;
}`}</code></pre>
      </div>
      
      <div class="demo-container">
        <!-- Accents on Dark -->
        <div class="demo-group">
          <div class="pair">
            <div class="pair-demo" style="background: #1A1A1A; color: #4EF9BD">
              <span class="mono">Turquo on Black</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #1A1A1A; color: #EE1701">
              <span class="mono">Red on Black</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #1A1A1A; color: #B307EB">
              <span class="mono">Purple on Black</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #1A1A1A; color: #3198F1">
              <span class="mono">Blue on Black</span>
            </div>
          </div>
        </div>
        
        <!-- Accents as backgrounds -->
        <div class="demo-group">
          <div class="pair">
            <div class="pair-demo" style="background: #4EF9BD; color: #1A1A1A">
              <span class="mono">Black on Turquo</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #EE1701; color: #F8F8F8">
              <span class="mono">White on Red</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #B307EB; color: #F8F8F8">
              <span class="mono">White on Purple</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #3198F1; color: #F8F8F8">
              <span class="mono">White on Blue</span>
            </div>
          </div>
        </div>
        
        <!-- Foundation -->
        <div class="demo-group foundation">
          <div class="pair">
            <div class="pair-demo" style="background: #F8F8F8; color: #1A1A1A; border: 1px solid #DADADA">
              <span class="mono">Black on White</span>
            </div>
          </div>
          <div class="pair">
            <div class="pair-demo" style="background: #1A1A1A; color: #F8F8F8">
              <span class="mono">White on Black</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .colors-page {
    min-height: calc(100vh - 80px);
    padding: 6rem 0 4rem;
  }
  
  .container {
    max-width: 1200px;
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
  
  .section {
    margin: 4rem 0;
  }
  
  .section h2 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  
  .desc {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .color-card {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
    padding: 0;
    box-shadow: var(--shadow-sm);
  }
  
  .color-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--color);
  }
  
  .color-swatch {
    height: 180px;
    position: relative;
    transition: all 0.4s ease;
  }
  
  .color-card:hover .color-swatch {
    height: 200px;
  }
  
  .color-info {
    padding: 1.5rem;
    position: relative;
  }
  
  .color-name {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  
  .color-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }
  
  .color-hex {
    font-size: 0.95rem;
    color: var(--text-primary);
    margin: 0.25rem 0;
  }
  
  .color-rgb {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  
  .copied-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--um-turquoise);
    color: var(--um-black);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    animation: slideIn 0.3s ease;
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .usage-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .usage-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  
  .usage-card:hover {
    transform: translateY(-4px);
    border-color: var(--um-turquoise);
    background: var(--um-accent-bg);
    box-shadow: var(--shadow-md);
  }
  
  .usage-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .usage-card h3 {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  
  .usage-card p {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
  
  .code-block {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem 0;
    opacity: 0;
    box-shadow: var(--shadow-sm);
  }
  
  .code-block pre {
    margin: 0;
    overflow-x: auto;
  }
  
  .code-block code {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-primary);
  }
  
  .demo-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .demo-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .demo-group.foundation {
    grid-template-columns: 1fr;
  }
  
  .pair-demo {
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .pair-demo:hover {
    transform: scale(1.03);
  }
  
  .pair-demo .mono {
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    .colors-page {
      padding: 4rem 0 3rem;
    }
    
    .container {
      padding: 0 1.5rem;
    }
    
    .color-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .color-card {
      padding: 0;
    }
    
    .color-info {
      padding: 1.25rem;
    }
    
    .usage-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .usage-card {
      padding: 1.5rem;
    }
    
    .code-block {
      padding: 1.5rem;
    }
    
    .demo-container {
      grid-template-columns: 1fr;
    }
  }
</style>


