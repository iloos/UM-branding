// Simple hash-based router for Svelte 5
import { writable } from 'svelte/store';

function createRouter() {
  const { subscribe, set } = writable(window.location.hash.slice(1) || '/');

  function navigate(path) {
    window.location.hash = path;
  }

  function handleHashChange() {
    const hash = window.location.hash.slice(1) || '/';
    set(hash);
  }

  // Listen to hash changes
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', handleHashChange);
    // Handle initial load
    handleHashChange();
  }

  return {
    subscribe,
    navigate
  };
}

export const router = createRouter();


