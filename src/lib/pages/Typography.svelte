<script>
  import { animate, inView } from 'motion';
  import { onMount } from 'svelte';
  
  const typefaces = [
    {
      name: 'Inter',
      family: "'Inter', sans-serif",
      purpose: 'Primary typeface',
      weights: '400, 600, 700, 800',
      sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789'
    },
    {
      name: 'Fira Code',
      family: "'Fira Code', monospace",
      purpose: 'Monospace / Technical',
      weights: '400, 600',
      sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789 != === => <>'
    }
  ];
  
  const typeScale = [
    { tag: 'H1', size: '2.5rem / 40px', weight: '800', spacing: '-3%', sample: 'Display Heading' },
    { tag: 'H2', size: '1.8rem / 29px', weight: '700', spacing: '-2%', sample: 'Section Heading' },
    { tag: 'H3', size: '1.2rem / 19px', weight: '600', spacing: 'normal', sample: 'Subsection Heading' },
    { tag: 'P', size: '1rem / 16px', weight: '400', spacing: 'normal', sample: 'Body text and paragraphs use Inter at 1rem with weight 400. Line height is set to 1.6 for comfortable reading.' }
  ];
  
  let selectedFont = $state('Inter');
  
  function getFontFamily(font) {
    return font === 'Inter' ? "'Inter', sans-serif" : "'Fira Code', monospace";
  }
  
  onMount(() => {
    inView('.typeface-card', ({ target }) => {
      animate(target,
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 0.6, easing: [0.22, 1, 0.36, 1] }
      );
    });
    
    inView('.scale-item', ({ target }) => {
      animate(target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.5 }
      );
    });
  });
</script>

