import { writable } from 'svelte/store';

// Get initial theme from localStorage or default to light mode
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
  }
  return 'light';
};

export const theme = writable(getInitialTheme());

// Update theme in localStorage and document
theme.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  }
});