<div class="typography-page">
  <div class="container">
    <h1>Typography System</h1>
    <p class="subtitle mono">Inter for content, Fira Code for technical elements</p>
    <!-- Typefaces -->
    <section class="section">
      <h2>Typefaces</h2>
      
      {#each typefaces as typeface}
        <div class="typeface-card">
          <div class="typeface-header">
            <h3 style="font-family: {typeface.family}">{typeface.name}</h3>
            <div class="typeface-meta mono">
              <span>{typeface.purpose}</span>
              <span>Weights: {typeface.weights}</span>
            </div>
          </div>
          <div class="typeface-sample" style="font-family: {typeface.family}">
            {typeface.sample}
          </div>
        </div>
      {/each}
    </section>
    
    <!-- Type Scale -->
    <section class="section">
      <div class="scale-header">
        <div>
          <h2>Type Scale</h2>
          <p class="mono desc">Live examples at actual sizes</p>
        </div>
        <div class="font-toggle">
          <button 
            class="toggle-btn"
            class:active={selectedFont === 'Inter'}
            onclick={() => selectedFont = 'Inter'}
          >
            Inter
          </button>
          <button 
            class="toggle-btn"
            class:active={selectedFont === 'Fira Code'}
            onclick={() => selectedFont = 'Fira Code'}
          >
            Fira Code
          </button>
        </div>
      </div>
      
      <div class="type-scale">
        {#each typeScale as item}
          <div class="scale-item">
            <div class="scale-sample" style="font-family: {getFontFamily(selectedFont)}">
              {#if item.tag === 'H1'}
                <h1>{item.sample}</h1>
              {:else if item.tag === 'H2'}
                <h2>{item.sample}</h2>
              {:else if item.tag === 'H3'}
                <h3>{item.sample}</h3>
              {:else}
                <p>{item.sample}</p>
              {/if}
            </div>
            <div class="scale-specs mono">
              <span class="tag">{item.tag}</span>
              <span>{item.size}</span>
              <span>weight {item.weight}</span>
              <span>letter-spacing {item.spacing}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>
    
    <!-- Usage Guidelines -->
    <section class="section">
      <h2>Usage Guidelines</h2>
      
      <div class="guidelines-grid">
        <div class="guideline-card">
          <div class="guideline-icon" style="font-family: 'Inter', sans-serif;">Aa</div>
          <h3>Inter</h3>
          <p>Headings, body text, and primary content. Provides clarity and professionalism.</p>
        </div>
        <div class="guideline-card">
          <div class="guideline-icon" style="font-family: 'Fira Code', monospace;">Aa</div>
          <h3>Fira Code</h3>
          <p>Technical specs, metadata, labels, and code snippets. Adds technical authenticity.</p>
        </div>
      </div>
    </section>
    
    <!-- Implementation -->
    <section class="section">
      <h2>Implementation</h2>
      
      <div class="code-section">
        <h3 class="mono">Google Fonts Import</h3>
        <div class="code-block">
          <pre><code>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Fira+Code:wght@400;600&display=swap');`}</code></pre>
        </div>
      </div>
      
      <div class="code-section">
        <h3 class="mono">CSS Variables</h3>
        <div class="code-block">
          <pre><code>{`:root {
  --font-primary: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
}

body {
  font-family: var(--font-primary);
  font-size: 1rem;
  line-height: 1.6;
}

.mono {
  font-family: var(--font-mono);
}`}</code></pre>
        </div>
      </div>
    </section>
    
    <!-- Interactive Demo -->
    <section class="section demo">
      <h2>See It in Action</h2>
      <div class="demo-card">
        <h1>This is a Display Heading</h1>
        <h2>This is a Section Heading</h2>
        <h3>This is a Subsection</h3>
        <p>This is body text. It uses Inter at 1rem (16px) with a line height of 1.6. The spacing makes it comfortable to read long paragraphs. Notice how the text flows naturally and maintains excellent readability.</p>
        <p class="mono">This is technical text using Fira Code. Perfect for specs, code snippets, and metadata.</p>
      </div>
    </section>
  </div>
</div>

<style>
  .typography-page {
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
  
  .section {
    margin: 4rem 0;
  }
  
  .section h2 {
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .desc {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .scale-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 2rem;
  }
  
  .font-toggle {
    display: flex;
    gap: 0.5rem;
    background: var(--bg-secondary);
    padding: 0.5rem;
    border-radius: 12px;
    border: 2px solid var(--border-color);
  }
  
  .toggle-btn {
    padding: 0.6rem 1.25rem;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  
  .toggle-btn:hover {
    color: var(--text-primary);
    background: var(--bg-elevated);
  }
  
  .toggle-btn.active {
    background: var(--um-turquoise);
    color: var(--um-black);
  }
  
  .typeface-card {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  
  .typeface-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .typeface-header {
    margin-bottom: 2rem;
  }
  
  .typeface-header h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .typeface-meta {
    display: flex;
    gap: 2rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .typeface-sample {
    font-size: 1.5rem;
    line-height: 1.6;
    white-space: pre-line;
    color: var(--text-primary);
    padding: 2rem;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  
  .type-scale {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
  }
  
  .scale-item {
    opacity: 0;
  }
  
  .scale-sample {
    background: var(--bg-secondary);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  
  .scale-sample h1,
  .scale-sample h2,
  .scale-sample h3,
  .scale-sample p {
    margin: 0;
  }
  
  .scale-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
  
  .scale-specs .tag {
    background: var(--um-turquoise);
    color: var(--um-black);
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    font-weight: 600;
  }
  
  .guidelines-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .guideline-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }
  
  .guideline-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    background: var(--um-accent-bg);
  }
  
  .guideline-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .guideline-card h3 {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  
  .guideline-card p {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
  
  .code-section {
    margin: 2rem 0;
  }
  
  .code-section h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  .code-block {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    overflow-x: auto;
    box-shadow: var(--shadow-sm);
  }
  
  .code-block pre {
    margin: 0;
  }
  
  .code-block code {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-primary);
  }
  
  .demo-card {
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem;
    margin-top: 2rem;
    box-shadow: var(--shadow-sm);
  }
  
  .demo-card h1 {
    margin-bottom: 1rem;
  }
  
  .demo-card h2 {
    margin-bottom: 1rem;
  }
  
  .demo-card h3 {
    margin-bottom: 1rem;
  }
  
  .demo-card p {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .typography-page {
      padding: 4rem 0 3rem;
    }
    
    .container {
      padding: 0 1.5rem;
    }
    
    .scale-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .font-toggle {
      width: 100%;
    }
    
    .toggle-btn {
      flex: 1;
      padding: 0.7rem 1rem;
    }
    
    .typeface-card {
      padding: 1.5rem;
    }
    
    .typeface-header h3 {
      font-size: 2rem;
    }
    
    .typeface-meta {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .typeface-sample {
      font-size: 1.1rem;
      padding: 1.5rem;
    }
    
    .scale-sample {
      padding: 1.5rem;
    }
    
    .guidelines-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .guideline-card {
      padding: 1.5rem;
    }
    
    .code-block {
      padding: 1.5rem;
    }
    
    .demo-card {
      padding: 1.5rem;
    }
  }
</style>

